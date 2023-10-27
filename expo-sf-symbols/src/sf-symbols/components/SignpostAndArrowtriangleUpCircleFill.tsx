
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
<g clip-path="url(#clip0_2207_35264)">
<path d="M14.0224 26.0454C20.5615 26.0454 25.9755 20.6313 25.9755 14.0922C25.9755 7.56494 20.5498 2.13916 14.0107 2.13916C7.4834 2.13916 2.06934 7.56494 2.06934 14.0922C2.06934 20.6313 7.49512 26.0454 14.0224 26.0454Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M7.97559 14.1743V10.0493C7.97559 9.14697 8.4795 8.65478 9.38184 8.65478H13.3427V7.55322C13.3427 7.18994 13.6474 6.88525 14.0107 6.88525C14.374 6.88525 14.6904 7.18994 14.6904 7.55322V8.65478H18.6396C19.542 8.65478 20.0576 9.14697 20.0576 10.0493V14.1743C20.0576 15.0532 19.542 15.5571 18.6396 15.5571H14.6904V19.9516H16.6005C16.9638 19.9516 17.2802 20.268 17.2802 20.6313C17.2802 20.9946 16.9638 21.2993 16.6005 21.2993H11.4209C11.0576 21.2993 10.7412 20.9946 10.7412 20.6313C10.7412 20.268 11.0576 19.9516 11.4209 19.9516H13.3427V15.5571H9.38184C8.4795 15.5571 7.97559 15.0532 7.97559 14.1743ZM12.042 12.8852C11.7725 13.2719 11.9014 13.6001 12.4052 13.6001H15.6513C16.1201 13.6001 16.2607 13.2719 15.9912 12.8852L14.4091 10.6235C14.1982 10.3189 13.8466 10.3189 13.6357 10.6235L12.042 12.8852Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_35264">
<rect width="23.9062" height="23.918" fill="currentColor" transform="translate(2.06934 2.12744)"/>
</clipPath>
</defs>
</svg>

`;

export const SignpostAndArrowtriangleUpCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
