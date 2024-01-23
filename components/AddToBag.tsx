'use client';

import { url } from 'inspector';
import { Button } from './ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { urlFor } from '@/app/lib/sanity';

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
}

export default function AddToBag({
  description,
  name,
  price,
  currency,
  image,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: '312',
  };
  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add to cart
    </Button>
  );
}
