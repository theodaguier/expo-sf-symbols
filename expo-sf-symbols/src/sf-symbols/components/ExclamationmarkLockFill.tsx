
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35299)">
<path d="M8.63672 25.0552H19.3594C21.082 25.0552 21.9961 24.1177 21.9961 22.2661V14.1919C21.9961 12.3403 21.082 11.4145 19.3594 11.4145H8.63672C6.91406 11.4145 6 12.3403 6 14.1919V22.2661C6 24.1177 6.91406 25.0552 8.63672 25.0552ZM8.05078 12.3169H9.91406V8.35596C9.91406 5.40283 11.8008 3.83252 13.9922 3.83252C16.1836 3.83252 18.0938 5.40283 18.0938 8.35596V12.3169H19.9453V8.61377C19.9453 4.20752 17.0625 2.06299 13.9922 2.06299C10.9336 2.06299 8.05078 4.20752 8.05078 8.61377V12.3169Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.9922 19.4888C13.5469 19.4888 13.2891 19.2192 13.2773 18.7622L13.1602 14.7896C13.1484 14.3325 13.5 13.9927 13.9922 13.9927C14.4727 13.9927 14.8359 14.3442 14.8242 14.8013L14.707 18.7622C14.6953 19.2192 14.4375 19.4888 13.9922 19.4888ZM13.9805 22.2544C13.4648 22.2544 13.0078 21.8208 13.0078 21.2935C13.0078 20.7544 13.4531 20.3208 13.9805 20.3208C14.5313 20.3208 14.9883 20.7427 14.9883 21.2935C14.9883 21.8208 14.5313 22.2544 13.9805 22.2544Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35299">
<rect width="15.9961" height="23.6133" fill="currentColor" transform="translate(6 2.06299)"/>
</clipPath>
</defs>
</svg>

`;

export const ExclamationmarkLockFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
