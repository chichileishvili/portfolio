import { Routes, Route } from "react-router-dom";
import { Fragment, useContext } from "react";
import Navigation from "./routes/Navigation/Navigation.component";
import Home from "./routes/Home/Home.component";
import Projects from "./routes/Projects/Projects.component";
import About from "./routes/About/About.component";
import TechSkils from "./routes/TechSkills/TechSkils";
import { useMediaQuery } from "react-responsive";
import { FiAlignLeft } from "react-icons/fi";
import { SwitchContext } from "./contexts/switch.context";
import { GlobalStyle } from "./global.styles";
import { useState } from "react";

const App = () => {
  const { isThemeDark } = useContext(SwitchContext);
  const [isNavbarClicked, setIsNavbarClicked] = useState(false);
  console.log(isNavbarClicked);
  const isMobile = useMediaQuery({ query: "(max-width: 667px)" });
  const handleNavbarClick = () => {
    setIsNavbarClicked(!isNavbarClicked);
  };
  return (
    <Fragment>
      <GlobalStyle isThemeDark={isThemeDark} />
      
        
       <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="tech-skills" element={<TechSkils />} />
        </Route>
      </Routes>
      
    </Fragment>
  );
};

export default App;
