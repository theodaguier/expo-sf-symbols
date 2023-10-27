
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
<g clip-path="url(#clip0_2207_37190)">
<path d="M13.9867 26.018C20.5258 26.018 25.9398 20.5923 25.9398 14.0649C25.9398 7.52588 20.5141 2.11182 13.975 2.11182C7.44763 2.11182 2.03357 7.52588 2.03357 14.0649C2.03357 20.5923 7.45935 26.018 13.9867 26.018ZM13.9867 24.0259C8.45545 24.0259 4.03748 19.5962 4.03748 14.0649C4.03748 8.5337 8.44373 4.10401 13.975 4.10401C19.5063 4.10401 23.9477 8.5337 23.9477 14.0649C23.9477 19.5962 19.518 24.0259 13.9867 24.0259Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.54919 14.0649C8.54919 14.6391 8.94763 15.0259 9.54529 15.0259H12.9906V18.4829C12.9906 19.0688 13.3891 19.479 13.9633 19.479C14.5492 19.479 14.9594 19.0806 14.9594 18.4829V15.0259H18.4164C19.0024 15.0259 19.4125 14.6391 19.4125 14.0649C19.4125 13.479 19.0024 13.0688 18.4164 13.0688H14.9594V9.62353C14.9594 9.02587 14.5492 8.61572 13.9633 8.61572C13.3891 8.61572 12.9906 9.02587 12.9906 9.62353V13.0688H9.54529C8.94763 13.0688 8.54919 13.479 8.54919 14.0649Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37190">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03357 2.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PlusCircle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
