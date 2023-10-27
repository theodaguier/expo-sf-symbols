
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34066)">
<path d="M4.26562 13.0015V14.8882H23.3438V13.0015H4.26562ZM3 6.82569V21.0523C3 23.5015 4.21875 24.732 6.63281 24.732H20.9414C23.3555 24.732 24.5742 23.5015 24.5742 21.0523V6.82569C24.5742 4.38819 23.3672 3.15771 20.9414 3.15771H6.63281C4.20703 3.15771 3 4.38819 3 6.82569ZM4.88672 6.86084C4.88672 5.68897 5.50781 5.04444 6.72656 5.04444H20.8477C22.0664 5.04444 22.6875 5.68897 22.6875 6.86084V21.0171C22.6875 22.1773 22.0664 22.8452 20.8477 22.8452H6.72656C5.50781 22.8452 4.88672 22.1773 4.88672 21.0171V6.86084Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34066">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3 3.13428)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareSplit1x2 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
