"use client";
import { FunctionComponent } from "react";
import { STestComp } from "./styles/STestComp";
import { counterStore } from "@/src/store/testCompCounter.store";

interface ITestComp {
  title?: string;
}

export const TestComp: FunctionComponent<ITestComp> = ({ title }) => {
  const { count, inc, dec } = counterStore();
  return (
    <STestComp>
      <div>{count}</div>
      <button onClick={inc}>inc</button>
      <br />
      <button onClick={dec}>dec</button>
      <h3>Test Comp</h3>
      {title ? (
        <div>title provided is: &quot;{title}&quot;</div>
      ) : (
        <div>No title provided</div>
      )}
    </STestComp>
  );
};
