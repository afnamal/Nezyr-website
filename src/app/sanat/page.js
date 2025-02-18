import ModaProjeleri from '../components/ModaProjeleri';
import OzelProjeler from '../components/OzelProjeler';
import SanatEtkinlikleri from '../components/SanatEtkinlikleri';
import SanatSection from '../components/SanatSection';

export default function About() {
  return (
    <>
      <SanatSection />
      <OzelProjeler />
      <ModaProjeleri />
      <SanatEtkinlikleri />
    </>
  );
}
