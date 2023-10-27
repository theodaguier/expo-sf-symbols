
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
<g clip-path="url(#clip0_2207_36865)">
<path d="M10.9978 26.2925H21.2985C23.5251 26.2925 24.861 24.98 24.861 22.7768L24.8728 4.67139C24.8728 2.5503 23.4431 1.12061 21.3337 1.12061H17.736C15.8962 1.12061 14.361 1.60107 12.9197 2.9253L5.51343 9.73389C4.51733 10.6479 4.02515 11.937 4.02515 13.5425V19.3198C4.02515 23.562 6.75562 26.2925 10.9978 26.2925ZM11.0447 24.4058C7.76343 24.4058 5.91187 22.5659 5.91187 19.2847V13.5659C5.91187 12.394 6.1814 11.6792 6.82593 11.0933L14.2204 4.30811C15.2634 3.35889 16.3298 3.00733 17.7829 3.00733H21.2985C22.3181 3.00733 22.986 3.68702 22.986 4.69483L22.9743 22.7417C22.9743 23.9839 22.4821 24.4058 21.2634 24.4058H11.0447Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M12.4275 21.6518H19.2126C20.1267 21.6518 20.5954 21.1948 20.5954 20.269V15.5347C20.5954 14.6323 20.1267 14.1636 19.2126 14.1636H12.4275C11.49 14.1636 11.033 14.6323 11.033 15.5347V20.269C11.033 21.1948 11.49 21.6518 12.4275 21.6518ZM8.8064 18.1479C8.8064 19.0503 9.27515 19.519 10.1892 19.519H10.283V15.5347C10.283 14.2222 11.0564 13.4136 12.4275 13.4136H18.3689V13.3667C18.3454 12.4995 17.8884 12.0542 16.9743 12.0542H10.1892C9.27515 12.0542 8.8064 12.5112 8.8064 13.437V18.1479Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36865">
<rect width="20.8477" height="25.1836" fill="currentColor" transform="translate(4.02515 1.12061)"/>
</clipPath>
</defs>
</svg>

`;

export const RectangleOnRectangleButtonAngledtopVerticalLeft = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
