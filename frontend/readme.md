## Продукты:

### Категории:

#### Получение категорий продуктов:

    URL: GET http://api.localhost/api/products/categories
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, img_path, name}, ...}

### Рекомендации:

#### Лучшие продукты:

    URL: GET http://api.localhost/api/products/recommendations/best
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, currency, cost, description}, ...}

#### Персональная подборка:

    URL: GET http://api.localhost/api/products/recommendations/personal
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, currency, cost, description}, ...}

## Магазины:

### Рекомендации:

#### Лучшие магазины:

    URL: GET http://api.localhost/api/shops/recommendations/best
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, products}, ...}
