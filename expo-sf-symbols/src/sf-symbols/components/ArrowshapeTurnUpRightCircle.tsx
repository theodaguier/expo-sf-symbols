
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33131)">
<path d="M13.9531 25.93C20.4922 25.93 25.9062 20.5043 25.9062 13.9769C25.9062 7.43786 20.4805 2.0238 13.9414 2.0238C7.41406 2.0238 2 7.43786 2 13.9769C2 20.5043 7.42578 25.93 13.9531 25.93ZM13.9531 23.9379C8.42188 23.9379 4.00391 19.5082 4.00391 13.9769C4.00391 8.44568 8.41016 4.01599 13.9414 4.01599C19.4727 4.01599 23.9141 8.44568 23.9141 13.9769C23.9141 19.5082 19.4844 23.9379 13.9531 23.9379Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.11719 19.016C8.38672 19.016 8.67969 18.9457 8.89062 18.5472C9.99219 16.4847 11.5273 15.8636 13.9766 15.8636H14.1641V18.2777C14.1641 18.6996 14.4688 19.016 14.8906 19.016C15.207 19.016 15.4531 18.8754 15.7461 18.6058L20.7266 13.9183C20.9727 13.6957 21.0547 13.4496 21.0547 13.2386C21.0547 13.0277 20.9727 12.7816 20.7266 12.559L15.7461 7.90661C15.418 7.60192 15.2188 7.4613 14.9023 7.4613C14.4688 7.4613 14.1641 7.81286 14.1641 8.23474V10.6254H13.9766C9.46484 10.6254 7.47266 13.5082 7.47266 18.1722C7.47266 18.723 7.78906 19.016 8.11719 19.016Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33131">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2 2.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowshapeTurnUpRightCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
