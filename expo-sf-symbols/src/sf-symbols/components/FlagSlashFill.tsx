
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="31" viewBox="0 0 29 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34429)">
<path d="M4.92749 26.6977C5.41968 26.6977 5.81812 26.311 5.81812 25.8188V19.3032C6.11109 19.1743 7.21265 18.7524 8.93531 18.7524C13.2713 18.7524 15.99 20.8735 20.115 20.8735C21.9431 20.8735 22.6228 20.6743 23.5134 20.2759C24.322 19.9126 24.8494 19.3032 24.8494 18.2251V6.33057C24.8494 5.69776 24.3103 5.33448 23.6306 5.33448C23.0564 5.33448 21.9783 5.82667 19.9627 5.82667C15.8377 5.82667 13.1306 3.70557 8.78296 3.70557C6.95484 3.70557 6.26343 3.90479 5.37281 4.30323C4.56421 4.66651 4.03687 5.27588 4.03687 6.34229V25.8188C4.03687 26.2993 4.44703 26.6977 4.92749 26.6977Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M23.1033 24.2954C23.9939 25.186 25.447 25.186 26.3259 24.2719C27.1931 23.3813 27.1931 21.9634 26.3142 21.0844L5.94703 0.729005C5.06812 -0.149903 3.61499 -0.149903 2.72437 0.729005C1.84546 1.60791 1.84546 3.07275 2.72437 3.95166L23.1033 24.2954Z" fill="currentColor"/>
<path d="M24.0642 23.3344C24.4275 23.686 25.0017 23.686 25.3416 23.3344C25.6931 22.9712 25.7048 22.4087 25.3416 22.0571L4.98609 1.70167C4.63453 1.3501 4.04859 1.3501 3.69703 1.70167C3.35718 2.04151 3.35718 2.63917 3.69703 2.97901L24.0642 23.3344Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34429">
<rect width="24.9097" height="30.252" fill="currentColor" transform="translate(2.06519 0.0698242)"/>
</clipPath>
</defs>
</svg>

`;

export const FlagSlashFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
