FROM node:alpine
WORKDIR /usr/src/app
COPY ./package.json .
COPY ./package-lock.json .
ENV NODE_ENV=production
RUN npm install --production
COPY ./build .
CMD ["node", "server.js"]
EXPOSE 3000