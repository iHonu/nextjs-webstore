import { simplifiedProduct } from '../intarface';
import { client } from '../lib/sanity';
import SmallProductCard from '@/components/SmallProductCard';

async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"] {
    _id, 'imageUrl': images[0].asset->url, price, name, 'slug': slug.current, 'categoryName': category->name
  }`;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = 'force-dynamic';

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: simplifiedProduct[] = await getData(params.category);
  return (
    <>
      <div className="mx-auto max-w02xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for {params.category}
          </h2>
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
