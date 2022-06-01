import { InlineStyle } from "./components/inlineStyle";
import "./styles.css";
import { StyledComponents } from "./components/styledComponents";
import { CssModules } from "./components/CssModules.jsx";
import { StyledJsx } from "./components/StyledJsx";
import { Emotion } from "./components/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
