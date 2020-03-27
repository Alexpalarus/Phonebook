# Phonebook

## Requirements:
- PHP 7.2.5+ (Extensions: curl, fileinfo, gd2, intl, imap, mbstring, exif, openssl, pdo_mysql)
- MySQL 5.7
- Composer
- NodeJS 12.16
- Yarn 1.22

## Installation

```
composer install
yarn install
yarn build
```

Create file on root **.env.local** with
   
```
DATABASE_URL=mysql://root:root@127.0.0.1:3306/phonebook?serverVersion=5.7
APP_ENV=prod
```

```
php bin/console doctrine:database:create
php bin/console doctrine:migration:migrate (confirm: Y)
```



## Launch server
```
php -S 127.0.0.1:8000 -t public
```