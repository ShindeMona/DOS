FROM mysql
MAINTAINER Monali Shinde <monalishinde196@gmail.com>

# database = test and password for root = password
ENV MYSQL_DATABASE=test \
    MYSQL_ROOT_PASSWORD=password
COPY ./test-dump.sql /docker-entrypoint-initdb.d/
EXPOSE 3306

FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js
EXPOSE 8080
