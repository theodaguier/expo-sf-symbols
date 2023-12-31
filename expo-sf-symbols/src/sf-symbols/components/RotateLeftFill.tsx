
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="30" viewBox="0 0 29 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35359)">
<path d="M24.7713 10.5368C25.1697 10.5368 25.5096 10.2087 25.5096 9.81023V8.05242C25.5096 4.70085 23.2713 2.43914 19.908 2.43914H19.6619V0.962575C19.6619 0.0953876 19.0057 -0.103831 18.3494 0.388357L15.3963 2.55632C14.9041 2.9196 14.8924 3.34148 15.3963 3.70476L18.3494 5.86101C19.0057 6.34148 19.6619 6.14226 19.6619 5.29851V3.79851H19.8963C22.4393 3.79851 24.0447 5.55632 24.0447 8.05242V9.81023C24.0447 10.2087 24.3729 10.5368 24.7713 10.5368Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M5.03687 25.7475H16.6501C18.654 25.7475 19.6618 24.7983 19.6618 22.7475V11.1577C19.6618 9.10693 18.654 8.146 16.6501 8.146H5.03687C3.03296 8.146 2.02515 9.10693 2.02515 11.1577V22.7475C2.02515 24.7983 3.03296 25.7475 5.03687 25.7475Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35359">
<rect width="23.4844" height="29.6722" fill="currentColor" transform="translate(2.02515 0.124512)"/>
</clipPath>
</defs>
</svg>

`;

export const RotateLeftFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
