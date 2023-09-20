<?php

namespace App\Enums;

enum PathEnum: string
{
    case PRODUCT_IMAGES_LOGOTYPES = 'storage/images/products/logotypes/';
    case SHOP_IMAGES_LOGOTYPES = 'storage/images/shops/logotypes/';
    case SHOP_IMAGES_BANNERS = 'storage/images/shops/banners/';
    case USER_IMAGES_PROFILE = 'storage/images/users/photos/';
    case PRODUCT_IMAGES_CATEGORIES = 'storage/images/products/categories/';
}
