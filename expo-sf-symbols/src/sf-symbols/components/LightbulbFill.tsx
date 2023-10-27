
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
<g clip-path="url(#clip0_2207_34934)">
<path d="M10.1472 23.9609H17.5652C17.9519 23.9609 18.2449 23.6562 18.2449 23.2695C18.2449 22.8945 17.9519 22.5898 17.5652 22.5898H10.1472C9.7605 22.5898 9.45581 22.8945 9.45581 23.2695C9.45581 23.6562 9.7605 23.9609 10.1472 23.9609ZM13.8503 27.3593C15.6668 27.3593 17.1785 26.4687 17.2957 25.121H10.4168C10.4988 26.4687 12.0222 27.3593 13.8503 27.3593Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.0105 7.30859C6.0105 11.8086 8.97534 12.9218 9.45581 20.7382C9.47925 21.1601 9.73706 21.4296 10.1824 21.4296H17.5183C17.9753 21.4296 18.2214 21.1601 18.2566 20.7382C18.7371 12.9218 21.6902 11.8086 21.6902 7.30859C21.6902 3.26562 18.2332 0.0898438 13.8503 0.0898438C9.46753 0.0898438 6.0105 3.26562 6.0105 7.30859Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34934">
<rect width="15.6797" height="27.9961" fill="currentColor" transform="translate(6.0105 0.0898438)"/>
</clipPath>
</defs>
</svg>

`;

export const LightbulbFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
