
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
<g clip-path="url(#clip0_2207_37438)">
<path d="M14.0224 25.9272C20.5615 25.9272 25.9755 20.5132 25.9755 13.9741C25.9755 7.44678 20.5498 2.021 14.0107 2.021C7.4834 2.021 2.06934 7.44678 2.06934 13.9741C2.06934 20.5132 7.49512 25.9272 14.0224 25.9272Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.01074 15.2983C8.01074 12.6382 9.89745 10.8804 12.7216 10.8804H16.1552L17.3623 10.9272L16.5654 10.3062L15.3818 9.15772C15.206 8.99366 15.1005 8.771 15.1005 8.52491C15.1005 8.021 15.4755 7.62256 15.9795 7.62256C16.249 7.62256 16.4482 7.71631 16.624 7.89209L19.6826 10.9976C19.8935 11.2085 19.999 11.478 19.999 11.7358C19.999 12.0054 19.9052 12.2632 19.6826 12.4741L16.6123 15.6148C16.4482 15.7788 16.2373 15.8726 15.9677 15.8726C15.4873 15.8726 15.1005 15.4741 15.1005 14.9702C15.1005 14.7241 15.206 14.5015 15.3818 14.3257L16.7998 12.9663L17.3505 12.5679L16.1552 12.6265H12.7216C10.9404 12.6265 9.75683 13.6929 9.75683 15.2983C9.75683 17.021 10.9639 18.1694 12.7334 18.1694H14.3388C14.8896 18.1694 15.2529 18.5327 15.2529 19.0483C15.2529 19.5757 14.8779 19.9155 14.3154 19.9155H12.7334C9.90917 19.9155 8.01074 18.0874 8.01074 15.2983Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2207_37438">
<rect width="23.9062" height="24.1992" fill="currentColor" transform="translate(2.06934 2.021)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowUturnRightCircleFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
