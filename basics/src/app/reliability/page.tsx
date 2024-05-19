import Hero from '@/components/Hero';
import reliabilityImg from 'public/reliability.jpg';

export default function ReliabilityPage() {
  return (
    <Hero
      title="Super high reliability hosting"
      imageAlt="welding"
      image={reliabilityImg}
    />
  );
}