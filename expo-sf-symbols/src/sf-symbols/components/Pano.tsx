
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36603)">
<path d="M1.9834 24.2012C4.15137 24.2012 7.45606 21.623 14.8623 21.623C22.2568 21.623 25.5849 24.1894 27.7412 24.1894C29.0302 24.1894 29.7099 23.4043 29.7099 22.1035V6.22461C29.7099 4.91211 29.0302 4.12695 27.7412 4.12695C25.5849 4.12695 22.2568 6.70508 14.8623 6.70508C7.47949 6.70508 4.15137 4.12695 1.9834 4.12695C0.694336 4.12695 0.0146484 4.91211 0.0146484 6.2129V22.1152C0.0146484 23.416 0.694336 24.2012 1.9834 24.2012ZM2.22949 22.2558C2.01856 22.2558 1.90137 22.1387 1.90137 21.916V6.41211C1.90137 6.18946 2.01856 6.07227 2.22949 6.07227C3.37793 6.07227 7.40918 8.48633 14.8623 8.48633C22.3154 8.48633 26.6045 6.06055 27.5068 6.06055C27.706 6.06055 27.8232 6.17774 27.8232 6.41211V21.916C27.8232 22.1387 27.706 22.2558 27.5068 22.2558C26.3584 22.2558 22.3154 19.8418 14.8623 19.8418C7.38574 19.8418 3.13184 22.2558 2.22949 22.2558Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36603">
<rect width="29.6953" height="20.0977" fill="currentColor" transform="translate(0.0146484 4.10352)"/>
</clipPath>
</defs>
</svg>

`;

export const Pano = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
