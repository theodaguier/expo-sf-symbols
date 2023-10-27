
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
<g clip-path="url(#clip0_2207_34716)">
<path d="M14.1916 15.4742C14.5783 15.4742 14.9533 15.3218 15.3166 14.9937L27.0236 4.68115C26.3908 4.25928 25.6643 4.07178 24.6565 4.07178H3.73853C2.73072 4.07178 2.00415 4.25928 1.35962 4.68115L13.0666 14.9937C13.4416 15.3218 13.8166 15.4742 14.1916 15.4742ZM0.363526 22.3765L9.0354 13.7163L0.340088 6.05225C0.211182 6.29834 0.0588379 6.896 0.0588379 7.70459V20.6421C0.0588379 21.3921 0.176026 21.9312 0.363526 22.3765ZM3.38696 24.2749H25.008C25.8635 24.2749 26.5315 24.064 26.9768 23.7593L18.0588 14.8413L16.3479 16.3648C15.6682 16.9624 14.9299 17.2671 14.1916 17.2671C13.465 17.2671 12.7268 16.9624 12.0471 16.3648L10.3361 14.8413L1.41822 23.7593C1.86353 24.064 2.51978 24.2749 3.38696 24.2749ZM28.0315 22.3765C28.2072 21.9312 28.3361 21.3921 28.3361 20.6421V7.70459C28.3361 6.896 28.1838 6.29834 28.0549 6.05225L19.3596 13.7163L28.0315 22.3765Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34716">
<rect width="28.2773" height="20.2148" fill="currentColor" transform="translate(0.0588379 4.06006)"/>
</clipPath>
</defs>
</svg>

`;

export const EnvelopeFill = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
