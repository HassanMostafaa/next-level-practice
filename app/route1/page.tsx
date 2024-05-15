"use client";
import { FunctionComponent } from "react";
import { TestComp } from "@/src/components/test-comp/TestComp";
import { useThemeStore } from "@/src/store/globalTheme.store";

const Page: FunctionComponent = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <div>
      <h1>route 1 div {theme}</h1>
      <button onClick={toggleTheme}>toggle theme</button>
      <TestComp title="title 1" />
    </div>
  );
};

export default Page;
