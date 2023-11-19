FROM node:20
WORKDIR /app
COPY . .
RUN yarn install --production
ENV ADDRESS=0.0.0.0 PORT=3000
CMD ["node", "src/index.js"]
EXPOSE 3000