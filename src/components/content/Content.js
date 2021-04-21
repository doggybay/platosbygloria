import React from "react";
import Container from "@material-ui/core/Container";
import { contentStyles } from "../../styles/content/styles";
import BizName from "./BizName";
import BizDescription from "./BizDescription";
import ContactInfo from "./ContactInfo";
import Plates from "../plates/Plates";


const Content = () => {
  const classes = contentStyles();
  return (
    <main>
      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <BizName />
          <BizDescription />
          <div className={classes.heroButtons}>
            <ContactInfo />
          </div>
        </Container>
      </div>
      {/* End hero unit */}
      <Plates />
    </main>
  );
}

export default Content;