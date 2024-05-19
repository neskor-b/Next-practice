import Hero from '@/components/Hero';
import scaleImg from 'public/scale.jpg';

export default function ScalePage() {
  return (
    <Hero
      title="Scale your application"
      imageAlt="Still factory"
      image={scaleImg}
    />
  );
}