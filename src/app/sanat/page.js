import AllBrands from '../components/AllBrands';
import ModaProjeleri from '../components/ModaProjeleri';
import OzelProjeler from '../components/OzelProjeler';
import SanatEtkinlikleri from '../components/SanatEtkinlikleri';
import SanatSection from '../components/SanatSection';
import SanatTImg from '../components/SanatTImg';
import VideoSection from '../components/VideoSection';

export default function About() {
  return (
    <>
      <SanatSection />
      <OzelProjeler />
      <ModaProjeleri />
      <SanatEtkinlikleri />
      <AllBrands />
      <SanatTImg />
      <VideoSection />
    </>
  );
}
