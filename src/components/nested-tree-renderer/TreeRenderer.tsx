import { FunctionComponent } from "react";
import { tree } from "@/src/helper/nestedTreeHelper";
import { Entry } from "./Entry";

export const TreeRenderer: FunctionComponent = () => {
  return (
    <div>
      {tree.map((entry, ix) => (
        <Entry key={ix} {...entry} depth={1} />
      ))}
    </div>
  );
};
