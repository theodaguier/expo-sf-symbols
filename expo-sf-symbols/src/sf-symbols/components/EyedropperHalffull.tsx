
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
<g clip-path="url(#clip0_2207_34863)">
<path d="M17.6005 12.7872L12.4794 17.9083C12.0693 18.3184 11.5303 18.4473 11.1201 18.0137C10.6982 17.545 10.792 17.1114 11.249 16.6426L16.3349 11.498L15.3271 10.502L5.8584 19.9707C2.2373 23.5918 3.9834 23.0293 2.01465 25.8067L3.06934 26.92C5.75293 24.9629 5.38965 26.8848 9.06934 23.2168L18.5732 13.7715L17.6005 12.7872ZM20.3896 14.9083L20.7177 14.545C21.2919 13.9473 21.3271 13.2442 20.706 12.6348L20.3544 12.295C22.1474 10.6895 24.1396 10.4668 25.3701 9.2129C27.1162 7.45508 26.5537 4.99415 25.3232 3.76368C24.1044 2.52149 21.6669 1.99415 19.874 3.7168C18.6084 4.93555 18.3974 6.93946 16.7919 8.73243L16.4521 8.38087C15.8544 7.77149 15.1396 7.79493 14.5419 8.36915L14.1904 8.69727C13.4638 9.38868 13.6044 9.99805 14.2138 10.6191L18.4677 14.8731C19.0888 15.4942 19.7099 15.6231 20.3896 14.9083Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34863">
<rect width="24.4597" height="24.8555" fill="currentColor" transform="translate(2.01465 2.06445)"/>
</clipPath>
</defs>
</svg>

`;

export const EyedropperHalffull = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
