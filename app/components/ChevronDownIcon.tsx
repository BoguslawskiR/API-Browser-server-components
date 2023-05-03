import { SVGAttributes } from "react";

export function ChevronDownIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
    </svg>
  );
}
