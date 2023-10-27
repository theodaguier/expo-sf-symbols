
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
<g clip-path="url(#clip0_2207_33518)">
<path d="M20.5562 23.334C20.5562 23.041 20.4507 22.7832 20.2398 22.5722L10.9702 13.502V14.9433L20.2398 5.88476C20.4507 5.68554 20.5562 5.41601 20.5562 5.12304C20.5562 4.50195 20.0874 4.04492 19.4898 4.04492C19.1733 4.04492 18.939 4.16211 18.7163 4.36133L9.42334 13.4434C9.21241 13.6543 9.0835 13.9238 9.0835 14.2285C9.0835 14.5332 9.21241 14.791 9.43506 15.0137L18.7163 24.084C18.9272 24.3066 19.1733 24.4121 19.478 24.4121C20.0874 24.4121 20.5562 23.9433 20.5562 23.334ZM9.11866 23.3926V5.08789C9.11866 4.47852 8.68506 4.04492 8.06397 4.04492C7.45459 4.04492 7.021 4.47852 7.021 5.08789V23.3926C7.021 23.9902 7.45459 24.4121 8.06397 24.4121C8.68506 24.4121 9.11866 23.9902 9.11866 23.3926Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33518">
<rect width="13.5352" height="20.3789" fill="currentColor" transform="translate(7.021 4.04492)"/>
</clipPath>
</defs>
</svg>

`;

export const ChevronBackwardToLine = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
