import Image from 'next/image';
import { urlFor } from '@/app/lib/sanity';

interface ImageGalleryProps {
  images: any;
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grip gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: any, index: any) => (
          <div key={index} className="overflow-hidden rounded-kg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              width={200}
              height={200}
              alt="photo"
              className="h-full w-full object-cover object-center cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
