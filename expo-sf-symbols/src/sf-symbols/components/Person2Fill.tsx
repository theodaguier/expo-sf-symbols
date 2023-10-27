
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="34" height="29" viewBox="0 0 34 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33250)">
<path d="M8.68554 14.1753C10.8652 14.1753 12.7637 12.2066 12.7637 9.66357C12.7637 7.13232 10.8535 5.28076 8.68554 5.28076C6.50586 5.28076 4.5957 7.1792 4.5957 9.68701C4.5957 12.2066 6.49414 14.1753 8.68554 14.1753ZM2.14648 24.7573H15.2012C16.6895 24.7573 17.2637 24.1714 17.2637 23.105C17.2637 19.8706 13.959 15.9683 8.67382 15.9683C3.38867 15.9683 0.0839844 19.8706 0.0839844 23.105C0.0839844 24.1714 0.669922 24.7573 2.14648 24.7573Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.8028 26.3511H29.5332C32.6152 26.3511 33.6231 24.8628 33.6231 23.1988C33.6231 19.2612 29.1113 14.4097 22.1621 14.4097C15.2246 14.4097 10.7129 19.2612 10.7129 23.1988C10.7129 24.8628 11.7207 26.3511 14.8028 26.3511Z" fill="currentColor"/>
<path d="M22.1737 13.9058C24.6933 13.9058 26.8612 11.6558 26.8612 8.72607C26.8612 5.83154 24.6816 3.68701 22.1737 3.68701C19.6659 3.68701 17.4862 5.87842 17.4862 8.74951C17.4862 11.6558 19.6542 13.9058 22.1737 13.9058ZM14.8027 24.7573H29.5331C31.373 24.7573 32.0292 24.23 32.0292 23.1988C32.0292 20.1753 28.2441 16.0034 22.162 16.0034C16.0917 16.0034 12.3066 20.1753 12.3066 23.1988C12.3066 24.23 12.9628 24.7573 14.8027 24.7573Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33250">
<rect width="33.5391" height="24.2461" fill="currentColor" transform="translate(0.0839844 2.10498)"/>
</clipPath>
</defs>
</svg>

`;

export const Person2Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
