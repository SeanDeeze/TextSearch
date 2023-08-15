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

FROM python:3.7-slim
    COPY ./API/. /home/api
    COPY --from=angular-build /source/dist/ui/. /home/api/static/
    COPY --from=angular-build /source/src/index.html /home/api/template/

    WORKDIR /home/api
    ENV PYTHONUNBUFFERED 1RUN pip3 install -r /code/requirements.txtCMD ["python","flask-api.py"]
