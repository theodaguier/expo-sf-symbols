
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="34" viewBox="0 0 29 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36014)">
<path d="M27.2051 19.8686C28.1661 16.3647 25.6231 14.8413 19.3419 14.8413C16.3067 14.8413 13.1544 15.146 10.7403 15.6616L11.1622 16.2358C11.8067 11.0093 10.2012 6.7085 6.67387 4.86865L7.01372 6.29834C8.38481 2.43115 5.94731 0.0405273 3.70903 0.0405273C2.02153 0.0405273 0.568406 1.36475 1.28325 4.271L5.6895 22.1538C6.12309 23.9116 7.28325 24.8608 9.01762 24.8608H22.6934C25.1075 24.8608 26.1739 23.6889 27.2051 19.8686Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M18.9082 33.0053C18.9082 33.6382 19.4121 33.9077 19.9629 33.5678L24.123 31.0366C24.6621 30.7085 24.6504 30.0874 24.123 29.771L19.9629 27.2163C19.4121 26.8764 18.9082 27.1694 18.9082 27.7905V33.0053Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.8261 33.0053V27.7905C12.8261 27.1694 12.3222 26.8764 11.7715 27.2163L7.59963 29.771C7.084 30.0874 7.07228 30.7085 7.59963 31.0366L11.7597 33.5678C12.3105 33.9077 12.8261 33.6382 12.8261 33.0053Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36014">
<rect width="26.3055" height="33.8789" fill="currentColor" transform="translate(1.09668 0.0405273)"/>
</clipPath>
</defs>
</svg>

`;

export const CarseatRightForwardAndBackwardFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
