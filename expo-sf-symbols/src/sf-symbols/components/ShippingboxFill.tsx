
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
<g clip-path="url(#clip0_2207_36666)">
<path d="M14.7019 26.8969C14.7839 26.8735 14.8543 26.8383 14.9363 26.7915L24.1121 21.5649C25.2019 20.9438 25.7878 20.311 25.7878 18.6118V9.48291C25.7878 9.13135 25.7644 8.8501 25.6941 8.59228L14.7019 14.8735V26.8969ZM13.0964 26.8969V14.8735L2.10425 8.59228C2.03394 8.8501 2.0105 9.13135 2.0105 9.48291V18.6118C2.0105 20.311 2.60815 20.9438 3.68628 21.5649L12.8738 26.7915C12.9441 26.8383 13.0144 26.8735 13.0964 26.8969ZM13.905 13.4672L18.9089 10.6314L7.81128 4.2915L3.5105 6.74072C3.25269 6.88135 3.04175 7.02197 2.85425 7.19775L13.905 13.4672ZM20.5378 9.70556L24.9441 7.19775C24.7683 7.02197 24.5574 6.88135 24.2996 6.74072L16.0261 2.02979C15.3113 1.61963 14.5964 1.39697 13.905 1.39697C13.2019 1.39697 12.4871 1.61963 11.7722 2.02979L9.39331 3.37744L20.5378 9.70556Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36666">
<rect width="23.7773" height="25.7695" fill="currentColor" transform="translate(2.0105 1.12744)"/>
</clipPath>
</defs>
</svg>

`;

export const ShippingboxFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
