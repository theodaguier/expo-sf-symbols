
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
<g clip-path="url(#clip0_2207_35489)">
<path d="M9.26514 26.8547H17.9604C19.8706 26.8547 21.1479 25.6359 21.1479 23.8078V5.09302C21.1479 3.26489 19.8706 2.04614 17.9604 2.04614H9.26514C7.35498 2.04614 6.07764 3.26489 6.07764 5.09302V23.8078C6.07764 25.6359 7.35498 26.8547 9.26514 26.8547ZM9.51123 24.968C8.51514 24.968 7.96436 24.4406 7.96436 23.5031V5.3977C7.96436 4.4602 8.51514 3.93286 9.51123 3.93286H17.726C18.7104 3.93286 19.2612 4.4602 19.2612 5.3977V23.5031C19.2612 24.4406 18.7104 24.968 17.726 24.968H9.51123Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M13.6245 18.8039C16.0269 18.8039 17.9838 16.8469 17.9838 14.4445C17.9838 12.0422 16.0269 10.0852 13.6245 10.0852C11.2222 10.0852 9.26514 12.0422 9.26514 14.4445C9.26514 16.8469 11.2222 18.8039 13.6245 18.8039Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35489">
<rect width="15.0703" height="24.832" fill="currentColor" transform="translate(6.07764 2.04614)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleFilledIphone = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
