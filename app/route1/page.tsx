import { FunctionComponent } from "react";
import { TestComp } from "@/src/components/test-comp/TestComp";

const Page: FunctionComponent = () => {
  return (
    <div>
      <h1>route 1 div</h1>
      <TestComp title="title 1" />
    </div>
  );
};

export default Page;
