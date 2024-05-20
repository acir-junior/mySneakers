#!/bin/bash

set -e

composer install --no-scripts --no-autoloader --ignore-platform-req=ext-mongodb

chmod +x artisan

if [ ! -f ".env" ]; then
    cp .env.example .env
fi

# function check_dependency {
#     if grep -q '"php-open-source-save/jwt-auth"' composer.lock; then
#         echo "JWT já instalado."
#     else
#         composer require php-open-source-save/jwt-auth
#     fi
# }
# check_dependency

function wait_for_postgres {
    DB_HOST=${DB_HOST:-mysnk-db}
    DB_PORT=${DB_PORT:-5432}
    DB_DATABASE=${DB_DATABASE:-mysneakersdb}
    DB_USERNAME=${DB_USERNAME:-root}
    DB_PASSWORD=${DB_PASSWORD:-root}

    until pg_isready -h $DB_HOST -p $DB_PORT -U $DB_USERNAME; do
        sleep 2
    done
    echo "PostgreSQL disponível"

    php artisan migrate

}
wait_for_postgres

php artisan route:cache
php artisan config:cache
php artisan optimize:clear

php artisan serve --host=0.0.0.0 --port=8001
