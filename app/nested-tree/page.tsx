import { TreeRenderer } from "@/src/components/nested-tree-renderer/TreeRenderer";
import { FunctionComponent } from "react";

const NextPage: FunctionComponent = () => {
  return (
    <div>
      <h2>Here will live a nested tree</h2>
      <TreeRenderer />
    </div>
  );
};

export default NextPage;
