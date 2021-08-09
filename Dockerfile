FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY server/package.json ./
COPY server/package-lock.json ./
COPY server/server.js ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8080
CMD [ "node", "server.js" ]