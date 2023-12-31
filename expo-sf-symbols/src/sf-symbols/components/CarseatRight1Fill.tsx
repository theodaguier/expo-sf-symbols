
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
<g clip-path="url(#clip0_2207_36001)">
<path d="M27.1777 21.8686C28.1387 18.3647 25.5957 16.8413 19.3145 16.8413C16.2793 16.8413 13.127 17.146 10.7129 17.6499L11.1348 18.2358C11.7793 12.9975 10.1739 8.7085 6.64653 6.85694L6.98638 8.29834C8.35747 4.43115 5.91997 2.04053 3.68169 2.04053C1.99419 2.04053 0.541062 3.35303 1.25591 6.271L5.66216 24.1538C6.09575 25.9116 7.25591 26.8491 8.99028 26.8491H22.666C25.0801 26.8491 26.1465 25.6889 27.1777 21.8686Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M22.4551 13.2553C23.0059 13.2553 23.3223 12.9038 23.3223 12.2944V4.021C23.3223 3.38819 22.9942 3.04834 22.4082 3.04834C21.9981 3.04834 21.7285 3.15381 21.2715 3.48194L19.2559 4.82959C19.0215 5.00537 18.9395 5.16944 18.9395 5.42725C18.9395 5.76709 19.209 6.06006 19.5371 6.06006C19.7012 6.06006 19.8184 6.03662 20.0879 5.84912L21.4942 4.92334H21.6113V12.2944C21.6113 12.8921 21.9395 13.2553 22.4551 13.2553Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36001">
<rect width="26.3055" height="24.832" fill="currentColor" transform="translate(1.06934 2.04053)"/>
</clipPath>
</defs>
</svg>

`;

export const CarseatRight1Fill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
