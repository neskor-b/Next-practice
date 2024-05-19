import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type HeroProps = {
    title: string;
    imageAlt: string;
    image: StaticImageData;
}

export default function Hero({ title, imageAlt, image }: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      <div className="absolute pt-48 inset-0 flex justify-center">
        <h1 className="text-5xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
}