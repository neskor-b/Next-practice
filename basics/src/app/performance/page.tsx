import Hero from '@/components/Hero';
import performanceImg from 'public/performance.jpg';

export default function PerformancePage() {
  return (
    <Hero 
      title="We serve high performance applications" 
      imageAlt="Welding" 
      image={performanceImg}
    />
  );
}