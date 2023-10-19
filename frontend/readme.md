### Категории:

#### Получение категорий продуктов:

    URL: GET http://localhost/api/products/categories
    Опционально: 
        ?limit={int} (по умолчанию 10)
        ?image={bool} (по умолчанию 0)

    Ответ: JSON массив объектов вида {{id, logotype_path (если image = 1), name}, ...}

### Подкатегории:

#### Получение подкатегорий продуктов:

    URL: GET http://localhost/api/products/subcategories
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, category_id, name}, ...}

#### Получение подкатегорий по ID категории:

    URL: GET http://localhost/api/products/subcategories/category/{id}
    Опционально: ?limit={int} (по умолчанию 10)

    Ответ: JSON массив объектов вида {{id, category_id, name}, ...}

### Продукты:

#### Получение категорий продуктов:

    URL: GET http://localhost/api/products/categories
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, currency, cost}, ...}

#### Поиск по продуктам с фильтром:

    URL: GET http://localhost/api/products/search

    Опционально:
        ?name={string}
        ?cost={integer} (передаётся только вместе с comparison)
        ?comparison={integer}
        ?category[]={integer}
        ?subcategory[]={integer}
    
    Обязательные поля:
        ?page={integer}
        ?per_page={integer}
        ?order_by={integer}

    Пример запроса, на получение 20 самых популярных товаров для второй страницы, по названию товаров 'lorem', категории 1 и 2 и подкатегории 3, цена которых меньше или равна 2000.
    GET http://localhost/api/products/search?page=2&per_page=20&name=lorem&category[]=1&category[]=2&subcategory[]=3&cost=2000&comparison=4&order_by=3

    Допустимые значения параметров:
        ?comparison= (1: равно, 2: не равно, 3: больше или равно, 4: меньше или равно)
        ?category[]= (1: Tech, 2: Electronics, 3: Health and Beauty, 4: Fashion, 5: Furniture, 6: Sports)
        ?order_by= (1: цена по возрастанию, 2: цена по убыванию, 3: по кол-ву продаж)

    Ответ: JSON массив объектов вида {data: {{id, logotype_path, name}, ...}, 'total': {int}, 'current_page': {int}, 'last_page': {int}}

### Рекомендации:

#### Лучшие продукты:

    URL: GET http://localhost/api/products/recommendations/best
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, currency, cost, description}, ...}

#### Лучшие категории продуктов:

    URL: GET http://localhost/api/products/categories/recommendations/best
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, banner_path, name}, ...}

#### Персональная подборка продуктов:

    URL: GET http://localhost/api/products/recommendations/personal
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, currency, cost, description}, ...}

### Магазины:

#### Лучшие магазины:

    URL: GET http://localhost/api/shops/recommendations/best
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, products_count}, ...}

#### Информация о магазине с товарами с группированными по категориям и отсортированными по продажам:

    URL: GET http://localhost/api/shops/{id}
    Опционально: ?product_limit={int} (по умолчанию 10)
    Опционально: ?category_limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида 
        {
	        shop: {id, name, logotype_path, banner_path, description, rating},
	        data: {
	        	{category_id, category_name, products: {{id, name, logotype_path, currency, cost, description}, ...}},
	        	...
        }

### Пользователи:

#### Регистрация кастомера:

    URL: POST http://localhost/api/users/customer/register
    Обязательные поля тела запроса:
        - first_name: {string max: 25}
        - last_name: {string max: 25}
        - full_name: {string max: 50}
        - email: {string}
        - password: {string min: 6 max:100}
        - birthday: {date, format:Y-m-d}
        - gender: {int} (1 - male, 2 - female)
        - phone_number: {string}
        - street: {string max: 100}
        - city: {string max: 25}
        - zip_code: {string max: 50}

    Ответ: пустое тело, код 201 Created

#### Регистрация мерчанта:

    URL: POST http://localhost/api/users/merchant/register
    Обязательные поля тела запроса:
        - first_name: {string max: 25}
        - last_name: {string max: 25}
        - full_name: {string max: 50}
        - email: {string}
        - password: {string min: 6 max:100}
        - birthday: {date, format:Y-m-d}
        - gender: {int} (1 - male, 2 - female)
        - phone_number: {string}
        - street: {string max: 100}
        - city: {string max: 25}
        - zip_code: {string max: 50}

    Ответ: пустое тело, код 201 Created

#### Аутентификация кастомера:

    URL: POST http://localhost/api/users/customer/login
    Обязательные поля тела запроса:
        - email: {string}
        - password: {string min: 6 max:100}

    Ответ: {jwt_token: {string}, token_type: {string}, expires_in: {int seconds}}, код 200 OK

#### Аутентификация мерчанта:

    URL: POST http://localhost/api/users/merchant/login
    Обязательные поля тела запроса:
        - email: {string}
        - password: {string min: 6 max:100}

    Ответ: {jwt_token: {string}, token_type: {string}, expires_in: {int seconds}}, код 200 OK

#### Восстановление аккаунта кастомера:

    URL: POST http://localhost/api/users/customer/restore
    Обязательные поля тела запроса:
        - email: {string}
        - password: {string min: 6 max:100}

    Ответ: пустое тело, код 200 OK

#### Восстановление аккаунта кастомера:

    URL: POST http://localhost/api/users/merchant/restore
    Обязательные поля тела запроса:
        - email: {string}
        - password: {string min: 6 max:100}

    Ответ: пустое тело, код 200 OK

#### JWT | Выход из аккаунта кастомера:

    URL: GET http://localhost/api/users/customer/logout
  
    Ответ: пустое тело, 401 Unauthorized

#### JWT | Выход из аккаунта мерчанта:

    URL: GET http://localhost/api/users/merchant/logout
   
    Ответ: пустое тело, код 401 Unauthorized

#### JWT | Смена фото в профиле кастомера:

    URL: GET http://localhost/api/users/customer/profile/photo
    Обязательные поля тела запроса:
    - photo: {formdata image}
  
    Ответ: пустое тело, код 200 OK

#### JWT | Смена фото в профиле мерчанта:

    URL: GET http://localhost/api/users/merchant/profile/photo
    Обязательные поля тела запроса:
    - photo: {formdata image}
   
    Ответ: пустое тело, код 200 OK

#### JWT | Обновление токена кастомера:

    URL: GET http://localhost/api/users/customer/refresh
  
    Ответ: {jwt_token: {string}, token_type: {string}, expires_in: {int seconds}}, код 200 OK

#### JWT | Обновление токена мерчанта:

    URL: GET http://localhost/api/users/merchant/refresh
   
    Ответ: {jwt_token: {string}, token_type: {string}, expires_in: {int seconds}}, код 200 OK

#### JWT | Получение списка категорий для магазина:

    URL: GET http://localhost/api/shops/categories
   
    Ответ: {{id, name}, ...}, код 200 OK

#### JWT | Создание магазина:

    URL: POST http://localhost/api/users/merchant/shop

    Обязательные поля тела запроса:
    - name: {string min:3 max:100}
    - description: {string max:1000}
    - category_id: {int (из "Получение списка категорий для магазина" роута)}
    - email: {string}
    - phone_number: {string min:9 max:15}
    - street: {string max:100}
    - city: {string max:25}
    - zip_code: {string max:50}

    Опциональные поля тела запроса:
    - reg_number: {string max:20} *Уникальное значение для каждого магазина
   
    Ответ: {shop_id: {int}}, код 201 Created

#### JWT | Обновление логотипа магазина:

    URL: POST http://localhost/api/users/merchant/shop/logotype

    Обязательные поля тела запроса:
    - shop_id: {int}
    - photo: {formdata image}

    Ответ: {logotype: {string}}, код 200 OK

#### JWT | Обновление баннера магазина:

    URL: POST http://localhost/api/users/merchant/shop/banner

    Обязательные поля тела запроса:
    - shop_id: {int}
    - photo: {formdata image}

    Ответ: {banner: {string}}, код 200 OK

#### JWT | Получение краткой информации о мерчанте:

    URL: GET http://localhost/api/users/merchant/profile/me
   
    Ответ: {name: {string}, img_path: {string}} код 200 OK

#### Подписка на email рассылку:

    URL: POST http://localhost/api/users/email/distribution/subscribe
    Обязательные поля тела запроса:
        - email: {string}

    Ответ: пустое тело, код 201 Created

#### Отправка email на верификацию:

    URL: POST http://localhost/api/users/email/verify
    Обязательные поля тела запроса:
        - email: {string}
        - user_type: {int} (2 - customer, 3 - merchant)
        - event_type: {int} (1 - -, 2 - password restore)

    Ответ: пустое тело, код 201 Created

#### Проверка кода для подтверждения email:

    URL: GET http://localhost/api/users/email/verify/check
    Обязательные поля строки запроса:
        - email: {string}
        - user_type: {int} (2 - customer, 3 - merchant)
        - code: {int} (от 100000 до 999999) *универсальное значение для прохождения тестирования - 100000
        - event_type: {int} (1 - registration, 2 - password restore)

    Ответ: пустое тело, код 200 OK
