FROM node:12.18.4-alpine3.9

RUN npm install -g yarn && chmod +x /usr/local/bin/yarn

ENV PATH "$PATH:/app/node_modules/.bin"
