import { simplifiedProduct } from '@/app/intarface';
import { client } from '@/app/lib/sanity';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SmallProductCard from './SmallProductCard';

async function getData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
    _id, price, name, "slug": slug.current, "categoryName": category->name, 'imageUrl': images[0].asset->url 
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl tracking-tight text-dark-brown">
            Our newest products
          </h2>
          <Link href="/all" className="text-primary flex items-center gap-x-1">
            See All{' '}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <SmallProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
