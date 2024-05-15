import { FunctionComponent } from "react";
import { STestComp } from "./styles/STestComp";

interface ITestComp {
  title?: string;
}

export const TestComp: FunctionComponent<ITestComp> = ({ title }) => {
  return (
    <STestComp>
      <h3>Test Comp</h3>
      {title ? (
        <div>title provided is: &quot;{title}&quot;</div>
      ) : (
        <div>No title provided</div>
      )}
    </STestComp>
  );
};
