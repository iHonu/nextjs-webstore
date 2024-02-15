'use client';

// Import necessary hooks and the categoryFetch function
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { ShoppingBag, Menu } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';
import MenuModal from './MenuModal';
import categoryFetch from '@/app/lib/sanity';
import { Category } from '@/app/intarface';

export default function NavBar() {
  const pathname = usePathname();
  const { handleCartClick, cartCount } = useShoppingCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await categoryFetch();
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mb-12 border-b border-stone-500 p-6  bg-stone-200">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="font-PlayfairDisplay placeholder:text-2xl md:text-3xl cursor-pointer">
            Forest Magique
          </h1>
        </Link>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <MenuModal
                isOpen={isMenuOpen}
                onClose={toggleMenu}
                categories={categories}
              />
            ) : (
              <Menu />
            )}
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? 'flex flex-row gap-2' : 'hidden'
          } lg:flex flex-col lg:flex-row gap-12 2xl:ml-16`}
        >
          {categories.map((category, index) => (
            <div key={index}>
              <Link
                className={`text-lg ${
                  pathname === `/${category.name}`
                    ? 'font-semibold text-primary'
                    : 'text-gray-600 transition duration-200 hover:text-primary'
                }`}
                href={`/${category.name}`}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="relative">
          <div className="absolute -top-1 -right-1 bg-red-400 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </div>
          <Button
            onClick={() => handleCartClick()}
            variant={'outline'}
            className="bg-stone-200 border-none hover:text-primary hover:bg-light-green transition duration-200 flex items-center justify-center"
          >
            <ShoppingBag size={24} />
          </Button>
        </div>
      </div>
    </header>
  );
}
