FROM node:20-slim

COPY --chown=1000:1000 package*.json ./

RUN rm -rf node_modules && rm -rf package-lock.json

WORKDIR /home/frontend/app

COPY . /home/frontend/app

RUN chmod +x /home/frontend/app/.docker/start-front.sh

CMD [ "bash", "/home/frontend/app/.docker/start-front.sh" ]

EXPOSE 5173
