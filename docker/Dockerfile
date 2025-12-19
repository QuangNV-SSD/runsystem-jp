FROM php:8.3-fpm-alpine3.21

# install the PHP extensions we need
RUN set -eux; \
  \
  apk add --no-cache --virtual .build-deps \
    git \
    coreutils \
    freetype-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    libwebp-dev \
    libzip-dev \
  ;
RUN docker-php-ext-configure gd \
    --with-freetype \
    --with-jpeg=/usr/include \
    --with-webp \
  ;

RUN docker-php-ext-install -j "$(nproc)" \
    gd \
    opcache \
    pdo_mysql \
    mysqli \
    zip \
  ;

RUN runDeps="$( \
    scanelf --needed --nobanner --format '%n#p' --recursive /usr/local \
      | tr ',' '\n' \
      | sort -u \
      | awk 'system("[ -e /usr/local/lib/" $1 " ]") == 0 { next } { print "so:" $1 }' \
  )"; \
  apk add --no-network --virtual .drupal-phpexts-rundeps $runDeps; \
  apk del --no-network .build-deps

# Muốn giữ git lại để xài thì cài ở đây:
RUN apk add --no-cache git

# set recommended PHP.ini settings
# see https://secure.php.net/manual/en/opcache.installation.php
RUN { \
    echo 'opcache.memory_consumption=128'; \
    echo 'opcache.interned_strings_buffer=8'; \
    echo 'opcache.max_accelerated_files=4000'; \
    echo 'opcache.revalidate_freq=60'; \
  } > /usr/local/etc/php/conf.d/opcache-recommended.ini

COPY ./docker/drupal.ini /usr/local/etc/php/conf.d/custom.ini

COPY --from=composer:2 /usr/bin/composer /usr/local/bin/

ENV DRUPAL_VERSION 11.1.1

ENV COMPOSER_ALLOW_SUPERUSER 1

WORKDIR /var/www/html

ENV PATH=${PATH}:/var/www/html/vendor/bin

