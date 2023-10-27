
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
<g clip-path="url(#clip0_2207_37045)">
<path d="M11.3181 15.6761C12.4665 14.9613 12.5017 13.6371 11.3181 12.9222L2.4353 7.48474C1.3103 6.79333 0.079834 7.30896 0.079834 8.70349V19.8832C0.079834 21.3129 1.33374 21.7933 2.4353 21.1136L11.3181 15.6761ZM10.0642 14.5394L2.20092 19.4144C2.0603 19.4965 1.77905 19.5082 1.77905 19.2152V9.38318C1.77905 9.06677 2.08374 9.10192 2.20092 9.18396L10.0525 14.0472C10.3454 14.2347 10.24 14.434 10.0642 14.5394ZM16.0759 26.5511C16.5329 26.5511 16.9431 26.1879 16.9431 25.7308V2.85583C16.9431 2.3988 16.5329 2.04724 16.0759 2.04724C15.6189 2.04724 15.2204 2.3988 15.2204 2.85583V25.7308C15.2204 26.1879 15.6189 26.5511 16.0759 26.5511ZM29.7165 21.1136C30.8298 21.7933 32.0837 21.3129 32.0837 19.8832V8.70349C32.0837 7.30896 30.8532 6.79333 29.7165 7.48474L20.8337 12.9222C19.6618 13.6371 19.6853 14.9613 20.8337 15.6761L29.7165 21.1136ZM29.9509 19.4144L22.0993 14.5394C21.9118 14.434 21.8181 14.2347 22.0993 14.0472L29.9509 9.18396C30.0798 9.10192 30.3728 9.06677 30.3728 9.38318V19.2152C30.3728 19.5082 30.1032 19.4965 29.9509 19.4144Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37045">
<rect width="32.0039" height="24.5273" fill="currentColor" transform="translate(0.079834 2.0238)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowtriangleRightAndLineVerticalAndArrowtriangleLeft = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
