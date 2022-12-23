import React from "react";
import styled from "styled-components";
import FastActiveFilterBar from "../components/fastActiveFilterBar";
import FastActiveTable from "../components/fastActiveTable";

const FastActiveContainer = () => {
  return (
    <FastActiveContainerStyled>
      <FastActiveFilterBar />
      <FastActiveTable />
    </FastActiveContainerStyled>
  );
};

const FastActiveContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export default FastActiveContainer;
