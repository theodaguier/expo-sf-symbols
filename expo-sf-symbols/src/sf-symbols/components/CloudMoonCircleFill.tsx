
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
<g clip-path="url(#clip0_2207_33749)">
<path d="M14.0393 25.9671C20.5784 25.9671 25.9924 20.553 25.9924 14.0139C25.9924 7.48657 20.5667 2.06079 14.0276 2.06079C7.50024 2.06079 2.08618 7.48657 2.08618 14.0139C2.08618 20.553 7.51196 25.9671 14.0393 25.9671Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.57837 18.971C7.07837 18.971 6.05884 17.9983 6.05884 16.6507C6.05884 15.5843 6.7268 14.7288 7.69946 14.4124C7.9104 12.4905 9.5393 10.9788 11.4846 10.9788C12.9495 10.9788 14.1682 11.7756 14.8479 13.053C16.6292 13.0882 17.9534 14.3538 17.9534 15.9944C17.9534 17.6819 16.6292 18.971 14.9182 18.971H8.57837ZM22.0901 12.7718C22.0901 13.8264 20.8479 15.4553 18.7854 15.6663C18.6331 13.8499 17.2268 12.4788 15.3518 12.2327C15.2346 12.0569 15.1174 11.9045 14.9768 11.7522C15.176 9.98266 16.6878 8.57641 17.8831 8.51782C18.1057 8.51782 18.2581 8.63501 18.2581 8.81079C18.2581 9.12719 17.8245 9.72485 17.8245 10.51C17.8245 11.8694 18.762 12.7483 20.2503 12.7483C21.0706 12.7483 21.5159 12.3733 21.8089 12.3733C21.9964 12.3733 22.0901 12.5491 22.0901 12.7718Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33749">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.08618 2.04907)"/>
</clipPath>
</defs>
</svg>

`;

export const CloudMoonCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
