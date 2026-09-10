import "./Credentials.css";

function Credentials() {
  const credentials = [
    {
      name: "Google UX Design Certifications",
      link: "https://coursera.org/share/e9033a46864aff1e6109973fdd7efbbb",
    },
    {
      name: "UI/UX Design — Inverse School",
      link: "https://drive.google.com/file/d/1MKXZ9DOygUpccZYSu3B6tIJWMjrlrZgy/view?usp=sharing",
    },
    {
      name: "React & JavaScript Certifications",
      link: "https://roocket.ir/certifications/fbdbdba0-ffed-4625-87af-f6fa2e4da545/",
    },
  ];



  return (

    <section className="credentials" id="credentials">

      <h2>Credentials</h2>

      <div className="credentials-list">

        {credentials.map((credential, index) => (

          <a

            href={credential.link}

            target="_blank"

            rel="noopener noreferrer"

            className="credential-item"

            key={index}

          >

            <span className="credential-name">

              {credential.name}

            </span>

            <span className="credential-arrow">

              ↗

            </span>

          </a>

        ))}

      </div>

    </section>

  );

}

export default Credentials;