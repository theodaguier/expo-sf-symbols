
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
<g clip-path="url(#clip0_2207_37078)">
<path d="M9.57056 22.1108H24.7229C25.2502 22.1108 25.6721 21.7006 25.6721 21.1733C25.6721 20.6342 25.2502 20.2241 24.7229 20.2241H9.57056C9.0315 20.2241 8.62134 20.6342 8.62134 21.1733C8.62134 21.7006 9.0315 22.1108 9.57056 22.1108Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.00806 22.931L5.094 21.6888C5.45728 21.4661 5.44556 20.9154 5.094 20.7044L3.00806 19.4388C2.53931 19.1576 2.05884 19.2865 2.05884 19.849V22.5208C2.05884 23.0599 2.55103 23.2005 3.00806 22.931Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.57056 15.0327H24.7229C25.2502 15.0327 25.6721 14.6108 25.6721 14.0835C25.6721 13.5562 25.2502 13.146 24.7229 13.146H9.57056C9.0315 13.146 8.62134 13.5562 8.62134 14.0835C8.62134 14.6108 9.0315 15.0327 9.57056 15.0327Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.00806 15.8295L5.094 14.5873C5.45728 14.3647 5.44556 13.8139 5.094 13.603L3.00806 12.3373C2.53931 12.0561 2.05884 12.1967 2.05884 12.7475V15.4194C2.05884 15.9584 2.55103 16.0991 3.00806 15.8295Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M9.57056 7.94287H24.7229C25.2502 7.94287 25.6721 7.53271 25.6721 7.00537C25.6721 6.46631 25.2502 6.05615 24.7229 6.05615H9.57056C9.0315 6.05615 8.62134 6.46631 8.62134 7.00537C8.62134 7.53271 9.0315 7.94287 9.57056 7.94287Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.00806 8.76318L5.094 7.52099C5.45728 7.29834 5.44556 6.74756 5.094 6.53662L3.00806 5.27099C2.53931 4.97802 2.05884 5.11865 2.05884 5.68115V8.35303C2.05884 8.89209 2.55103 9.03271 3.00806 8.76318Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37078">
<rect width="23.6133" height="17.9735" fill="currentColor" transform="translate(2.05884 5.09082)"/>
</clipPath>
</defs>
</svg>

`;

export const ListTriangle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
