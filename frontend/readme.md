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

    Ответ: пустое тело, код 201 Created

#### Проверка кода для подтверждения email:

    URL: GET http://localhost/api/users/email/verify/check
    Обязательные поля тела запроса:
        - email: {string}
        - user_type: {int} (2 - customer, 3 - merchant)
        - code: {int} (от 100000 до 999999) *универсальное значение для прохождения тестирования - 100000

    Ответ: пустое тело, код 200 OK
