import About from '@/components/About';
import Hero from '../components/Hero';
import Newest from '../components/Newest';
import SignUpForm from '@/components/SignUpForm';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <About />
    </div>
  );
}
