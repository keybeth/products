FROM keymetrics/pm2:latest-alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

# Bundle APP files
COPY .env /home/node/app/.env
COPY . /home/node/app/

# Show current folder structure in logs
RUN ls -al -R

# Build bundle
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production
RUN npm run-script build

EXPOSE 4000
CMD [ "npm", "run-script", "start:prod" ]