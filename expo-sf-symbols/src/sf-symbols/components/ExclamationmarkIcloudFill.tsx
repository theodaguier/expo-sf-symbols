
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
<g clip-path="url(#clip0_2207_34524)">
<path d="M23.2529 23.4287C26.792 23.4287 29.5576 20.8388 29.5576 17.6162C29.5576 15.1553 28.1397 13.0225 25.8545 12.0615C25.8779 6.83496 22.1162 3.06152 17.3233 3.06152C14.1475 3.06152 11.8858 4.76074 10.4795 6.81152C7.59668 5.96777 4.45606 8.15918 4.39746 11.4404C1.74902 11.8623 0.0966797 14.2295 0.0966797 17.0888C0.0966797 20.5342 3.1084 23.4287 7.11621 23.4287H23.2529Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.8388 15.4482C14.2294 15.4482 13.913 15.0967 13.8896 14.4756L13.7255 10.0459C13.7021 9.37793 14.1708 8.9209 14.8271 8.9209C15.4716 8.9209 15.9638 9.38964 15.9404 10.0576L15.7763 14.4756C15.7528 15.1084 15.4247 15.4482 14.8388 15.4482ZM14.8271 19.3154C14.1239 19.3154 13.5146 18.7412 13.5146 18.0498C13.5146 17.3584 14.1122 16.7842 14.8271 16.7842C15.5419 16.7842 16.1396 17.3467 16.1396 18.0498C16.1396 18.7529 15.5302 19.3154 14.8271 19.3154Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34524">
<rect width="29.4609" height="22.2773" fill="currentColor" transform="translate(0.0966797 3.06152)"/>
</clipPath>
</defs>
</svg>

`;

export const ExclamationmarkIcloudFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
