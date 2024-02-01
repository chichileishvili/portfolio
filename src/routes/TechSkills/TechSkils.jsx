import Aos from "aos";
import { useEffect, useContext } from "react";
import "aos/dist/aos.css";
import { TeckIteam, TeckItemSection, StyledSVG } from "./TechSkill.styles";
import { ReactComponent as ExpresSVG } from "../../assets/express.svg";
import { ReactComponent as CssSVG } from "../../assets/css3.svg";
import { ReactComponent as JavaScriptSVG } from "../../assets/JavaScript.svg";
import { ReactComponent as NodeSVG } from "../../assets/nodejs.svg";
import { ReactComponent as ReactSVG } from "../../assets/react-2.svg";
import { ReactComponent as MongoDBSVG } from "../../assets/mongodb.svg";
import { ReactComponent as TypeScriptSVG } from "../../assets/typescript.svg";
import { ReactComponent as ReduxSVG } from "../../assets/redux.svg";
import { SwitchContext } from "../../contexts/switch.context";

const TechSkils = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const { isThemeDark } = useContext(SwitchContext);

  return (
    <TeckItemSection>
      <TeckIteam isThemeDark={isThemeDark} data-aos="flip-left">
        <StyledSVG as={ExpresSVG} />
      </TeckIteam>
      <TeckIteam isThemeDark={isThemeDark} data-aos="flip-right">
        <StyledSVG as={CssSVG} />
      </TeckIteam>
      <TeckIteam isThemeDark={isThemeDark} data-aos="flip-left">
        <StyledSVG as={JavaScriptSVG} />
      </TeckIteam>
      <TeckIteam isThemeDark={isThemeDark} data-aos="flip-right">
        <StyledSVG as={NodeSVG} />
      </TeckIteam>
      <TeckIteam isThemeDark={isThemeDark} data-aos="flip-left">
        <StyledSVG as={ReactSVG} />
      </TeckIteam>
      <TeckIteam isThemeDark={isThemeDark} data-aos="flip-right">
        <StyledSVG as={MongoDBSVG} />
      </TeckIteam>
      <TeckIteam isThemeDark={isThemeDark} data-aos="flip-left">
        <StyledSVG as={TypeScriptSVG} />
      </TeckIteam>
      <TeckIteam isThemeDark={isThemeDark} data-aos="flip-right">
        <StyledSVG as={ReduxSVG} />
      </TeckIteam>
    </TeckItemSection>
  );
};

export default TechSkils;
