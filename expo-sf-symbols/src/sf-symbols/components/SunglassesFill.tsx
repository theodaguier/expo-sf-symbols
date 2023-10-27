
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="37" height="29" viewBox="0 0 37 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_36425)">
<path d="M18.1235 12.5215C18.5219 12.5215 18.8735 12.7559 19.0727 13.1895L20.3383 15.9902C21.7446 19.0489 24.311 20.3496 27.1352 20.3496C31.2602 20.3496 34.1665 17.8066 34.8344 13.3301L35.0571 11.877C35.2915 10.2949 36.229 9.79101 36.229 9.11133C36.229 8.51367 35.7954 8.13867 34.9868 8.13867C31.2954 8.13867 27.9438 8.32617 25.9516 8.61914C21.768 9.24023 20.1274 10.3066 18.1235 10.3066C16.1079 10.3066 14.4672 9.24023 10.2836 8.61914C8.29151 8.32617 4.93994 8.13867 1.26026 8.13867C0.45166 8.13867 0.00634766 8.51367 0.00634766 9.11133C0.00634766 9.79101 0.955567 10.2949 1.18994 11.877L1.4126 13.3301C2.06885 17.8066 4.9751 20.3496 9.11182 20.3496C11.936 20.3496 14.5024 19.0489 15.8969 15.9902L17.1743 13.1895C17.3618 12.7559 17.7133 12.5215 18.1235 12.5215Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_36425">
<rect width="36.2227" height="12.2227" fill="currentColor" transform="translate(0.00634766 8.13867)"/>
</clipPath>
</defs>
</svg>

`;

export const SunglassesFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
