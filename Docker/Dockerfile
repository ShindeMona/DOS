FROM mysql:latest as builder
WORKDIR /app
MAINTAINER MONALI SHINDE <monalishinde196@email.com>
RUN ["sed", "-i", "s/exec \"$@\"/echo \"not running $@\"/", "/usr/local/bin/docker-entrypoint.sh"]

ENV MYSQL_DATABASE=test \
    MYSQL_ROOT_PASSWORD=ddn \
    MYSQL_USER=root \
    MYSQL_PASSWORD=ddn 
#    MYSQL_ALLOW_EMPTY_PASSWORD=yes 
COPY student.sql /docker-entrypoint-initdb.d/

FROM node
WORKDIR /app
COPY package*.json ./
COPY --from=builder /app  /var/lib/mysql
copy . /app
RUN npm install
EXPOSE 8080
CMD node index.js
