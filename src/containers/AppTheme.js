import "../styles.css";
import { H1, H2, H3, P, Button, Header } from "../components";
import { LightContext, ThemeProvider } from "../contexts";
import { StyledTheme } from "../styles";
import { useState } from "react";

export default function App() {
  const [lightIsOn, switchLight] = useState(true);
  const toggleLight = () => switchLight(!lightIsOn);
  return (
    <LightContext.Provider value={lightIsOn}>
      <ThemeProvider>
        <StyledTheme />
        <div className="app">
          <Header>
            <Button className="primary" onClick={toggleLight}>
              Switch Theme
            </Button>
            <p>
              Light is: <em>{lightIsOn ? `on` : `off`}</em>
            </p>
          </Header>
          <H1>H1 Roboto Bold</H1>
          <H2>H2 Roboto Bold</H2>
          <H3>H3 Roboto Bold</H3>
          <P>Paragraph Roboto Regular</P>
          <Button className="primary">Primary</Button>
          <Button className="secondary">Secondary</Button>
          <Button className="warn">Warning</Button>
          <Button className="disabled">Disabled</Button>
        </div>
      </ThemeProvider>
    </LightContext.Provider>
  );
}
