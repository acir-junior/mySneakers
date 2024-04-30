FROM debian:12

RUN apt-get update && apt-get full-upgrade && apt-get install -y \
    zip \
    autoconf pkg-config \
    libssl-dev \
    unzip \
    libzip-dev zlib1g-dev \ 
    php8.2 \ 
    php8.2-cli \
    php8.2-common \
    php8.2-fpm \
    php8.2-mysql \
    php8.2-zip \
    php8.2-gd \
    php8.2-mbstring \
    php8.2-curl \
    php8.2-xml \
    php8.2-bcmath \
    php8.2-pdo \
    php8.2-mongodb

RUN apt install -y curl
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN rm -rf vendor && rm -rf composer.lock

COPY . /var/www/html

WORKDIR /var/www/html

RUN chown -R www-data:www-data /var/www/html

RUN composer install --no-scripts --no-autoloader --ignore-platform-reqs

RUN chmod +x artisan

RUN composer require mongodb/laravel-mongodb:4.3.0

RUN php artisan config:cache

CMD php artisan serve --host=0.0.0.0 --port=8001

EXPOSE 8001