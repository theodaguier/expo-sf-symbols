
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
<g clip-path="url(#clip0_2207_37573)">
<path d="M5.54773 18.698H7.64538V8.99489C7.64538 6.96755 8.87585 5.6902 10.5633 5.6902C12.2626 5.6902 13.5282 6.94411 13.5282 8.99489V17.0222C13.5282 20.4206 15.6493 22.5769 18.579 22.5769C21.497 22.5769 23.5946 20.4206 23.5946 17.0222V7.41286H21.497V17.1862C21.497 19.2019 20.2665 20.4792 18.579 20.4792C16.8798 20.4792 15.6141 19.2253 15.6141 17.1862V9.15895C15.6141 5.76051 13.493 3.60426 10.5633 3.60426C7.64538 3.60426 5.54773 5.76051 5.54773 9.15895V18.698ZM3.9071 17.8073C3.06335 17.8073 2.85241 18.3816 3.30944 19.0261L5.93445 22.7527C6.32116 23.3034 6.88366 23.2917 7.25866 22.7527L9.88366 19.0144C10.329 18.3816 10.118 17.8073 9.28601 17.8073H3.9071ZM19.868 8.3738H25.2352C26.0673 8.3738 26.2899 7.79958 25.8329 7.15505L23.2196 3.41676C22.8446 2.88942 22.2821 2.8777 21.8954 3.41676L19.2704 7.14333C18.8016 7.79958 19.0243 8.3738 19.868 8.3738Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37573">
<rect width="22.9926" height="21.6006" fill="currentColor" transform="translate(3.07349 3.01685)"/>
</clipPath>
</defs>
</svg>

`;

export const ArrowTriangleSwap = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
