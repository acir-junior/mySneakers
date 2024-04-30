# mySneakers
Projeto de estudo, que será robusto, utilizando boas praticas de programação, clean code, clean architecture, com o backend em Laravel, frontend em React.js, com banco de dados (mongoDB) e tudo isso utilizando Docker

# Informações importantes

# Adicionar a extensão do mongodb no arquivo php.ini 
[-] extension=mongodb.so

# Instalar os pacotes a parte do mongodb com laravel, pois no Dockerfile gera conflitos
[-] composer require mongodb/laravel-mongodb:4.3.0 --ignore-platform-reqs

# Adicionar uma classe de configuração para iniciar o mongodb com laravel. Config/app.php
'providers' => [
      /*
      * Laravel Framework Service Providers...
      */
      MongoDB\Laravel\MongoDBServiceProvider::class,
],
