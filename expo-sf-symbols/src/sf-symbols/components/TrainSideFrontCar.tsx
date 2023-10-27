
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="33" height="29" viewBox="0 0 33 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_35805)">
<path d="M0.0126953 20.1562C0.0126953 22.5468 1.21973 23.7422 3.64551 23.7422H26.2393C30.1299 23.7422 32.1572 21.4687 32.1572 18.7851C32.1572 17.1445 31.4189 15.3633 29.8369 13.8047L25.0439 9.04687C22.0088 6.04688 20.0518 5.14453 16.4658 5.14453H3.64551C1.21973 5.14453 0.0126953 6.33984 0.0126953 8.73047V20.1562ZM12.4111 14.5898V10.2773C12.4111 9.57422 12.8213 9.16406 13.5244 9.16406H16.7354C20.0752 9.16406 21.6455 9.59765 23.3096 11.2383L26.0049 13.9219C26.7432 14.6602 26.3096 15.6679 25.5127 15.6679H13.5244C12.8213 15.6679 12.4111 15.2578 12.4111 14.5898Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35805">
<rect width="32.1445" height="18.5977" fill="currentColor" transform="translate(0.0126953 5.14453)"/>
</clipPath>
</defs>
</svg>

`;

export const TrainSideFrontCar = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
