import "../styles.css";
import { H1, H2, H3, P, Button, Header, Text, Section } from "../components";
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
          </Header>
          <Section>
            <Text>Unit Converter</Text>
          </Section>
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

const styles = {
  pageWrap: {
    paddingHorizontal: 10
  },
  descText: {
    fontSize: 14,
    color: "#666666",
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold"
  },
  wrapBox: {
    backgroundColor: "#999999",
    height: 100
  },
  leftBox: {
    backgroundColor: "#FF6600",
    height: 40,
    width: 100
  },
  rightBox: {
    backgroundColor: "#ED0000",
    height: 40,
    width: 100
  }
};
