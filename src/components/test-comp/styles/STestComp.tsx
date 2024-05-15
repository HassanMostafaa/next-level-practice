"use client";
import styled, { css } from "styled-components";

interface ITestCompStyle {
  passedData?: string;
}

export const STestComp = styled.div<ITestCompStyle>`
  color: #f4f4f4;
  ${(props) => props.passedData && `color:white`}
`;
