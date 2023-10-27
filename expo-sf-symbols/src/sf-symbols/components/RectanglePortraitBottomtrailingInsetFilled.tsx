
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
<g clip-path="url(#clip0_2207_34283)">
<path d="M4.07764 22.5776C4.07764 25.0268 5.28467 26.2456 7.71045 26.2456H20.1557C22.5815 26.2456 23.7885 25.0268 23.7885 22.5776V4.8003C23.7885 2.3628 22.5815 1.12061 20.1557 1.12061H7.71045C5.28467 1.12061 4.07764 2.3628 4.07764 4.8003V22.5776ZM5.96436 22.5425V4.83545C5.96436 3.66358 6.58545 3.00733 7.8042 3.00733H20.062C21.2807 3.00733 21.9018 3.66358 21.9018 4.83545V22.5425C21.9018 23.7144 21.2807 24.3589 20.062 24.3589H7.8042C6.58545 24.3589 5.96436 23.7144 5.96436 22.5425Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M14.9878 22.7651H19.2534C20.0034 22.7651 20.2964 22.4722 20.2964 21.7339V14.7144C20.2964 13.9761 20.0034 13.6831 19.2534 13.6831H14.9878C14.2378 13.6831 13.9331 13.9761 13.9331 14.7144V21.7339C13.9331 22.4722 14.2378 22.7651 14.9878 22.7651Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34283">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.07764 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectanglePortraitBottomtrailingInsetFilled = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
