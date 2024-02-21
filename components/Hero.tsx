import { client, urlFor } from '@/app/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import categoryFetch from '@/app/lib/sanity';
import { heroImagesFetch } from '@/app/lib/sanity';
import { Category } from '@/app/intarface';

export default async function Hero() {
  const heroImages = await heroImagesFetch();
  const categories = await categoryFetch();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="font-PlayfairDisplay mb-4 text-4xl font-bold text-dark-brown sm:text-5xl md:mb-8 md:text-5xl">
            Magic of Forest Friends
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Embrace the charm of artisanal storytelling with our hand-knitted
            toys, crafted to bring warmth and whimsy into every embrace.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="animate-fade-up relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              priority
              src={urlFor(heroImages.image1).url()}
              alt="Great Photo"
              className="  h-full w-full object-cover object-center"
              width={500}
              height={500}
            />
          </div>
          <div className=" animate-fade-in overflow-hidden rounded-lg bg-transparent shadow-lg">
            <Image
              priority
              src={urlFor(heroImages.image2).url()}
              alt="Also great image"
              className="  h-full  object-cover object-center"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="animate-slide-text flex g-12 w-64 divide-x divide-custom-green/40 overflow-hidden rounded border">
          {categories.map((category: Category, index: number) => (
            <Link
              key={index}
              href={`/${category.name}`}
              className="flex w-1/3 py-1 items-center justify-center  bg-custom-green/30 text-stale-500 transition duration-200 hover:bg-light-pink active:bg-gray-200"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
