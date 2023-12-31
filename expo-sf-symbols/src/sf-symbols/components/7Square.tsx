
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="28" viewBox="0 0 29 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37965)">
<path d="M6.74488 24.6048H20.9597C23.4207 24.6048 24.6394 23.386 24.6394 20.9719V6.66333C24.6394 4.24927 23.4207 3.03052 20.9597 3.03052H6.74488C4.29566 3.03052 3.06519 4.23755 3.06519 6.66333V20.9719C3.06519 23.3977 4.29566 24.6048 6.74488 24.6048ZM6.76831 22.718C5.59644 22.718 4.95191 22.0969 4.95191 20.8782V6.75708C4.95191 5.53833 5.59644 4.91724 6.76831 4.91724H20.9363C22.0964 4.91724 22.7527 5.53833 22.7527 6.75708V20.8782C22.7527 22.0969 22.0964 22.718 20.9363 22.718H6.76831Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.2878 19.3665C12.6863 19.3665 12.9675 19.179 13.2019 18.7219L17.573 10.5305C17.7957 10.1086 17.8543 9.86255 17.8543 9.61646C17.8543 8.97192 17.3504 8.49146 16.5769 8.49146H10.8582C10.4363 8.49146 10.155 8.78442 10.155 9.2063C10.155 9.62817 10.448 9.93286 10.8582 9.93286H15.8269V10.0266L11.5144 17.9251C11.3972 18.1243 11.3503 18.2883 11.3503 18.5227C11.3503 19.0149 11.7722 19.3665 12.2878 19.3665Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37965">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.06519 3.00708)"/>
</clipPath>
</defs>
</svg>

`;

export const 7Square = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
