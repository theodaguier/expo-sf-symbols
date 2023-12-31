
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
<g clip-path="url(#clip0_2207_37196)">
<path d="M4.06299 22.5688C4.06299 25.018 5.27002 26.2368 7.6958 26.2368H20.1411C22.5669 26.2368 23.7739 25.018 23.7739 22.5688V4.79151C23.7739 2.35401 22.5669 1.11182 20.1411 1.11182H7.6958C5.27002 1.11182 4.06299 2.35401 4.06299 4.79151V22.5688ZM5.94971 22.5337V4.82666C5.94971 3.65479 6.5708 2.99854 7.78955 2.99854H20.0474C21.2661 2.99854 21.8872 3.65479 21.8872 4.82666V22.5337C21.8872 23.7056 21.2661 24.3501 20.0474 24.3501H7.78955C6.5708 24.3501 5.94971 23.7056 5.94971 22.5337Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M8.49268 13.6743C8.49268 14.2485 8.90283 14.6352 9.50049 14.6352H12.9458V18.0923C12.9458 18.6782 13.3442 19.0884 13.9067 19.0884C14.5044 19.0884 14.9028 18.6899 14.9028 18.0923V14.6352H18.3599C18.9458 14.6352 19.356 14.2485 19.356 13.6743C19.356 13.0884 18.9575 12.6782 18.3599 12.6782H14.9028V9.23291C14.9028 8.63526 14.5044 8.2251 13.9067 8.2251C13.3442 8.2251 12.9458 8.63526 12.9458 9.23291V12.6782H9.50049C8.90283 12.6782 8.49268 13.0884 8.49268 13.6743Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_37196">
<rect width="19.7109" height="25.1367" fill="currentColor" transform="translate(4.06299 1.11182)"/>
</clipPath>
</defs>
</svg>

`;

export const PlusRectanglePortrait = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
