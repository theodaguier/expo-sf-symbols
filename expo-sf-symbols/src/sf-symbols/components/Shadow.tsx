
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
<g clip-path="url(#clip0_2207_37135)">
<path d="M6.04614 22.3667L8.99926 23.1518C10.2415 23.4917 10.9915 22.9526 10.9915 21.7339V17.7378H16.2297V14.4682H7.1477V21.2768C7.1477 21.9448 6.71411 22.3667 6.04614 22.3667ZM7.1477 12.523H10.9915V7.81201C10.9915 6.71045 10.4876 6.19482 9.49145 5.92529L6.69067 5.17529C6.97192 5.36279 7.1477 5.66748 7.1477 6.08936V12.523ZM17.2961 22.3667L20.2492 23.1518C21.4914 23.4917 22.2414 22.9526 22.2414 21.7339V7.81201C22.2414 6.71045 21.7258 6.18311 20.7297 5.91357L17.9406 5.17529C18.2219 5.36279 18.3977 5.66748 18.3977 6.08936V21.2768C18.3977 21.9448 17.9641 22.3667 17.2961 22.3667Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37135">
<rect width="16.1953" height="19.1259" fill="currentColor" transform="translate(6.04614 4.12598)"/>
</clipPath>
</defs>
</svg>

`;

export const Shadow = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
