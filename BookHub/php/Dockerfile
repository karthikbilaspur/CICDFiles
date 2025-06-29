FROM php:8.3-fpm-alpine

RUN apk update && \
    apk add --no-cache libzip-dev zip && \
    docker-php-ext-install zip pdo_mysql

EXPOSE 9000

CMD ["php-fpm"]