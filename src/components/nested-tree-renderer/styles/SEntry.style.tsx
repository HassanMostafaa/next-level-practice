import styled from "styled-components";

export const SEntry = styled.div``;

export const SEntryButton = styled.button`
  min-width: 100px;
  text-align: left;
`;

export const SEntryIndicator = styled.span``;

export const SChildren = styled.div<{ depth: number }>`
  padding-left: ${(props) => props.depth * 7}px;
  border-left: 3px solid teal;
  margin-block: 5px;
`;
