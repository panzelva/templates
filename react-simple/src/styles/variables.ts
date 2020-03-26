import { css } from "styled-components"

export const spacing = {
  size01: "4px",
  size02: "8px",
  size03: "12px",
  size04: "16px",
  size05: "24px",
  size06: "32px",
  size07: "48px",
  size08: "64px",
  size09: "96px",
  size10: "128px",
  size11: "192px",
  size12: "256px",
  size13: "384px",
  size14: "512px",
  size15: "640px",
  size16: "768px"
}

export const fontSize = {
  size01: "8px",
  size02: "10px",
  size03: "12px",
  size04: "14px",
  size05: "16px",
  size06: "18px",
  size07: "20px",
  size08: "24px",
  size09: "30px",
  size10: "36px",
  size11: "48px",
  size12: "60px",
  size13: "72px"
}

export const color = {
  white: "#FFFFFF",
  black: "#000000",

  // Primary
  blueVivid050: "#E6F6FF",
  blueVivid100: "#BAE3FF",
  blueVivid200: "#7CC4FA",
  blueVivid300: "#47A3F3",
  blueVivid400: "#2186EB",
  blueVivid500: "#0967D2",
  blueVivid600: "#0552B5",
  blueVivid700: "#03449E",
  blueVivid800: "#01337D",
  blueVivid900: "#002159",

  // Neutrals
  coolGrey050: "#F5F7FA",
  coolGrey100: "#E4E7EB",
  coolGrey200: "#CBD2D9",
  coolGrey300: "#9AA5B1",
  coolGrey400: "#7B8794",
  coolGrey500: "#616E7C",
  coolGrey600: "#52606D",
  coolGrey700: "#3E4C59",
  coolGrey800: "#323F4B",
  coolGrey900: "#1F2933",

  // Supporting
  cyanVivid050: "#E1FCF8",
  cyanVivid100: "#C1FEF6",
  cyanVivid200: "#92FDF2",
  cyanVivid300: "#62F4EB",
  cyanVivid400: "#3AE7E1",
  cyanVivid500: "#1CD4D4",
  cyanVivid600: "#0FB5BA",
  cyanVivid700: "#099AA4",
  cyanVivid800: "#07818F",
  cyanVivid900: "#05606E",

  orangeVivid050: "#FFE8D9",
  orangeVivid100: "#FFD0B5",
  orangeVivid200: "#FFB088",
  orangeVivid300: "#FF9466",
  orangeVivid400: "#F9703E",
  orangeVivid500: "#F35627",
  orangeVivid600: "#DE3A11",
  orangeVivid700: "#C52707",
  orangeVivid800: "#AD1D07",
  orangeVivid900: "#841003",

  redVivid050: "#FFE3E3",
  redVivid100: "#FFBDBD",
  redVivid200: "#FF9B9B",
  redVivid300: "#F86A6A",
  redVivid400: "#EF4E4E",
  redVivid500: "#E12D39",
  redVivid600: "#CF1124",
  redVivid700: "#AB091E",
  redVivid800: "#8A041A",
  redVivid900: "#610316",

  yellowVivid050: "#FFFBEA",
  yellowVivid100: "#FFF3C4",
  yellowVivid200: "#FCE588",
  yellowVivid300: "#FADB5F",
  yellowVivid400: "#F7C948",
  yellowVivid500: "#F0B429",
  yellowVivid600: "#DE911D",
  yellowVivid700: "#CB6E17",
  yellowVivid800: "#B44D12",
  yellowVivid900: "#8D2B0B"
}

export const fontWeight = {
  extraLight: 200,
  light: 300,
  regular: 400,
  semiBold: 500,
  bold: 600,
  extraBold: 700,
  black: 800
}

export const textStyle = {
  heading1: css`
    font-weight: ${fontWeight.light};
    font-size: ${fontSize.size09};
    font-style: normal;
    line-height: 1.4;

    color: ${color.coolGrey700};
  `,
  heading3: css`
    font-weight: ${fontWeight.bold};
    font-size: ${fontSize.size05};
    font-style: normal;
    line-height: 1.4;

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: ${color.coolGrey400};
  `,
  label: css`
    font-style: normal;
    font-weight: ${fontWeight.extraBold};
    font-size: ${fontSize.size04};
    line-height: 1.4;

    color: ${color.coolGrey700};
  `
}
