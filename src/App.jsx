import { BrowserRouter, Routes, Route } from "react-router-dom";

import EnglishHome from "./pages/EnglishHome";
import GermanHome from "./pages/GermanHome";
import PersianHome from "./pages/PersianHome";

import ProjectPage from "./components/ProjectPage/ProjectPage";

import projects from "./content/projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME PAGES */}

        <Route path="/" element={<PersianHome />} />
        <Route path="/fa" element={<PersianHome />} />
        <Route path="/en" element={<EnglishHome />} />
        <Route path="/de" element={<GermanHome />} />


        {/* PROJECT PAGES */}

        <Route
          path="/project/project-one"
          element={<ProjectPage project={projects.projectOne} />}
        />

        <Route
          path="/project/project-two"
          element={<ProjectPage project={projects.projectTwo} />}
        />

        <Route
          path="/project/project-three"
          element={<ProjectPage project={projects.projectThree} />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;