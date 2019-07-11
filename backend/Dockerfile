FROM node:10.15.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN cd app; npm install;
EXPOSE 7000
CMD [ "node", "app.js" ]