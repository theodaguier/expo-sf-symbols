
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
<g clip-path="url(#clip0_2207_34596)">
<path d="M14.0288 25.9384C20.5679 25.9384 25.9819 20.5127 25.9819 13.9853C25.9819 7.44629 20.5562 2.03223 14.0171 2.03223C7.48974 2.03223 2.07568 7.44629 2.07568 13.9853C2.07568 20.5127 7.50146 25.9384 14.0288 25.9384ZM14.0288 23.9463C8.49756 23.9463 4.07959 19.5166 4.07959 13.9853C4.07959 8.45411 8.48584 4.02442 14.0171 4.02442C19.5484 4.02442 23.9898 8.45411 23.9898 13.9853C23.9898 19.5166 19.5601 23.9463 14.0288 23.9463Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M11.0874 20.747C11.3218 20.747 11.4741 20.6416 11.7437 20.3955L13.8413 18.497H17.7554C19.4546 18.497 20.3921 17.5478 20.3921 15.8486V11.4307C20.3921 9.75489 19.4546 8.79395 17.7554 8.79395H10.3022C8.60303 8.79395 7.66553 9.74317 7.66553 11.4307V15.8486C7.66553 17.5478 8.60303 18.497 10.3022 18.497H10.5835V20.1728C10.5835 20.5244 10.771 20.747 11.0874 20.747Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34596">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.07568 2.03223)"/>
</clipPath>
</defs>
</svg>

`;

export const BubbleCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
