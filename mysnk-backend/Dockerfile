FROM php:8.2-cli

RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    libpng-dev \
    libonig-dev \
    libzip-dev zlib1g-dev \
    libz-dev \
    libpq-dev \
    jpegoptim optipng pngquant gifsicle \
    postgresql-client \
    zip \
    unzip \
    curl 

RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql
RUN docker-php-ext-install pdo zip exif pcntl pgsql pdo_pgsql

RUN apt-get clean && rm -rf /var/lib/apt/lists/*

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN rm -rf vendor && rm -rf composer.lock

COPY . /home/backend/app

WORKDIR /home/backend/app

RUN chmod +x /home/backend/app/.docker/start-back.sh

CMD [ "/home/backend/app/.docker/start-back.sh" ]

EXPOSE 8001