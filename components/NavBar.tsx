'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';

const links = [
  { name: 'Bears', href: '/Bears' },
  { name: 'Bunnys', href: '/Bunnys' },
  { name: 'Other Animals', href: '/Toys' },
];

export default function NavBar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="mb-12 border-b border-gray-500 p-6">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className=" font-PlayfairDisplay placeholder:text-2xl md:text-3xl">
            Forest Magique
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg text-gray-600 transition duration-200 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="">
          <Button
            onClick={() => handleCartClick()}
            variant={'outline'}
            className="bg-light-green  border-none hover:text-primary hover:bg-light-green transition duration-200 "
          >
            <ShoppingBag size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
}
