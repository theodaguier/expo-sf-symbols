
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
<g clip-path="url(#clip0_2207_35940)">
<path d="M22.3839 8.29639C24.1417 8.29639 25.548 6.83155 25.548 5.13233C25.548 3.3628 24.1417 1.93311 22.3839 1.93311C20.6144 1.93311 19.1964 3.3628 19.1964 5.13233C19.1964 6.87842 20.6144 8.29639 22.3839 8.29639ZM3.50497 25.066C4.11435 25.6988 5.15732 25.6519 5.8956 24.8785L10.9464 19.6753C11.1104 19.4995 11.2276 19.4527 11.4854 19.5581L15.423 21.0464C17.9542 22.0191 20.3331 21.187 21.4464 19.1714L23.9776 14.566C24.962 12.773 24.6456 10.9214 22.9464 10.0073C21.2941 9.10498 19.5714 9.78467 18.5753 11.6245L15.2823 17.6128L12.4933 16.5933C11.1104 16.0894 9.95029 16.2535 8.84872 17.4019L3.61044 22.816C2.88388 23.566 2.95419 24.5035 3.50497 25.066Z" fill="currentColor" fill-opacity="0.85"/>
<path d="M3.07129 5.21433C3.07129 5.77683 3.50488 6.22214 4.06738 6.22214H9.46973V8.36667C9.46973 9.32761 10.4424 9.74949 11.1572 9.10495L14.708 5.96433C15.1885 5.54245 15.1885 4.95652 14.708 4.5112L11.1572 1.37058C10.4775 0.761203 9.46973 1.10105 9.46973 2.10886V4.22995H4.06738C3.50488 4.22995 3.07129 4.66355 3.07129 5.21433Z" fill="currentColor" fill-opacity="0.85"/>
</g>
<defs>
<clipPath id="clip0_2207_35940">
<rect width="22.4766" height="25.5092" fill="currentColor" transform="translate(3.07129 1.06714)"/>
</clipPath>
</defs>
</svg>

`;

export const FigureSeatedSideAirDistributionMiddle = (props: IconProps) => {
  return (
    <SvgXml xml={iconXml} width={props.width || 40} height={props.height || 40} color={props.color || "black"} opacity={props.opacity || 1} />
  );
};
