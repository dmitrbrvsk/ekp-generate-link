FROM node:12-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY public public
COPY src src
RUN yarn run build

RUN yarn global add serve
CMD serve -s build