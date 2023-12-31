
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
<g clip-path="url(#clip0_2207_34264)">
<path d="M4.06714 22.5776C4.06714 25.0268 5.27417 26.2456 7.69995 26.2456H20.1452C22.571 26.2456 23.778 25.0268 23.778 22.5776V4.8003C23.778 2.3628 22.571 1.12061 20.1452 1.12061H7.69995C5.27417 1.12061 4.06714 2.3628 4.06714 4.8003V22.5776ZM5.95386 22.5425V4.83545C5.95386 3.66358 6.57495 3.00733 7.7937 3.00733H20.0515C21.2702 3.00733 21.8913 3.66358 21.8913 4.83545V22.5425C21.8913 23.7144 21.2702 24.3589 20.0515 24.3589H7.7937C6.57495 24.3589 5.95386 23.7144 5.95386 22.5425Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.57886 22.7651H19.2194C19.9694 22.7651 20.2624 22.4722 20.2624 21.7339V14.7144C20.2624 13.9761 19.9694 13.6831 19.2194 13.6831H8.57886C7.84058 13.6831 7.53589 13.9761 7.53589 14.7144V21.7339C7.53589 22.4722 7.84058 22.7651 8.57886 22.7651Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34264">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.06714 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitBottomhalfInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
