
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
<g clip-path="url(#clip0_2207_37620)">
<path d="M9.10889 22.455C9.72998 22.455 10.1284 22.0449 10.1284 21.4003V15.6347H13.8784C13.9722 15.6347 14.0894 15.6347 14.1831 15.6347L17.6401 21.8222C17.8862 22.2792 18.1792 22.455 18.6128 22.455C19.1987 22.455 19.6557 22.0566 19.6557 21.4941C19.6557 21.2714 19.5737 21.0605 19.4448 20.8144L16.2925 15.2949C18.4487 14.627 19.726 12.8105 19.726 10.4668C19.726 7.37305 17.5581 5.4043 14.2417 5.4043H9.10889C8.51123 5.4043 8.07764 5.83789 8.07764 6.44727V21.4003C8.07764 22.0449 8.47607 22.455 9.10889 22.455ZM10.1284 13.7832V7.26758H14.019C16.3042 7.26758 17.6167 8.45117 17.6167 10.5254C17.6167 12.6113 16.3628 13.7832 14.0894 13.7832H10.1284Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37620">
<rect width="11.6484" height="17.332" fill="currentColor" transform="translate(8.07764 5.12305)"/>
</clipPath>
</defs>
</svg>

`;

export const Right = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
