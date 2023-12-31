FROM node:latest AS angular-build
WORKDIR /source

# Install required npm dependencies
RUN npm install -g npm@latest

# Copy package.json and install required npm files
COPY ./UI/package.json /source/package.json
RUN npm install

# Copy everything and compile application
COPY ./UI/. /source/
RUN npm run-script compile

FROM python:3.11-slim AS python-host

COPY ./API/. /home/api
COPY --from=angular-build /source/dist/ui/. /home/api/public/

WORKDIR /home/api
ENV PYTHONUNBUFFERED 1
RUN pip3 install -r /home/api/requirements.txt 

ENV FLASK_APP=flask-api.py
CMD ["flask", "run", "--host=0.0.0.0"]
