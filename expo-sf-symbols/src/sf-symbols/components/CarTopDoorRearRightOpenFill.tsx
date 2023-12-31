
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
<g clip-path="url(#clip0_2207_36110)">
<path d="M11.4543 30.2971C17.3723 30.2971 19.8918 28.9963 19.8918 25.8088V5.46509C19.8918 2.04322 16.7863 0.0393066 11.4543 0.0393066C6.13404 0.0393066 3.01685 2.04322 3.01685 5.46509V25.8088C3.01685 28.9963 5.5481 30.2971 11.4543 30.2971ZM11.4661 12.5198C10.3176 12.5198 8.55982 12.6018 7.93873 12.6018C7.03638 12.6018 6.63794 12.2502 6.54419 11.3127L6.35669 9.03931C6.19263 7.29322 7.4231 6.59009 11.4661 6.59009C15.4973 6.59009 16.7277 7.29322 16.5637 9.03931L16.3762 11.3127C16.2824 12.2502 15.8957 12.6018 14.9816 12.6018C14.3723 12.6018 12.5442 12.5198 11.4661 12.5198ZM11.4661 25.4221C7.38794 25.4221 6.14576 24.8127 6.40357 23.0315L6.55591 21.9299C6.75513 20.4885 7.96216 19.9963 11.4661 19.9963C14.9582 19.9963 16.1652 20.4885 16.3645 21.9299L16.5168 23.0315C16.7746 24.8127 15.5324 25.4221 11.4661 25.4221ZM19.0129 17.0666V19.8205L23.3606 24.1565C23.7473 24.5432 24.3566 24.5315 24.7434 24.1565C25.1184 23.7698 25.1184 23.137 24.7434 22.762L19.0129 17.0666Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36110">
<rect width="22.0078" height="30.2695" fill="currentColor" transform="translate(3.01685 0.0393066)"/>
</clipPath>
</defs>
</svg>

`;

export const CarTopDoorRearRightOpenFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
