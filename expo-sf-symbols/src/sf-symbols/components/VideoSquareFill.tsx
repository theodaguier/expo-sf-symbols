
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
<g clip-path="url(#clip0_2207_34690)">
<path d="M6.70484 24.7461H20.9196C23.3806 24.7461 24.5993 23.5273 24.5993 21.1132V6.80469C24.5993 4.39063 23.3806 3.17188 20.9196 3.17188H6.70484C4.25562 3.17188 3.02515 4.37891 3.02515 6.80469V21.1132C3.02515 23.539 4.25562 24.7461 6.70484 24.7461Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.77906 18.8164C7.58374 18.8164 6.85718 18.1132 6.85718 16.9179V10.9766C6.85718 9.76953 7.63062 9.07812 8.77906 9.07812H15.2243C16.4431 9.07812 17.0876 9.76953 17.0876 10.9766V16.9179C17.0876 18.1132 16.3728 18.8164 15.1657 18.8164H8.77906ZM17.7673 15.5937V12.3008L20.1228 10.2734C20.3103 10.1094 20.5798 10.0039 20.7907 10.0039C21.2478 10.0039 21.5642 10.332 21.5642 10.8242V17.0586C21.5642 17.5625 21.2478 17.9023 20.7907 17.9023C20.5798 17.9023 20.3337 17.7968 20.1228 17.6093L17.7673 15.5937Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_34690">
<rect width="21.5742" height="21.5977" fill="currentColor" transform="translate(3.02515 3.14844)"/>
</clipPath>
</defs>
</svg>

`;

export const VideoSquareFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
