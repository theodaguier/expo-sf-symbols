
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
<g clip-path="url(#clip0_2207_36960)">
<path d="M4.08228 14.8882H12.9299V23.7359H14.8167V14.8882H23.6643V13.0015H14.8167V4.15381H12.9299V13.0015H4.08228V14.8882ZM3.08618 23.7827C3.08618 24.3452 3.46118 24.7085 4.02368 24.7085H23.7346C24.2971 24.7085 24.6604 24.3452 24.6604 23.7827V4.07178C24.6604 3.50928 24.2971 3.13428 23.7346 3.13428H4.02368C3.46118 3.13428 3.08618 3.50928 3.08618 4.07178V23.7827ZM4.9729 22.482V5.36084C4.9729 5.11475 5.06665 5.021 5.31274 5.021H22.4339C22.6917 5.021 22.7737 5.11475 22.7737 5.36084V22.482C22.7737 22.7398 22.6917 22.8218 22.4339 22.8218H5.31274C5.06665 22.8218 4.9729 22.7398 4.9729 22.482Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36960">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.08618 3.13428)"/>
</clipPath>
</defs>
</svg>

`;

export const SquareshapeSplit2x2 = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
