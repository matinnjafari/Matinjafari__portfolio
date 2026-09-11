import vid1 from "../assets/vid1.mp4";
import workPhoto1 from "../assets/work-photo-1.jpg";
import workPhoto2 from "../assets/work-photo2.jpg";
import workPhoto3 from "../assets/work-photo3.jpg";
import workPhoto4 from "../assets/work-photo4.jpg";
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
    title: "Project Two",
    role: "Graphic Designer",
    year: "2026",

    description:
      "A short description of the project.",

    introduction:
      "A short introduction to this project.",

    images: [],

    sections: [],

    behance: "https://www.behance.net/",
  },

  projectThree: {
    title: "Project Three",
    role: "UI/UX Designer",
    year: "2025",

    description:
      "A short description of the project.",

    introduction:
      "A short introduction to this project.",

    images: [],

    sections: [],

    behance: "https://www.behance.net/",
  },
};

export default projects;