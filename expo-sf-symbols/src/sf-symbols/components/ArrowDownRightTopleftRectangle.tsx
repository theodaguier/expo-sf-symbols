
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
<g clip-path="url(#clip0_2207_34221)">
<path d="M3.70484 24.5896H23.9782C26.4392 24.5896 27.6579 23.3826 27.6579 20.9685V6.64819C27.6579 4.23413 26.4392 3.01538 23.9782 3.01538H3.70484C1.25562 3.01538 0.0251465 4.23413 0.0251465 6.64819V20.9685C0.0251465 23.3826 1.25562 24.5896 3.70484 24.5896ZM3.72827 22.7029C2.5564 22.7029 1.91187 22.0818 1.91187 20.8631V6.75366C1.91187 5.53491 2.5564 4.9021 3.72827 4.9021H23.9548C25.1149 4.9021 25.7712 5.53491 25.7712 6.75366V20.8631C25.7712 22.0818 25.1149 22.7029 23.9548 22.7029H3.72827Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.1345 7.70288C10.6189 7.70288 10.279 8.05444 10.279 8.61694V10.4802L10.4548 12.3083L8.76733 10.5037L5.22826 6.9646C5.0642 6.80054 4.85326 6.69507 4.57202 6.69507C4.04467 6.69507 3.70483 7.04663 3.70483 7.57397C3.70483 7.80835 3.82202 8.031 3.98608 8.19507L7.52514 11.7341L9.35326 13.4451L7.61889 13.2576H5.65014C5.08764 13.2576 4.72436 13.5974 4.72436 14.1131C4.72436 14.6287 5.07592 14.9685 5.6267 14.9685H11.0173C11.6149 14.9685 12.0017 14.699 12.0017 13.9959V8.64038C12.0017 8.0896 11.6501 7.70288 11.1345 7.70288Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34221">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0251465 3.01538)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowDownRightTopleftRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
