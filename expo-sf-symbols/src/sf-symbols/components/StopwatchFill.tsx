
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
<g clip-path="url(#clip0_2207_36718)">
<path d="M14.0454 26.4091C20.5845 26.4091 25.9985 20.9834 25.9985 14.456C25.9985 7.91699 20.5728 2.50293 14.0337 2.50293C7.50634 2.50293 2.09229 7.91699 2.09229 14.456C2.09229 20.9834 7.51807 26.4091 14.0454 26.4091ZM14.0454 16.3545C12.9907 16.3545 12.1587 15.5107 12.1587 14.4677C12.1587 13.7295 12.5806 13.0966 13.2251 12.7568V6.94433C13.2251 6.4873 13.5767 6.13574 14.0337 6.13574C14.4907 6.13574 14.854 6.4873 14.854 6.94433V12.7685C15.5103 13.0849 15.9321 13.7295 15.9321 14.4677C15.9321 15.5107 15.0884 16.3545 14.0454 16.3545ZM12.7798 3.13574H15.2876V1.4248C15.2876 0.72168 14.7368 0.135742 14.0337 0.135742C13.354 0.135742 12.7798 0.72168 12.7798 1.4248V3.13574ZM21.3462 5.76074L23.0689 7.56543L24.3814 6.24121C24.6509 5.97168 24.8032 5.6084 24.8032 5.29199C24.8032 4.63574 24.2759 4.1084 23.5962 4.1084C23.1978 4.1084 22.9165 4.22558 22.6353 4.49512L21.3462 5.76074Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36718">
<rect width="23.9062" height="28.6523" fill="currentColor" transform="translate(2.09229 0.135742)"/>
</clipPath>
</defs>
</svg>

`;

export const StopwatchFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
