
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
<g clip-path="url(#clip0_2207_35286)">
<path d="M3.76172 24.6665H24.0351C26.4961 24.6665 27.7148 23.4595 27.7148 21.0454V6.7251C27.7148 4.31104 26.4961 3.09229 24.0351 3.09229H3.76172C1.3125 3.09229 0.0820312 4.31104 0.0820312 6.7251V21.0454C0.0820312 23.4595 1.3125 24.6665 3.76172 24.6665ZM3.78515 22.7798C2.61328 22.7798 1.96875 22.1587 1.96875 20.94V6.83057C1.96875 5.61182 2.61328 4.97901 3.78515 4.97901H24.0117C25.1718 4.97901 25.8281 5.61182 25.8281 6.83057V20.94C25.8281 22.1587 25.1718 22.7798 24.0117 22.7798H3.78515Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.66797 18.4907C9.66797 19.3696 10.0547 19.7798 10.875 19.7798H16.9453C17.7539 19.7798 18.1406 19.3696 18.1406 18.4907V13.8267C18.1406 13.0063 17.8008 12.6079 17.1093 12.561V11.1665C17.1093 9.01026 15.8203 7.56885 13.9101 7.56885C12 7.56885 10.7109 9.01026 10.7109 11.1665V12.561C10.0078 12.6079 9.66797 13.0063 9.66797 13.8267V18.4907ZM11.9297 12.5493V11.0376C11.9297 9.66651 12.7148 8.75245 13.9101 8.75245C15.0937 8.75245 15.8906 9.66651 15.8906 11.0376V12.5493H11.9297Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35286">
<rect width="27.6328" height="21.5742" fill="currentColor" transform="translate(0.0820312 3.09229)"/>
</clipPath>
</defs>
</svg>

`;

export const LockRectangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
