
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
<g clip-path="url(#clip0_2207_35277)">
<path d="M8.65772 25.0728H19.3804C21.103 25.0728 22.0171 24.1353 22.0171 22.2837V14.2095C22.0171 12.3696 21.103 11.4321 19.3804 11.4321H8.65772C6.93506 11.4321 6.021 12.3696 6.021 14.2095V22.2837C6.021 24.1353 6.93506 25.0728 8.65772 25.0728ZM8.71631 23.3032C8.21241 23.3032 7.91944 22.9868 7.91944 22.4126V14.0806C7.91944 13.5064 8.21241 13.2017 8.71631 13.2017H19.3218C19.8374 13.2017 20.1187 13.5064 20.1187 14.0806V22.4126C20.1187 22.9868 19.8374 23.3032 19.3218 23.3032H8.71631ZM8.07178 12.3345H9.93506V8.38526C9.93506 5.42041 11.8218 3.86182 14.0132 3.86182C16.2046 3.86182 18.1148 5.42041 18.1148 8.38526V12.3345H19.9663V8.63135C19.9663 4.2251 17.0835 2.09229 14.0132 2.09229C10.9546 2.09229 8.07178 4.2251 8.07178 8.63135V12.3345Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35277">
<rect width="15.9961" height="23.5898" fill="currentColor" transform="translate(6.021 2.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const Lock = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
