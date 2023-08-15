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

FROM python:3.11-slim
    COPY ./API/. /home/api
    COPY --from=angular-build /source/dist/ui/. /home/api/static/
    COPY --from=angular-build /source/dist/ui/index.html /home/api/template/

    WORKDIR /home/api/template/
    RUN ls
    WORKDIR /home/api/static/
    RUN ls
    WORKDIR /home/api
    RUN ls

    WORKDIR /home/api
    ENV PYTHONUNBUFFERED 1
    RUN pip3 install -r /home/api/requirements.txt 

    ENV FLASK_APP=flask-api.py
    # CMD ["python","flask-api.py"]
    CMD ["flask", "run", "--host=0.0.0.0"]
