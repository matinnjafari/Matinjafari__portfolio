import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Work from "../components/Work/Work";
import Footer from "../components/Footer/Footer";
import fa from "../content/fa";
import Credentials from "../components/Credentials/Credentials";

function PersianHome() {
  return (
    <div dir="rtl" lang="fa">
      <Header content={fa} />

      <main>
        <Hero content={fa.hero} />
        
        <Work content={fa.work} />

        <Credentials />
        
      </main>

      <Footer content={fa.footer} />
    </div>
  );
}

export default PersianHome;