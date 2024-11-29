FROM node:latest
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install 
EXPOSE 4000
CMD ["node", "app.js"]



