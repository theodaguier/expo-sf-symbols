
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="30" viewBox="0 0 29 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36392)">
<path d="M0.252621 9.55942L1.13153 12.7821V23.0477C1.13153 25.3563 2.31512 26.5164 4.65887 26.5164H23.9245C26.28 26.5164 27.4401 25.3446 27.4401 23.0477V12.1141C27.4401 10.8133 26.5964 9.96958 25.2722 9.96958H11.5612L24.4284 6.52426C25.7175 6.18442 26.3034 5.11801 25.987 3.88754L25.6823 2.73911C25.1081 0.500825 23.6198 -0.307769 21.3698 0.289888L2.76044 5.29379C0.522152 5.90317 -0.333317 7.34458 0.252621 9.55942Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.40503 10.3796L4.28393 6.78198L7.98706 5.77417L7.14331 9.37183L3.40503 10.3796ZM10.612 8.44604L11.4558 4.84838L15.4519 3.78199L14.6081 7.39136L10.612 8.44604ZM18.0534 6.45386L18.9089 2.85619L21.7331 2.08276C22.0378 2.00073 22.3308 1.94213 22.612 1.88354L21.78 5.45777L18.0534 6.45386ZM3.96753 15.0554L5.64331 11.9382L8.7019 11.7976H9.58081L7.823 15.0554H3.96753ZM11.4089 15.0554L13.155 11.7976H17.3034L15.5456 15.0554H11.4089ZM19.1315 15.0554L20.8776 11.7976H24.7331L22.9753 15.0554H19.1315Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_36392">
<rect width="27.3666" height="29.8063" fill="currentColor" transform="translate(0.0734863 0.0996094)"/>
</clipPath>
</defs>
</svg>

`;

export const MovieclapperFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
