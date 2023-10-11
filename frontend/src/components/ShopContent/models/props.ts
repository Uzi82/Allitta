import { ReactNode } from 'react';
import type { Shop } from '../../../pages/ShopPage';

export type Props = {
    children: ReactNode;
    data: Shop | null ;
}