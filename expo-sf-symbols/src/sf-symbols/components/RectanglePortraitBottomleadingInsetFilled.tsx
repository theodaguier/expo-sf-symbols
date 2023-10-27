
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
<g clip-path="url(#clip0_2207_34282)">
<path d="M4.06934 22.5776C4.06934 25.0268 5.27637 26.2456 7.70215 26.2456H20.1474C22.5732 26.2456 23.7802 25.0268 23.7802 22.5776V4.8003C23.7802 2.3628 22.5732 1.12061 20.1474 1.12061H7.70215C5.27637 1.12061 4.06934 2.3628 4.06934 4.8003V22.5776ZM5.95606 22.5425V4.83545C5.95606 3.66358 6.57715 3.00733 7.7959 3.00733H20.0537C21.2724 3.00733 21.8935 3.66358 21.8935 4.83545V22.5425C21.8935 23.7144 21.2724 24.3589 20.0537 24.3589H7.7959C6.57715 24.3589 5.95606 23.7144 5.95606 22.5425Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.60449 22.7651H12.8701C13.6201 22.7651 13.9248 22.4722 13.9248 21.7339V14.7144C13.9248 13.9761 13.6201 13.6831 12.8701 13.6831H8.60449C7.86621 13.6831 7.56152 13.9761 7.56152 14.7144V21.7339C7.56152 22.4722 7.86621 22.7651 8.60449 22.7651Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34282">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.06934 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitBottomleadingInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
