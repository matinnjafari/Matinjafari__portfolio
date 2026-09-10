import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Work from "../components/Work/Work";
import Credentials from "../components/Credentials/Credentials";
import Footer from "../components/Footer/Footer";

import de from "../content/de";

function GermanHome() {
  return (
    <div lang="de">
      <Header content={de} />

      <main>
        <Hero content={de.hero} />
        <Work content={de.work} />
        <Credentials />
      </main>

      <Footer content={de.footer} />
    </div>
  );
}

export default GermanHome;