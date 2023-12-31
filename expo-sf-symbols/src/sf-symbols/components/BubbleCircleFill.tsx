
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
<g clip-path="url(#clip0_2207_34597)">
<path d="M14.0307 25.9502C20.5698 25.9502 25.9838 20.5361 25.9838 13.997C25.9838 7.46973 20.5581 2.04395 14.019 2.04395C7.4917 2.04395 2.07764 7.46973 2.07764 13.997C2.07764 20.5361 7.50342 25.9502 14.0307 25.9502Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.0073 20.958C10.6792 20.958 10.48 20.7119 10.48 20.3486V18.626H10.187C8.44092 18.626 7.46826 17.6416 7.46826 15.8955V11.3369C7.46826 9.61425 8.44092 8.62988 10.187 8.62988H17.8745C19.6206 8.62988 20.5932 9.61425 20.5932 11.3369V15.8955C20.5932 17.6416 19.6206 18.626 17.8745 18.626H13.8432L11.687 20.583C11.4058 20.8525 11.2417 20.958 11.0073 20.958Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34597">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07764 2.03223)"/>
</clipPath>
</defs>
</svg>

`;

export const BubbleCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
