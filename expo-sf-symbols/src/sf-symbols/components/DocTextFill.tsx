
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
<g clip-path="url(#clip0_2207_33041)">
<path d="M9.34375 16.9703C8.88672 16.9703 8.54687 16.6421 8.54687 16.2085C8.54687 15.775 8.88672 15.4351 9.34375 15.4351H18.5664C19.0117 15.4351 19.3515 15.775 19.3515 16.2085C19.3515 16.6421 19.0117 16.9703 18.5664 16.9703H9.34375ZM9.34375 21.4117C8.88672 21.4117 8.54687 21.0835 8.54687 20.65C8.54687 20.2164 8.88672 19.8765 9.34375 19.8765H18.5664C19.0117 19.8765 19.3515 20.2164 19.3515 20.65C19.3515 21.0835 19.0117 21.4117 18.5664 21.4117H9.34375ZM7.71484 26.1812H20.1601C22.5859 26.1812 23.7929 24.9507 23.7929 22.5132V11.8726H15.3086C13.8086 11.8726 13.0938 11.1578 13.0938 9.65771V1.05615H7.71484C5.30078 1.05615 4.08203 2.29834 4.08203 4.73584V22.5132C4.08203 24.9624 5.28906 26.1812 7.71484 26.1812ZM15.3437 10.2671H23.6523C23.582 9.78662 23.2422 9.31787 22.6797 8.74365L16.2226 2.16943C15.6718 1.60693 15.1914 1.26709 14.6992 1.18506V9.63427C14.6992 10.0562 14.9101 10.2671 15.3437 10.2671Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33041">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.08203 1.05615)"/>
</clipPath>
</defs>
</svg>

`;

export const DocTextFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
