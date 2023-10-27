
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
<g clip-path="url(#clip0_2207_33996)">
<path d="M24.7178 14.0007C24.7178 7.9773 20.0186 3.27808 14.0068 3.27808V24.7117C20.0186 24.7117 24.7178 20.0242 24.7178 14.0007ZM14.6045 4.47339V2.93823H10.4326V4.47339H14.6045ZM14.6045 6.99292V5.69214H6.12011V6.99292H14.6045ZM14.6045 9.50073V8.19995H4.44433V9.50073H14.6045ZM14.6045 12.0203V10.7195H3.19043V12.0203H14.6045ZM14.6045 14.5281V13.2273H3.19043V14.5281H14.6045ZM14.6045 17.0476V15.7468H3.19043V17.0476H14.6045ZM14.6045 19.5671V18.2664H4.44433V19.5671H14.6045ZM14.6045 22.3093V20.7742H6.12011V22.3093H14.6045ZM14.6045 25.0632V23.5281H10.4326V25.0632H14.6045ZM13.9951 25.9538C20.5342 25.9538 25.9482 20.5281 25.9482 14.0007C25.9482 7.46167 20.5225 2.04761 13.9834 2.04761C7.45605 2.04761 2.04199 7.46167 2.04199 14.0007C2.04199 20.5281 7.46777 25.9538 13.9951 25.9538ZM13.9951 23.9617C8.46387 23.9617 4.0459 19.532 4.0459 14.0007C4.0459 8.46949 8.45215 4.0398 13.9834 4.0398C19.5147 4.0398 23.9561 8.46949 23.9561 14.0007C23.9561 19.532 19.5264 23.9617 13.9951 23.9617Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33996">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.04199 2.04761)"/>
</clipPath>
</defs>
</svg>

`;

export const CircleLefthalfStripedHorizontalInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
