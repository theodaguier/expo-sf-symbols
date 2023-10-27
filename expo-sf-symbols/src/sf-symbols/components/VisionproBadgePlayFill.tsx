
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="38" height="29" viewBox="0 0 38 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35536)">
<path d="M16.676 19.7578C18.9143 19.7578 21.2463 23.5312 25.6994 23.5312C30.0236 23.5312 33.2815 19.6054 33.2815 14.4492C33.2815 6 25.84 5.0625 16.676 5.0625C7.50025 5.0625 0.0588379 6.01172 0.0588379 14.4492C0.0588379 19.6054 3.31665 23.5312 7.64087 23.5312C12.094 23.5312 14.426 19.7578 16.676 19.7578Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M29.8011 16.2656C33.9261 16.2656 37.3597 12.832 37.3597 8.70703C37.3597 4.5586 33.9495 1.14844 29.8011 1.14844C25.6644 1.14844 22.2542 4.57032 22.2542 8.70703C22.2542 12.8672 25.6527 16.2656 29.8011 16.2656Z" fill="currentColor"/>
<path d="M29.801 14.6601C33.0354 14.6601 35.7541 11.9648 35.7541 8.70703C35.7541 5.4375 33.0705 2.75391 29.801 2.75391C26.5432 2.75391 23.8479 5.44922 23.8479 8.70703C23.8479 11.9882 26.5432 14.6601 29.801 14.6601Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M27.8674 11.074V6.32792C27.8674 5.83573 28.3713 5.63651 28.7932 5.89432L32.6252 8.15604C33.0705 8.42557 33.1057 8.96464 32.6955 9.21073L28.7932 11.5076C28.3596 11.7654 27.8674 11.5662 27.8674 11.074Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35536">
<rect width="37.3008" height="26.7305" fill="currentColor" transform="translate(0.0588379 1.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const VisionproBadgePlayFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
