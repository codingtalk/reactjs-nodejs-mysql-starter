FROM alpine

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk update \
    && apk add nodejs \
    && apk add npm

ADD ./app /var/www/html

WORKDIR /var/www/html

CMD  npm config set registry https://registry.npm.taobao.org \

&& chmod -R 777 . \

&& npm install \

&& npm run start --env=prod \

&& echo "nodejs 启动完成"