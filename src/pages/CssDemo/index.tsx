import React from "react";
import headingStyle from "./heading.css";
import contentStyle from "./content.css";

const App = () => {
  <>
    <Heading />
    <Content />
  </>
};

const Heading = () => <h1 className={headingStyle.heading}>My React and Typescript App</h1>;
const Content = () => <div className={contentStyle.content}>With CSS!</div>

export default App;
