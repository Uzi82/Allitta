### Категории:

#### Получение категорий продуктов:

    URL: GET http://api.localhost/api/products/categories
    Опционально: 
        ?limit={int} (по умолчанию 10)
        ?image={bool} (по умолчанию 0)

    Ответ: JSON массив объектов вида {{id, logotype_path (если image = 1), name}, ...}

### Подкатегории:

#### Получение подкатегорий продуктов:

    URL: GET http://api.localhost/api/products/subcategories
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, category_id, name}, ...}

#### Получение подкатегорий по ID категории:

    URL: GET http://api.localhost/api/products/subcategories/category/{id}
    Опционально: ?limit={int} (по умолчанию 10)

    Ответ: JSON массив объектов вида {{id, category_id, name}, ...}

### Продукты:

#### Получение категорий продуктов:

    URL: GET http://api.localhost/api/products/categories
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, currency, cost}, ...}

#### Поиск по продуктам с фильтром:

    URL: GET http://api.localhost/api/products/search

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
    GET http://api.localhost/api/products/search?page=2&per_page=20&name=lorem&category[]=1&category[]=2&subcategory[]=3&cost=2000&comparison=4&order_by=3

    Допустимые значения параметров:
        ?comparison= (1: равно, 2: не равно, 3: больше или равно, 4: меньше или равно)
        ?category[]= (1: Tech, 2: Electronics, 3: Health and Beauty, 4: Fashion, 5: Furniture, 6: Sports)
        ?order_by= (1: цена по возрастанию, 2: цена по убыванию, 3: по кол-ву продаж)

    Ответ: JSON массив объектов вида {data: {{id, logotype_path, name}, ...}, 'total': {int}, 'current_page': {int}, 'last_page': {int}}

### Рекомендации:

#### Лучшие продукты:

    URL: GET http://api.localhost/api/products/recommendations/best
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, currency, cost, description}, ...}

#### Лучшие категории продуктов:

    URL: GET http://api.localhost/api/products/categories/recommendations/best
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, banner_path, name}, ...}

#### Персональная подборка продуктов:

    URL: GET http://api.localhost/api/products/recommendations/personal
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, currency, cost, description}, ...}

### Магазины:

#### Лучшие магазины:

    URL: GET http://api.localhost/api/shops/recommendations/best
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, products_count}, ...}

### Пользователи:

#### Подписка на email рассылку:

    URL: POST http://api.localhost/api/users/email/distribution/subscribe
    Обязательные поля тела запроса:
        - email: {string}

    Ответ: пустое тело, код 201 Created
