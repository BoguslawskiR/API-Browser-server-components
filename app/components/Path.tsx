'use client';
import React, { useState } from "react";
import { Path } from "../data/types/config";
import Method from "./Method";
import { ChevronDownIcon } from './ChevronDownIcon';

interface Props {
  path: string;
  data: Path;
  expandable?: boolean;
}

export default function Path({ path, data, expandable }: Props) {
  const [expanded, setExpanded] = useState(!expandable);
  return <div className="flex flex-col gap-2 w-full">
    <div className="flex">
      {expandable && <ChevronDownIcon
        className={expanded ? 'rotate-180' : ''}
        width={24}
        onClick={(e) => {
          e.preventDefault();
          setExpanded((e) => !e);
        }}
      />}
      <h4 className="text-2xl font-bold">{path}</h4>
    </div>
    {expanded && <div className="flex flex-col pl-4">
      {Object.entries(data).map(([method, methodData]) => <Method key={method} method={method} data={methodData} />)}
    </div>}
  </div>
};