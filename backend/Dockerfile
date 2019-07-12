FROM node:10.15.3

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install;
EXPOSE 7000
CMD [ "node", "app.js" ]