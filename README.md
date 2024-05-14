# mySneakers
Projeto de estudo, que será robusto, utilizando boas praticas de programação, clean code, clean architecture, com o backend em Laravel, frontend em React.js, com banco de dados (mongoDB) e tudo isso utilizando Docker

# Informações importantes
[1] - Instalar os pacotes a parte do JWT para autenticação, adiciona-los dentro do container do backend após subi-lo

	Entrando no container: docker exec -it mysnk-backend bash
	Instalando JWT: composer require php-open-source-save/jwt-auth 
	Adicionando JWT em Providers: php artisan vendor:publish --provider="PHPOpenSourceSaver\JWTAuth\Providers\LaravelServiceProvider" 
