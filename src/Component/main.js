import React from "react";
import Listing from "./listing";
import Filter from "./filter";
import styled from "@emotion/styled";

const Main = (props) => {
  const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: " filter lister ";
    background-color: #f2f2f2;
  `;
  return (
    <Section>
      <Filter change={props.change} globalState={props.globalState} />
      <Listing data={props.data} />
    </Section>
  );
};

export default Main;
