import "./Hero.css";
import img from "../../assets/Img.png";

function Hero({ content }) {
  return (
    <section className="hero" id="about">

      <div className="hero-left">
        <img
          src={img}
          alt="Matin Jafari"
        />
      </div>

      <div className="hero-right">

        <h1>
          {content.title.split("|").map((line, index) => (
            <span key={index}>
              {line}
              {index < content.title.split("|").length - 1 && <br />}
            </span>
          ))}
        </h1>

        <p>
          {content.description}
        </p>

      </div>

    </section>
  );
}

export default Hero;