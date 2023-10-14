<?php

namespace App\Enums;

enum PathEnum: string
{
    case PRODUCT_IMAGES_LOGOTYPES = 'images/products/logotypes';
    case SHOP_IMAGES_LOGOTYPES = 'images/shops/logotypes';
    case SHOP_IMAGES_BANNERS = 'images/shops/banners';
    case USER_IMAGES_PROFILE = 'images/users/photos';
    case PRODUCT_IMAGES_CATEGORIES = 'images/products/categories';
}
