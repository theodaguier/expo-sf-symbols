
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
<g clip-path="url(#clip0_2207_34864)">
<path d="M17.5986 12.7872L15.9111 14.4747C15.4893 14.8848 14.9619 15.0137 14.5518 14.5801C14.1182 14.1114 14.2119 13.6895 14.6807 13.209L16.333 11.498L15.3252 10.502L5.85645 19.9707C2.23535 23.5918 3.98145 23.0293 2.0127 25.8067L3.06739 26.92C5.75098 24.9629 5.3877 26.8848 9.06739 23.2168L18.5713 13.7715L17.5986 12.7872ZM20.3877 14.9083L20.7158 14.545C21.29 13.9473 21.3252 13.2442 20.7041 12.6348L20.3525 12.295C22.1455 10.6895 24.1377 10.4668 25.3682 9.2129C27.1143 7.45508 26.5518 4.99415 25.3213 3.76368C24.1025 2.52149 21.665 1.99415 19.8721 3.7168C18.6065 4.93555 18.3955 6.93946 16.79 8.73243L16.4502 8.38087C15.8525 7.77149 15.1377 7.79493 14.54 8.36915L14.1885 8.69727C13.4619 9.38868 13.6025 9.99805 14.2119 10.6191L18.4658 14.8731C19.0869 15.4942 19.708 15.6231 20.3877 14.9083Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34864">
<rect width="24.4597" height="24.8555" fill="currentColor" transform="translate(2.0127 2.06445)"/>
</clipPath>
</defs>
</svg>

`;

export const EyedropperFull = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
