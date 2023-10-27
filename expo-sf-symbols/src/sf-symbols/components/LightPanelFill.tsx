
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
<g clip-path="url(#clip0_2207_34983)">
<path d="M3.75733 25.002H25.2026C27.6635 25.002 28.8823 23.7832 28.8823 21.3691V6.7207C28.8823 4.30664 27.6635 3.08789 25.2026 3.08789H3.75733C1.30811 3.08789 0.0776367 4.29492 0.0776367 6.7207V21.3691C0.0776367 23.7949 1.30811 25.002 3.75733 25.002ZM3.78076 23.1152C2.60889 23.1152 1.96436 22.4824 1.96436 21.2754V6.81445C1.96436 5.5957 2.60889 4.97461 3.78076 4.97461H25.1792C26.3393 4.97461 26.9956 5.5957 26.9956 6.81445V21.2754C26.9956 22.4824 26.3393 23.1152 25.1792 23.1152H3.78076Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M4.58935 21.5098H24.3706C25.0268 21.5098 25.4018 21.1231 25.4018 20.4668V7.62305C25.4018 6.95508 25.0268 6.56836 24.3706 6.56836H4.58935C3.9331 6.56836 3.56982 6.95508 3.56982 7.62305V20.4668C3.56982 21.1231 3.9331 21.5098 4.58935 21.5098Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34983">
<rect width="28.8047" height="21.9258" fill="currentColor" transform="translate(0.0776367 3.08789)"/>
</clipPath>
</defs>
</svg>

`;

export const LightPanelFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
