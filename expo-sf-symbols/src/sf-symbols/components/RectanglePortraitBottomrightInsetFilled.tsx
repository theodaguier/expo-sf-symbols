
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
<g clip-path="url(#clip0_2207_34281)">
<path d="M4.07349 22.5776C4.07349 25.0268 5.28052 26.2456 7.7063 26.2456H20.1516C22.5774 26.2456 23.7844 25.0268 23.7844 22.5776V4.8003C23.7844 2.3628 22.5774 1.12061 20.1516 1.12061H7.7063C5.28052 1.12061 4.07349 2.3628 4.07349 4.8003V22.5776ZM5.96021 22.5425V4.83545C5.96021 3.66358 6.5813 3.00733 7.80005 3.00733H20.0579C21.2766 3.00733 21.8977 3.66358 21.8977 4.83545V22.5425C21.8977 23.7144 21.2766 24.3589 20.0579 24.3589H7.80005C6.5813 24.3589 5.96021 23.7144 5.96021 22.5425Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.9837 22.7651H19.2493C19.9993 22.7651 20.2923 22.4722 20.2923 21.7339V14.7144C20.2923 13.9761 19.9993 13.6831 19.2493 13.6831H14.9837C14.2337 13.6831 13.929 13.9761 13.929 14.7144V21.7339C13.929 22.4722 14.2337 22.7651 14.9837 22.7651Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34281">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.07349 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitBottomrightInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
