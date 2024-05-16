"use client";
import { TreeNode } from "@/src/helper/nestedTreeHelper";
import { FunctionComponent, useState } from "react";
import {
  SEntry,
  SEntryButton,
  SEntryIndicator,
  SChildren,
} from "./styles/SEntry.style";

export const Entry: FunctionComponent<TreeNode & { depth: number }> = ({
  name,
  children,
  depth,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <SEntry>
      {name && (
        <SEntryButton
          disabled={!children}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {children ? (
            <SEntryIndicator>+</SEntryIndicator>
          ) : (
            <SEntryIndicator>&nbsp;&nbsp;</SEntryIndicator>
          )}
          {name}
        </SEntryButton>
      )}

      {isExpanded && children && (
        <SChildren depth={depth}>
          {children?.map((entry, ix) => (
            <Entry key={ix} {...entry} depth={depth + 1} />
          ))}
        </SChildren>
      )}
    </SEntry>
  );
};
