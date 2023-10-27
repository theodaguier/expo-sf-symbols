
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
<g clip-path="url(#clip0_2207_34639)">
<path d="M8.05762 27.0332C8.51465 27.0332 8.85449 26.7988 9.40527 26.2832L13.6358 22.416H21.5576C25.0498 22.416 26.9248 20.4942 26.9248 17.0606V8.08399C26.9248 4.6504 25.0498 2.7168 21.5576 2.7168H6.46387C2.97168 2.7168 1.09668 4.63868 1.09668 8.08399V17.0606C1.09668 20.5059 2.97168 22.416 6.46387 22.416H7.01465V25.8262C7.01465 26.5527 7.38965 27.0332 8.05762 27.0332Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.97168 17.4356C7.77637 17.4356 7.0498 16.7324 7.0498 15.5371V9.59571C7.0498 8.38868 7.82324 7.69727 8.97168 7.69727H15.417C16.6358 7.69727 17.2803 8.38868 17.2803 9.59571V15.5371C17.2803 16.7324 16.5655 17.4356 15.3584 17.4356H8.97168ZM17.96 14.2129V10.9199L20.3155 8.89258C20.5147 8.72852 20.7725 8.62305 20.9834 8.62305C21.4522 8.62305 21.7569 8.95118 21.7569 9.44337V15.6777C21.7569 16.1817 21.4522 16.5215 20.9834 16.5215C20.7725 16.5215 20.5381 16.416 20.3155 16.2285L17.96 14.2129Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34639">
<rect width="25.8281" height="25.8867" fill="currentColor" transform="translate(1.09668 1.14648)"/>
</clipPath>
</defs>
</svg>

`;

export const VideoBubbleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
