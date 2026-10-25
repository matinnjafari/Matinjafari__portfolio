import vid1 from "../assets/vid1.MP4";
import workPhoto1 from "../assets/work-photo1.JPG";
import workPhoto2 from "../assets/work-photo2.jpg";
import workPhoto3 from "../assets/work-photo3.jpg";
import workPhoto4 from "../assets/work-photo4.jpg";
import project2Placeholder from "../assets/work1.png";
// import posterEng from "../assets/poster-eng.jpg";
// import posterClass from "../assets/poster-class.jpg";



const projects = {
  projectOne: {
    title: "Polyhaq",
    role: "Graphic Designer",
    year: "2026",

    description:
      "Polyhaq is Iran's first quantum hackathon. I developed its graphic identity using space-inspired colors to create a dark, immersive, and futuristic visual language.",

    introduction:
      "Polyhaq is Iran's first quantum hackathon. The visual identity explores quantum physics through Schrödinger's cat as its central visual symbol.",

    video: vid1,

    images: [
      workPhoto1,
      workPhoto2,
      // posterEng,
      // posterClass,
      workPhoto3,
      workPhoto4
    ],

    sections: [
      {
        title: "The Idea",
        text:
          "Schrödinger's cat became the central symbol of the visual identity. The idea was to connect a familiar representation of quantum mechanics with the energy of a hackathon.",
      },

      {
        title: "The Visual Language",
        text:
          "The identity is built around colors that evoke the feeling of space, creating a dark and immersive atmosphere while taking the viewer into a futuristic world. Dark purple, hot pink, and white create a strong contrast.",
      },

      {
        title: "The Result",
        text:
          "The final visual system brings the concept together across the event's graphic materials, creating a recognizable identity for Polyhaq.",
      },
    ],

    behance: "https://www.behance.net/",
  },
  projectTwo: {
  title: "Rastafan Trading System",
  role: "UI/UX Designer",
  year: "2026",

  description:
    "A UX redesign of an internal procurement and management system used by approximately 1,000 employees at Rastafan.",

  introduction:
    "Rastafan's Trading System is an internal platform used by employees to manage purchasing processes within the company. I redesigned key parts of the system to make everyday tasks clearer, faster, and easier to navigate.",

  sections: [
    {
      title: "The Problem",
      text:
        "The existing system had several UX issues that made common tasks unnecessarily difficult. The interface contained confusing interactions, unclear information hierarchy, and navigation patterns that created friction in everyday workflows.",

      images: [project2Placeholder],
    },

    {
      title: "Understanding the Existing Experience",
      text:
        "I reviewed the existing interface and its main workflows to identify areas where users experienced unnecessary complexity.",

      images: [project2Placeholder],
    },

    {
      title: "User Flow",
      text:
        "I mapped the main purchasing workflow to understand how users move through the system, from creating a purchase request to managing requests through the dashboard.",

      images: [project2Placeholder],
    },

    {
      title: "Wireframes",
      text:
        "I explored different layouts and information structures through wireframes before moving into the final visual design.",

      images: [
        project2Placeholder,
        project2Placeholder,
      ],
    },

    {
      title: "Design Decisions",
      text:
        "The redesign focused on creating a clearer information hierarchy, reducing unnecessary complexity, and making important actions easier to discover.",

      images: [
        project2Placeholder,
        project2Placeholder,
      ],
    },

    {
      title: "Redesign",
      text:
        "The first redesigned areas were the Create Purchase Request page and the Cartable. These screens were redesigned around the workflows employees use when creating, reviewing, and managing purchase requests.",

      images: [
        project2Placeholder,
        project2Placeholder,
      ],
    },

    {
      title: "Prototype",
      text:
        "Interactive prototypes were created to demonstrate the redesigned workflows and show how users can move through the system more efficiently.",

      images: [project2Placeholder],
    },
  ],

  behance: "https://www.behance.net/",
}
};


export default projects;