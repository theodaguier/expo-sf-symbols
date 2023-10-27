
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
<g clip-path="url(#clip0_2207_34510)">
<path d="M2.06519 13.9956C2.06519 20.5933 7.43238 25.9605 14.03 25.9605C20.6277 25.9605 26.0066 20.5933 26.0066 13.9956C26.0066 8.00732 21.5769 3.02686 15.823 2.17139C16.0574 2.51123 16.2097 2.93311 16.2097 3.39014C16.2097 3.97607 15.9754 4.4917 15.6004 4.87842C19.948 5.64014 23.2761 9.43701 23.2761 13.9956C23.2761 19.0933 19.1394 23.2417 14.03 23.2417C8.93238 23.2417 4.78394 19.0933 4.78394 13.9956C4.78394 8.89795 8.93238 4.74951 14.03 4.74951C14.78 4.74951 15.3894 4.14014 15.3894 3.39014C15.3894 2.64014 14.78 2.03076 14.03 2.03076C7.43238 2.03076 2.06519 7.39795 2.06519 13.9956Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.21362 14.7339C9.21362 15.0152 9.43627 15.2261 9.71752 15.2261H13.409L11.4402 20.5113C11.1824 21.2144 11.9324 21.6128 12.3894 21.0386L18.3777 13.5269C18.4832 13.3863 18.5535 13.2339 18.5535 13.105C18.5535 12.8238 18.3308 12.6128 18.0496 12.6128H14.3582L16.3269 7.31592C16.5847 6.61279 15.8347 6.22607 15.3777 6.78857L9.3894 14.312C9.28393 14.4527 9.21362 14.605 9.21362 14.7339Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34510">
<rect width="23.9414" height="23.9414" fill="currentColor" transform="translate(2.06519 2.03076)"/>
</clipPath>
</defs>
</svg>

`;

export const BoltRingClosed = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
