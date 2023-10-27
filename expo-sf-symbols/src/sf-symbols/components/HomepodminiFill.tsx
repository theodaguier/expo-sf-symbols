
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
<g clip-path="url(#clip0_2207_35650)">
<path d="M13.5934 24.3027C17.8473 24.3027 19.6402 23.7636 21.3395 22.1816C23.7301 20.0019 25.1246 16.8495 25.1246 13.498C25.1246 10.791 24.2223 8.21283 22.359 6.09174C21.9254 5.55268 21.4801 5.5058 21.0113 5.84564C19.277 7.15814 17.2731 7.8144 13.5934 7.8144C9.90198 7.8144 7.89808 7.15814 6.17542 5.84564C5.70667 5.5058 5.24963 5.55268 4.81604 6.09174C2.96448 8.21283 2.05042 10.791 2.05042 13.498C2.05042 16.8495 3.44495 20.0019 5.83558 22.1816C7.53479 23.7636 9.32776 24.3027 13.5934 24.3027Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.5934 6.2207C16.8512 6.2207 19.1246 5.56446 19.1246 4.7207C19.1246 3.86523 16.8512 3.23242 13.5934 3.23242C10.3239 3.23242 8.05042 3.86523 8.05042 4.7207C8.05042 5.56446 10.3239 6.2207 13.5934 6.2207Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35650">
<rect width="23.0742" height="21.2227" fill="currentColor" transform="translate(2.05042 3.08008)"/>
</clipPath>
</defs>
</svg>

`;

export const HomepodminiFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
