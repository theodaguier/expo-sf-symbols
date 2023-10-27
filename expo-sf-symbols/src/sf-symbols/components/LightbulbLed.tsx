
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
<g clip-path="url(#clip0_2207_34947)">
<path d="M7.91114 11.3398H19.8174V9.80468H7.91114V11.3398ZM6.0127 7.30859C6.0127 11.8086 8.70801 12.9218 9.45801 20.7382C9.50489 21.1601 9.73925 21.4296 10.1846 21.4296H17.5205C17.9775 21.4296 18.2119 21.1601 18.2588 20.7382C19.0088 12.9218 21.6924 11.8086 21.6924 7.30859C21.6924 3.26562 18.2354 0.0898438 13.8525 0.0898438C9.46973 0.0898438 6.0127 3.26562 6.0127 7.30859ZM7.78223 7.30859C7.78223 4.14453 10.5596 1.85937 13.8525 1.85937C17.1455 1.85937 19.9229 4.14453 19.9229 7.30859C19.9229 10.6718 17.6963 11.4687 16.6416 19.6601H11.0752C10.0088 11.4687 7.78223 10.6718 7.78223 7.30859ZM10.1494 23.9609H17.5674C17.9541 23.9609 18.2471 23.6562 18.2471 23.2695C18.2471 22.8945 17.9541 22.5898 17.5674 22.5898H10.1494C9.7627 22.5898 9.45801 22.8945 9.45801 23.2695C9.45801 23.6562 9.7627 23.9609 10.1494 23.9609ZM13.8525 27.3593C15.6689 27.3593 17.1807 26.4687 17.2979 25.121H10.4189C10.501 26.4687 12.0244 27.3593 13.8525 27.3593Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34947">
<rect width="15.6797" height="27.9961" fill="currentColor" transform="translate(6.0127 0.0898438)"/>
</clipPath>
</defs>
</svg>

`;

export const LightbulbLed = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
