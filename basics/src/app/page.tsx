import homeImg from 'public/home.jpg';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Hero title="Proffessional Cloud Hosting" imageAlt="car factory" image={homeImg}/>
  );
}
