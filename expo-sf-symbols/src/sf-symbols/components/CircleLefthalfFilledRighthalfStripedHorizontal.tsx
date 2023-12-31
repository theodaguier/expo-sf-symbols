
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
<g clip-path="url(#clip0_2207_33993)">
<path d="M3.26611 14.0007C3.26611 20.0242 7.96533 24.7117 13.977 24.7117V3.27808C7.96533 3.27808 3.26611 7.9773 3.26611 14.0007ZM13.3794 4.47339H17.5512V2.93823H13.3794V4.47339ZM13.3794 6.99292H21.8637V5.69214H13.3794V6.99292ZM13.3794 9.50073H23.5395V8.19995H13.3794V9.50073ZM13.3794 12.0203H24.7934V10.7195H13.3794V12.0203ZM13.3794 14.5281H24.7934V13.2273H13.3794V14.5281ZM13.3794 17.0476H24.7934V15.7468H13.3794V17.0476ZM13.3794 19.5671H23.5395V18.2664H13.3794V19.5671ZM13.3794 22.3093H21.8637V20.7742H13.3794V22.3093ZM13.3794 25.0632H17.5512V23.5281H13.3794V25.0632ZM13.9887 25.9538C20.5278 25.9538 25.9418 20.5281 25.9418 14.0007C25.9418 7.46167 20.5161 2.04761 13.977 2.04761C7.4497 2.04761 2.03564 7.46167 2.03564 14.0007C2.03564 20.5281 7.46142 25.9538 13.9887 25.9538ZM13.9887 23.9617C8.45752 23.9617 4.03955 19.532 4.03955 14.0007C4.03955 8.46949 8.4458 4.0398 13.977 4.0398C19.5083 4.0398 23.9497 8.46949 23.9497 14.0007C23.9497 19.532 19.52 23.9617 13.9887 23.9617Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33993">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.03564 2.04761)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleLefthalfFilledRighthalfStripedHorizontal = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
