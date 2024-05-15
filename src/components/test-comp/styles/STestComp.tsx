"use client";
import styled, { css } from "styled-components";

interface ITestCompStyle {
  passedData?: string;
}

export const STestComp = styled.div<ITestCompStyle>`
  color: #333;
  ${(props) => props.passedData && `color:${props.passedData}`}
`;
