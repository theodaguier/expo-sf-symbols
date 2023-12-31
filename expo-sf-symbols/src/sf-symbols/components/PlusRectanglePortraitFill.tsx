
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
<g clip-path="url(#clip0_2207_37197)">
<path d="M4.06519 22.5688C4.06519 25.018 5.27222 26.2368 7.698 26.2368H20.1433C22.5691 26.2368 23.7761 25.018 23.7761 22.5688V4.79151C23.7761 2.35401 22.5691 1.11182 20.1433 1.11182H7.698C5.27222 1.11182 4.06519 2.35401 4.06519 4.79151V22.5688Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.2019 13.686C8.2019 13.0766 8.63549 12.6548 9.24487 12.6548H12.9128V8.98682C12.9128 8.37744 13.323 7.95557 13.9089 7.95557C14.53 7.95557 14.9402 8.37744 14.9402 8.98682V12.6548H18.6199C19.2293 12.6548 19.6511 13.0766 19.6511 13.686C19.6511 14.2837 19.2175 14.6938 18.6199 14.6938H14.9402V18.3735C14.9402 18.9712 14.53 19.4048 13.9089 19.4048C13.323 19.4048 12.9128 18.9712 12.9128 18.3735V14.6938H9.24487C8.63549 14.6938 8.2019 14.2837 8.2019 13.686Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37197">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.06519 1.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PlusRectanglePortraitFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
