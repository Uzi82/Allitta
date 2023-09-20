## Продукты:
### Категории:
#### Получение категорий продуктов:

    URL: GET http://api.localhost/api/products/categories
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, logotype_path, name}, ...}

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

## Магазины:
### Рекомендации:
#### Лучшие магазины:

    URL: GET http://api.localhost/api/shops/recommendations/best
    Опционально: ?limit={int} (по умолчанию 10)
    Ответ: JSON массив объектов вида {{id, name, logotype_path, products}, ...}
