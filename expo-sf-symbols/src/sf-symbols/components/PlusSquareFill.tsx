
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
<g clip-path="url(#clip0_2207_37193)">
<path d="M6.75098 24.7095H20.9658C23.4268 24.7095 24.6455 23.4907 24.6455 21.0766V6.76807C24.6455 4.35401 23.4268 3.13525 20.9658 3.13525H6.75098C4.30176 3.13525 3.07129 4.34229 3.07129 6.76807V21.0766C3.07129 23.5024 4.30176 24.7095 6.75098 24.7095Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.14551 13.9165C8.14551 13.3071 8.56738 12.8853 9.17676 12.8853H12.8447V9.21729C12.8447 8.60791 13.2549 8.17432 13.8525 8.17432C14.4619 8.17432 14.8838 8.60791 14.8838 9.21729V12.8853H18.5635C19.1611 12.8853 19.5947 13.3071 19.5947 13.9165C19.5947 14.5141 19.1611 14.9126 18.5635 14.9126H14.8838V18.5923C14.8838 19.2016 14.4619 19.6235 13.8525 19.6235C13.2549 19.6235 12.8447 19.1899 12.8447 18.5923V14.9126H9.17676C8.56738 14.9126 8.14551 14.5141 8.14551 13.9165Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37193">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.07129 3.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PlusSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
