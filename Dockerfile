FROM node:18-alpine

WORKDIR /opt/maaslar

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]
CMD ["dev"]