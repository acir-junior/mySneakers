FROM php:8.2-fpm

#     php8.2-mongodb

RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libonig-dev \
    libzip-dev zlib1g-dev \
    jpegoptim optipng pngquant gifsicle \
    locales \
    zip \
    vim \
    unzip \
    git \
    curl

RUN docker-php-ext-install pdo zip exif pcntl

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN rm -rf vendor && rm -rf composer.lock

COPY . /var/www/html

WORKDIR /var/www/html

RUN chown -R www-data:www-data /var/www/html

RUN composer install --no-scripts --no-autoloader --ignore-platform-reqs

RUN chmod +x artisan

RUN php artisan route:cache
# RUN php artisan optimize:clear
RUN php artisan config:cache

CMD php artisan serve --host=0.0.0.0 --port=8001

EXPOSE 8001