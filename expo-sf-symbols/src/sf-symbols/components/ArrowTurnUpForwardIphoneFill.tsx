
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="32" height="29" viewBox="0 0 32 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35478)">
<path d="M20.0205 26.8254H28.7041C30.6142 26.8254 31.8916 25.6066 31.8916 23.7785V5.06373C31.8916 3.2356 30.6142 2.01685 28.7041 2.01685H20.0205C18.1103 2.01685 16.8213 3.2356 16.8213 5.06373V23.7785C16.8213 25.6066 18.1103 26.8254 20.0205 26.8254Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M1.1416 24.0364C1.75097 24.0364 2.18457 23.6146 2.18457 23.0052V21.2239C2.18457 16.8646 4.84472 15.4583 8.25488 15.4583H9.02832L12.2744 15.3528V14.6966L9.08691 17.6028L7.79785 18.7044C7.52832 18.9271 7.45801 19.22 7.45801 19.5013C7.45801 20.0754 7.90332 20.5091 8.47754 20.5091C8.75879 20.5091 9.00488 20.4036 9.26269 20.1575L14.2197 15.2122C14.4541 14.9896 14.583 14.72 14.583 14.4271C14.583 14.1341 14.4541 13.8646 14.2197 13.6419L9.23925 8.6731C9.00488 8.43873 8.75879 8.34497 8.47754 8.34497C7.90332 8.34497 7.45801 8.76685 7.45801 9.35279C7.45801 9.63404 7.52832 9.92701 7.79785 10.1497L9.08691 11.2512L12.2744 14.1575V13.5013L9.02832 13.3958H8.25488C4.09472 13.3958 0.0986328 15.306 0.0986328 21.2239V23.0052C0.0986328 23.6146 0.532227 24.0364 1.1416 24.0364Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35478">
<rect width="31.793" height="24.832" fill="currentColor" transform="translate(0.0986328 2.01685)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowTurnUpForwardIphoneFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
