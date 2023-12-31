
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_37126)">
<path d="M4.99072 22.3926C5.61182 22.3926 5.91651 22.1582 6.13916 21.502L7.65088 17.3653H14.5649L16.0766 21.502C16.2993 22.1582 16.604 22.3926 17.2133 22.3926C17.8344 22.3926 18.2329 22.0176 18.2329 21.4317C18.2329 21.2324 18.1977 21.0449 18.104 20.7988L12.6079 6.1621C12.3384 5.44726 11.8579 5.08398 11.1079 5.08398C10.3813 5.08398 9.88916 5.43554 9.63135 6.15038L4.13525 20.8106C4.0415 21.0567 4.00635 21.2442 4.00635 21.4434C4.00635 22.0293 4.38135 22.3926 4.99072 22.3926ZM8.2251 15.584L11.0728 7.69726H11.1313L13.979 15.584H8.2251Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M23.9752 25.3574C24.5025 25.3574 24.8423 25.0176 24.8423 24.5254V16.5098C24.8423 15.9238 24.4791 15.5723 23.9048 15.5723C23.3892 15.5723 23.1314 15.7598 22.7916 16.0059L20.9166 17.2832C20.5884 17.5176 20.4478 17.7168 20.4478 17.9746C20.4478 18.3614 20.7408 18.6543 21.1041 18.6543C21.3384 18.6543 21.4908 18.584 21.7252 18.4199L23.0845 17.5059H23.1197V24.5254C23.1197 25.0176 23.4712 25.3574 23.9752 25.3574Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37126">
<rect width="20.8359" height="23.2148" fill="currentColor" transform="translate(4.00635 2.14258)"/>
</clipPath>
</defs>
</svg>

`;

export const TextformatSubscript = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
