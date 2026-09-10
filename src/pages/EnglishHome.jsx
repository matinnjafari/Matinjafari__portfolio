import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Work from "../components/Work/Work";
import Credentials from "../components/Credentials/Credentials";
import Footer from "../components/Footer/Footer";

import en from "../content/en";

function EnglishHome() {
  return (
    <div lang="en">
      <Header content={en} />

      <main>
        <Hero content={en.hero} />
        <Work content={en.work} />
        <Credentials />
      </main>

      <Footer content={en.footer} />
    </div>
  );
}

export default EnglishHome;