
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
<g clip-path="url(#clip0_2207_37260)">
<path d="M4.07764 22.6093C4.07764 25.0585 5.28467 26.2773 7.71045 26.2773H20.1557C22.5815 26.2773 23.7885 25.0585 23.7885 22.6093V4.83203C23.7885 2.39453 22.5815 1.15234 20.1557 1.15234H7.71045C5.28467 1.15234 4.07764 2.39453 4.07764 4.83203V22.6093Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.99561 18.6484C9.46826 18.6484 9.03467 18.2148 9.03467 17.664C9.03467 17.4062 9.14014 17.1718 9.31592 16.9843L12.5737 13.7382L9.31592 10.4805C9.14014 10.293 9.03467 10.0586 9.03467 9.80079C9.03467 9.26173 9.46826 8.83985 9.99561 8.83985C10.2769 8.83985 10.4878 8.94532 10.6753 9.1211L13.9448 12.3789L17.2378 9.10938C17.437 8.91016 17.6479 8.81641 17.9057 8.81641C18.4331 8.81641 18.8667 9.25001 18.8667 9.77735C18.8667 10.0469 18.7964 10.2578 18.5854 10.4688L15.3159 13.7382L18.5737 16.9726C18.7729 17.1601 18.8549 17.3945 18.8549 17.664C18.8549 18.2148 18.4214 18.6484 17.8823 18.6484C17.6128 18.6484 17.3667 18.5429 17.1909 18.3671L13.9448 15.0976L10.7104 18.3671C10.5229 18.5429 10.2769 18.6484 9.99561 18.6484Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37260">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.07764 1.15234)"/>
</clipPath>
</defs>
</svg>

`;

export const XmarkRectanglePortraitFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
