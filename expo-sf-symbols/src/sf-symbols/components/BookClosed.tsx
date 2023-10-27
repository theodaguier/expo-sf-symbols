
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="28" height="29" viewBox="0 0 28 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_33161)">
<path d="M7.59766 26.1455H22.7734C23.2891 26.1455 23.7109 25.7353 23.7109 25.208C23.7109 24.7978 23.4297 24.4345 23.0547 24.3056C21.5781 23.7197 21.2734 21.8095 22.7266 20.3447C23.1719 19.8994 23.7109 19.3252 23.7109 18.1533V4.71192C23.7109 2.27442 22.5039 1.03223 20.0781 1.03223H7.63281C5.20703 1.03223 4 2.2627 4 4.71192V22.5244C4 24.9384 5.21875 26.1455 7.59766 26.1455ZM5.88672 19.372V4.74707C5.88672 3.5752 6.50781 2.91895 7.71484 2.91895H19.9844C21.2031 2.91895 21.8242 3.5752 21.8242 4.74707V17.8955C21.8242 18.5283 21.4609 18.8916 20.8047 18.8916H7.79688C7.03516 18.8916 6.40234 19.0556 5.88672 19.372ZM7.70312 24.2588C6.51953 24.2588 5.88672 23.626 5.88672 22.5127C5.88672 21.458 6.63672 20.7783 7.80859 20.7783H19.832C19.9844 20.7783 20.125 20.7666 20.2422 20.7431C19.6914 21.9619 19.7852 23.251 20.4062 24.2588H7.70312ZM7.26953 19.8994H8.80469V2.46192H7.26953V19.8994Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_33161">
<rect width="19.7109" height="25.1133" fill="currentColor" transform="translate(4 1.03223)"/>
</clipPath>
</defs>
</svg>

`;

export const BookClosed = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
