FROM node:latest AS build
    WORKDIR /source

    RUN npm install -g npm@latest

    # Copy only angular build files to source folder on image
    COPY ./package.json /source/package.json
    RUN npm install

    COPY ./. /source/
    RUN npm run-script compile

FROM nginx:1.17.1-alpine
    COPY --from=build /source/. /usr/share/nginx/html
