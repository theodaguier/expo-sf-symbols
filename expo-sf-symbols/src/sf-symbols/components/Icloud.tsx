
import React from "react";
import { SvgXml } from "react-native-svg";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  opacity?: number;
}

const iconXml = `
<svg width="30" height="29" viewBox="0 0 30 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2207_34515)">
<path d="M23.1918 23.4483C26.7309 23.4483 29.4965 20.8584 29.4965 17.6358C29.4965 15.1749 28.0786 13.042 25.7934 12.0811C25.8168 6.85449 22.0551 3.08105 17.2622 3.08105C14.0864 3.08105 11.8247 4.78027 10.4184 6.83105C7.53564 5.9873 4.39502 8.17871 4.33642 11.46C1.68798 11.8818 0.0356445 14.2491 0.0356445 17.1084C0.0356445 20.5538 3.04736 23.4483 7.05517 23.4483H23.1918ZM23.1918 21.5616H7.05517C4.10205 21.5616 1.92236 19.4991 1.92236 17.1084C1.92236 14.7647 3.34033 12.9014 5.8247 12.9014C5.98876 12.9014 6.04736 12.8193 6.04736 12.667C6.04736 9.05762 8.64892 7.99121 11.0512 8.77636C11.1918 8.82324 11.2739 8.78808 11.3442 8.65917C12.4809 6.63183 14.227 4.96777 17.2622 4.96777C21.1059 4.96777 23.7661 8.01464 23.9653 11.4951C24.0004 12.0342 23.9653 12.667 23.9184 13.2178C23.9067 13.3702 23.9653 13.4522 24.1059 13.4873C26.2387 13.9561 27.6098 15.5147 27.6098 17.6358C27.6098 19.8155 25.6879 21.5616 23.1918 21.5616Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_34515">
<rect width="29.4609" height="22.2773" fill="currentColor" transform="translate(0.0356445 3.08105)"/>
</clipPath>
</defs>
</svg>

`;

export const Icloud = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
