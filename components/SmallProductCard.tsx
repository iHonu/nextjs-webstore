import Image from 'next/image';
import Link from 'next/link';
import { simplifiedProduct } from '@/app/intarface';

export default function ProductItem({
  product,
}: {
  product: simplifiedProduct;
}) {
  return (
    <div className="group relative" key={product._id}>
      <Link href={`/product/${product.slug}`}>
        <div className=" animate-slide-img aspect-square w-full overflow-hidden rounded-md bg-gray-200  lg:h-80">
          <Image
            src={product.imageUrl}
            alt="Product image"
            className="w-full h-full object-cover object-center lg:h-full lg:w-full scale-105 hover:scale-100 transition duration-200 "
            width={300}
            height={300}
          />
        </div>
      </Link>
      <div className="animate-slide-text mt-4 flex justify-between">
        <div className=" ">
          <h3 className=" text-sm text-slate-800 hover:opacity-75 transition duration-200">
            <Link href={`/product/${product.slug}`}>{product.name}</Link>
          </h3>
          <Link href={`/${product.categoryName}`}>
            <p className="mt-1 text-sm text-slate-600 hover:opacity-85">
              {product.categoryName}
            </p>
          </Link>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price} EUR</p>
      </div>
    </div>
  );
}
