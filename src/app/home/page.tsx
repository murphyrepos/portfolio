import HeroSection from './_ui/HeroSection';
import Projects from './_ui/Projects';
import Services from './_ui/Services';

async function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Projects />
    </>
  );
}

export default Home;
