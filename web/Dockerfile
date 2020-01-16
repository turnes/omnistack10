FROM node:lts

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install

EXPOSE 8080

# start app
CMD ["npm", "start"]