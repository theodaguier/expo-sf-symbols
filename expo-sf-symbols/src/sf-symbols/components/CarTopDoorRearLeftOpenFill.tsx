
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="29" height="31" viewBox="0 0 29 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36108)">
<path d="M16.583 30.2971C22.501 30.2971 25.0205 28.9963 25.0205 25.8088V5.46509C25.0205 2.04322 21.915 0.0393066 16.583 0.0393066C11.2627 0.0393066 8.14551 2.04322 8.14551 5.46509V25.8088C8.14551 28.9963 10.6768 30.2971 16.583 30.2971ZM16.5947 12.5198C15.4463 12.5198 13.6885 12.6018 13.0674 12.6018C12.165 12.6018 11.7666 12.2502 11.6729 11.3127L11.4854 9.03931C11.3213 7.29322 12.5518 6.59009 16.5947 6.59009C20.626 6.59009 21.8565 7.29322 21.6924 9.03931L21.5049 11.3127C21.4111 12.2502 21.0244 12.6018 20.1104 12.6018C19.501 12.6018 17.6729 12.5198 16.5947 12.5198ZM16.5947 25.4221C12.5166 25.4221 11.2744 24.8127 11.5322 23.0315L11.6846 21.9299C11.8838 20.4885 13.0908 19.9963 16.5947 19.9963C20.0869 19.9963 21.2939 20.4885 21.4932 21.9299L21.6455 23.0315C21.9033 24.8127 20.6611 25.4221 16.5947 25.4221ZM9.02442 17.0666L3.29395 22.762C2.91895 23.137 2.91895 23.7698 3.29395 24.1565C3.68066 24.5315 4.30176 24.5432 4.68848 24.1565L9.02442 19.8205V17.0666Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36108">
<rect width="22.0078" height="30.2695" fill="currentColor" transform="translate(3.0127 0.0393066)"/>
</clipPath>
</defs>
</svg>

`;

export const CarTopDoorRearLeftOpenFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
