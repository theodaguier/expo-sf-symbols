
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
<g clip-path="url(#clip0_2207_34487)">
<path d="M14.8698 26.2368L26.2955 14.7876C27.1744 13.9087 27.233 13.4048 27.233 12.1743V7.72119C27.233 6.479 26.9401 6.09228 26.0494 5.20166L23.3541 2.50635C22.4752 1.62744 22.0885 1.32275 20.8463 1.32275H16.3815C15.151 1.32275 14.6588 1.38135 13.7799 2.26025L2.31898 13.6977C0.643204 15.3735 0.608047 17.1079 2.3307 18.8188L9.74868 26.2251C11.4713 27.936 13.194 27.9126 14.8698 26.2368ZM18.8776 10.6977C17.9518 10.6977 17.2721 9.98291 17.2721 9.09228C17.2721 8.18994 17.9518 7.48682 18.8776 7.48682C19.7916 7.48682 20.483 8.18994 20.483 9.09228C20.483 9.98291 19.7916 10.6977 18.8776 10.6977Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M22.7096 26.1899C23.6002 27.0688 25.0416 27.0688 25.9205 26.1665C26.7994 25.2876 26.7994 23.8579 25.9205 22.9673L5.57678 2.62354C4.68616 1.74464 3.24475 1.73292 2.34241 2.62354C1.47522 3.50245 1.47522 4.96729 2.34241 5.83448L22.7096 26.1899Z" fill="currentColor"/>
<path d="M23.6705 25.2173C24.0338 25.5688 24.608 25.5688 24.9479 25.2173C25.2994 24.8657 25.3112 24.2915 24.9479 23.9399L4.60413 3.59621C4.25256 3.24465 3.67834 3.23293 3.31506 3.59621C2.97522 3.93605 2.97522 4.52199 3.31506 4.87355L23.6705 25.2173Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34487">
<rect width="26.1826" height="27.3604" fill="currentColor" transform="translate(1.05042 0.140625)"/>
</clipPath>
</defs>
</svg>

`;

export const TagSlashFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
