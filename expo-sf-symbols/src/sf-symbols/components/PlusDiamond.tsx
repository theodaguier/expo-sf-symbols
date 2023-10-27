
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
<g clip-path="url(#clip0_2207_37198)">
<path d="M2.3519 16.9923L11.7386 26.379C13.473 28.1134 15.1839 28.1251 16.9065 26.4141L26.3401 16.9688C28.0511 15.2579 28.0394 13.5352 26.305 11.8009L16.93 2.42588C15.1956 0.691499 13.4847 0.668061 11.762 2.39072L2.31674 11.8243C0.594087 13.547 0.617525 15.2579 2.3519 16.9923ZM3.71127 15.6915C2.87924 14.8477 2.8558 13.9688 3.72299 13.1016L13.0276 3.79697C13.8948 2.92978 14.7737 2.9415 15.6175 3.78525L24.9456 13.1134C25.7776 13.9454 25.8011 14.836 24.9339 15.7032L15.6292 25.0079C14.762 25.8751 13.8597 25.8516 13.0394 25.0313L3.71127 15.6915Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.90271 14.4023C8.90271 14.9765 9.31287 15.3633 9.91052 15.3633H13.3559V18.8203C13.3559 19.4062 13.7543 19.8164 14.3168 19.8164C14.9145 19.8164 15.3129 19.4179 15.3129 18.8203V15.3633H18.7699C19.3559 15.3633 19.766 14.9765 19.766 14.4023C19.766 13.8164 19.3676 13.4062 18.7699 13.4062H15.3129V9.96093C15.3129 9.36328 14.9145 8.95312 14.3168 8.95312C13.7543 8.95312 13.3559 9.36328 13.3559 9.96093V13.4062H9.91052C9.31287 13.4062 8.90271 13.8164 8.90271 14.4023Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37198">
<rect width="26.5768" height="26.593" fill="currentColor" transform="translate(1.03784 1.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PlusDiamond = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
