FROM node:4.2
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js


FROM mysql:5.7
#RUN  service mysql restart

## The maintainer name and email
MAINTAINER MONALI SHINDE <monalishinde196@email.com>

# database = test and password for root = ddn
ENV MYSQL_DATABASE=test\
    MYSQL_ROOT_PASSWORD=ddn

# when container will be started, we'll have `test` database created with this schema
COPY ./test-dump.sql /docker-entrypoint-initdb.d/

EXPOSE 8080
