FROM mysql:5.7
FROM node:4.2
MAINTAINER MONALI SHINDE <monalishinde196@email.com>

ENV MYSQL_DATABASE=test \
    MYSQL_ROOT_PASSWORD=ddn 

COPY student.sql /docker-entrypoint-initdb.d/

RUN mkdir -p /app

copy . /app
WORKDIR /app
COPY package.json /app
RUN npm install
EXPOSE 8080

ENTRYPOINT ["node"]

CMD ["index.js"]
