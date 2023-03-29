FROM node:18-alpine

WORKDIR /opt/yazilim-maas

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]
CMD ["dev"]