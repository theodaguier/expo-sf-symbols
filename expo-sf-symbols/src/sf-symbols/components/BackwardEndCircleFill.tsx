
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
<g clip-path="url(#clip0_2207_33867)">
<path d="M13.9763 25.9328C20.5154 25.9328 25.9294 20.5071 25.9294 13.9797C25.9294 7.44067 20.5037 2.02661 13.9646 2.02661C7.43725 2.02661 2.02319 7.44067 2.02319 13.9797C2.02319 20.5071 7.44897 25.9328 13.9763 25.9328Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.7146 17.8352V10.1243C8.7146 9.63208 8.98413 9.37427 9.4646 9.37427H10.7654C11.2458 9.37427 11.5154 9.62036 11.5154 10.1243V13.6516C11.5974 13.4641 11.7497 13.3 11.9958 13.1594L17.7615 9.7727C17.9724 9.6438 18.1834 9.57349 18.406 9.57349C18.8513 9.57349 19.2146 9.90161 19.2146 10.5227V17.4719C19.2146 18.1047 18.8513 18.4211 18.406 18.4211C18.1834 18.4211 17.9724 18.3508 17.7615 18.2219L11.9958 14.8352C11.7497 14.6946 11.5974 14.5305 11.5154 14.343V17.8352C11.5154 18.3391 11.2458 18.5852 10.7654 18.5852H9.4646C8.98413 18.5852 8.7146 18.3391 8.7146 17.8352Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_33867">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.02319 2.02661)"/>
</clipPath>
</defs>
</svg>

`;

export const BackwardEndCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
