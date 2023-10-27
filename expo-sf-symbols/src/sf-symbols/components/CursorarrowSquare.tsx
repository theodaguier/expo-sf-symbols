
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
<g clip-path="url(#clip0_2207_33568)">
<path d="M6.69019 24.6509H20.905C23.366 24.6509 24.5847 23.4321 24.5847 21.018V6.70947C24.5847 4.29541 23.366 3.07666 20.905 3.07666H6.69019C4.24097 3.07666 3.0105 4.28369 3.0105 6.70947V21.018C3.0105 23.4438 4.24097 24.6509 6.69019 24.6509ZM6.71362 22.7641C5.54175 22.7641 4.89722 22.143 4.89722 20.9243V6.80322C4.89722 5.58447 5.54175 4.96338 6.71362 4.96338H20.8816C22.0417 4.96338 22.698 5.58447 22.698 6.80322V20.9243C22.698 22.143 22.0417 22.7641 20.8816 22.7641H6.71362Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M10.3933 16.9282C10.3816 17.3852 10.9207 17.5259 11.2136 17.2446L12.9949 15.4516L14.9988 20.397C15.1043 20.6196 15.3386 20.7251 15.5496 20.643L16.7097 20.1743C16.9207 20.0805 17.0027 19.8344 16.8972 19.6118L14.7996 14.7368L17.3191 14.6313C17.7644 14.6196 17.9753 14.186 17.6589 13.8579L11.2605 7.27197C10.9558 6.96728 10.5105 7.14306 10.4988 7.57666L10.3933 16.9282Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33568">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.0105 3.05322)"/>
</clipPath>
</defs>
</svg>

`;

export const CursorarrowSquare = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
