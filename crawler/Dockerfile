
# argon is last LTS version
FROM node:8.5.0

MAINTAINER Marc s4161035@gmail.com

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

# Start App
CMD [ "npm", "start" ]