<?php

use App\Enums\ProductCategoryEnum;
use App\Enums\ProductSubcategoryEnum;

return [
    'category' => [
        'children' => [
            ProductCategoryEnum::TECH->value => [
                ProductSubcategoryEnum::LAPTOPS->value,
                ProductSubcategoryEnum::DESKTOPS->value
            ],
            ProductCategoryEnum::ELECTRONICS->value => [
                ProductSubcategoryEnum::SMARTPHONES->value,
                ProductSubcategoryEnum::HEADPHONES->value
            ],
            ProductCategoryEnum::HEALTH_AND_BEAUTY->value => [
                ProductSubcategoryEnum::FACE_MASKS->value,
                ProductSubcategoryEnum::COSMETICS->value
            ],
            ProductCategoryEnum::FASHION->value => [
                ProductSubcategoryEnum::MENS_CLOTHING->value,
                ProductSubcategoryEnum::WOMENS_CLOTHING->value
            ],
            ProductCategoryEnum::FURNITURE->value => [
                ProductSubcategoryEnum::TABLES->value,
                ProductSubcategoryEnum::WARDROBES->value
            ],
            ProductCategoryEnum::SPORTS->value => [
                ProductSubcategoryEnum::DUMBBELLS->value,
                ProductSubcategoryEnum::JUMP_ROPES->value
            ]
        ]
    ]
];
