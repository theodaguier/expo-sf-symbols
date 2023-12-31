
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
<g clip-path="url(#clip0_2207_34375)">
<path d="M15.151 25.6172C15.3971 25.6172 15.7486 25.4531 16.0065 25.3008C22.6158 21.082 26.7994 16.1719 26.7994 11.1797C26.7994 7.03124 23.9518 4.10156 20.2604 4.10156C17.9752 4.10156 16.2174 5.36718 15.151 7.30078C14.108 5.3789 12.3385 4.10156 10.0416 4.10156C6.36193 4.10156 3.51428 7.03124 3.51428 11.1797C3.51428 16.1719 7.69787 21.082 14.3072 25.3008C14.5533 25.4531 14.9166 25.6172 15.151 25.6172Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M22.8619 26.0859C23.7525 26.9765 25.2057 26.9765 26.0846 26.0625C26.9518 25.1719 26.9518 23.7539 26.0729 22.875L4.93226 1.74609C4.04163 0.855469 2.58851 0.855469 1.7096 1.74609C0.830688 2.61328 0.830688 4.07812 1.7096 4.95703L22.8619 26.0859Z" fill="currentColor"/>
<path d="M23.8229 25.1133C24.1744 25.4765 24.7604 25.4765 25.1002 25.1133C25.4518 24.7617 25.4518 24.1992 25.1002 23.8359L3.9596 2.70704C3.60804 2.35547 3.03382 2.35547 2.67054 2.70704C2.33069 3.04688 2.33069 3.64454 2.67054 3.98438L23.8229 25.1133Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34375">
<rect width="25.749" height="26.8477" fill="currentColor" transform="translate(1.05042 1.07812)"/>
</clipPath>
</defs>
</svg>

`;

export const HeartSlashFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
