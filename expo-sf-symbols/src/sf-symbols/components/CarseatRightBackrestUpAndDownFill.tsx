
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="34" height="29" viewBox="0 0 34 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36018)">
<path d="M33.1932 21.8686C34.1541 18.3647 31.5994 16.8413 25.3299 16.8413C22.2947 16.8413 19.1424 17.146 16.7283 17.6499L17.1502 18.2358C17.7947 12.9975 16.1893 8.7085 12.6619 6.85694L13.0018 8.29834C14.3729 4.43115 11.9354 2.04053 9.69707 2.04053C8.00957 2.04053 6.55644 3.35303 7.27129 6.271L11.6776 24.1538C12.1112 25.9116 13.2713 26.8491 15.0057 26.8491H28.6815C31.0955 26.8491 32.1619 25.6889 33.1932 21.8686Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M6.20488 13.5014L4.88066 8.46241C4.7166 7.85303 4.14238 7.70069 3.69707 8.16944L0.33379 11.7085C-0.0998036 12.1421 0.0525399 12.7514 0.661915 12.9272L5.31426 14.3217C5.94707 14.5093 6.36894 14.1108 6.20488 13.5014Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M19.0134 9.31787C19.1775 9.93897 19.74 10.0562 20.1853 9.58741L23.5603 6.07178C23.9939 5.62647 23.8298 5.02881 23.2439 4.85303L18.5564 3.44678C17.947 3.25928 17.5251 3.66944 17.6892 4.26709L19.0134 9.31787Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36018">
<rect width="33.3035" height="24.832" fill="currentColor" transform="translate(0.0861816 2.04053)"/>
</clipPath>
</defs>
</svg>

`;

export const CarseatRightBackrestUpAndDownFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
