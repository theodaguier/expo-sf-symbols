
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="33" viewBox="0 0 29 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36020)">
<path d="M1.25947 19.8686C2.29073 23.6889 3.35713 24.8491 5.7712 24.8491H19.447C21.1814 24.8491 22.3415 23.9116 22.7751 22.1421L27.1814 4.25928C27.8962 1.35303 26.4431 0.0405273 24.7556 0.0405273C22.5173 0.0405273 20.0798 2.43115 21.4509 6.28662L21.7907 4.85694C18.2634 6.69678 16.6579 10.9975 17.3025 16.2358L17.7243 15.6499C15.3103 15.1342 12.1579 14.8413 9.12276 14.8413C2.85323 14.8413 0.298537 16.3647 1.25947 19.8686Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.3064 26.6421C6.67359 26.6421 6.41578 27.1577 6.7439 27.7085L9.27515 31.8686C9.615 32.4077 10.2244 32.3843 10.5408 31.8686L13.0954 27.7085C13.4353 27.1577 13.1423 26.6421 12.5212 26.6421H7.3064Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.30631 13.06H12.5212C13.1423 13.06 13.4353 12.5561 13.0954 12.0053L10.5407 7.84523C10.2243 7.31788 9.60319 7.30616 9.27506 7.84523L6.74381 12.0053C6.40397 12.5561 6.6735 13.06 7.30631 13.06Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36020">
<rect width="26.3049" height="32.4258" fill="currentColor" transform="translate(1.06299 0.0405273)"/>
</clipPath>
</defs>
</svg>

`;

export const CarseatLeftUpAndDownFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
