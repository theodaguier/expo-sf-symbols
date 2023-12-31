
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="29" viewBox="0 0 29 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37791)">
<path d="M6.75537 24.7056H20.9702C23.4312 24.7056 24.6499 23.4868 24.6499 21.0727V6.76416C24.6499 4.3501 23.4312 3.13135 20.9702 3.13135H6.75537C4.30615 3.13135 3.07568 4.33838 3.07568 6.76416V21.0727C3.07568 23.4985 4.30615 24.7056 6.75537 24.7056Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.43896 11.9907C9.43896 11.6392 9.68507 11.4048 10.0249 11.4048H10.7632V9.20166C10.7632 8.72119 11.0679 8.40479 11.5483 8.40479H14.4663C16.4585 8.40479 17.8765 9.58838 18.1577 11.4048H18.7437C19.0952 11.4048 19.3296 11.6392 19.3296 11.9907C19.3296 12.3306 19.0952 12.6001 18.7437 12.6001H18.1812C17.9585 14.4868 16.4937 15.7641 14.4663 15.7641H12.3569V19.1626C12.3569 19.6313 12.0288 19.9595 11.5718 19.9595C11.1147 19.9595 10.7632 19.6313 10.7632 19.1626V12.6001H10.0249C9.68507 12.6001 9.43896 12.3306 9.43896 11.9907ZM12.3687 14.3227H14.2085C15.5327 14.3227 16.3765 13.6899 16.564 12.6001H12.3687V14.3227ZM12.3687 11.4048H16.5288C16.3062 10.397 15.4741 9.83447 14.2085 9.83447H12.3687V11.4048Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37791">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.07568 3.10791)"/>
</clipPath>
</defs>
</svg>

`;

export const PesetasignSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
