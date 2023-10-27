
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
<g clip-path="url(#clip0_2207_34844)">
<path d="M5.27759 14.5469V3.13281H9.16821V14.5469C9.16821 15.4024 8.64087 15.7305 8.07837 15.7305H7.77368V24.7071H6.68384V15.7305H6.37915C5.81665 15.7305 5.27759 15.4024 5.27759 14.5469ZM11.9573 14.5469V3.13281H15.8479V14.5469C15.8479 15.4024 15.3206 15.7305 14.7581 15.7305H14.4534V24.7071H13.3635V15.7305H13.0471C12.4964 15.7305 11.9573 15.4024 11.9573 14.5469ZM18.637 14.5469V3.13281H22.5276V14.5469C22.5276 15.4024 22.0003 15.7305 21.4378 15.7305H21.1331V24.7071H20.0432V15.7305H19.7268C19.1643 15.7305 18.637 15.4024 18.637 14.5469ZM3.76587 24.6953H24.0393C26.5003 24.6953 27.719 23.4883 27.719 21.0742V6.75391C27.719 4.33984 26.5003 3.12109 24.0393 3.12109H3.76587C1.31665 3.12109 0.0861816 4.33984 0.0861816 6.75391V21.0742C0.0861816 23.4883 1.31665 24.6953 3.76587 24.6953Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34844">
<rect width="27.6328" height="21.5977" fill="currentColor" transform="translate(0.0861816 3.10938)"/>
</clipPath>
</defs>
</svg>

`;

export const PianokeysInverse = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
