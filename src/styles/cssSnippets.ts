import { css, FlattenSimpleInterpolation } from "styled-components";
import { theme } from "./theme";

type CssSnippets = {
  padding: FlattenSimpleInterpolation;
  select: FlattenSimpleInterpolation;
  button: FlattenSimpleInterpolation;
};

const cssSnippets: CssSnippets = {
  padding: css`
    padding-left: 5vw;
    padding-right: 5vw;
    @media (min-width: ${theme.breakpoints.XXXL}px) {
      padding-left: 5vw;
      padding-right: 5vw;
    }
    @media (min-width: 1900px) {
      padding-left: 10vw;
      padding-right: 10vw;
    }
    @media (max-width: ${theme.breakpoints.XXL}px) {
      padding-left: 5vw;
      padding-right: 5vw;
    }
    @media (max-width: ${theme.breakpoints.XL}px) {
      padding-left: 2.5vw;
      padding-right: 2.5vw;
    }
    @media (max-width: ${theme.breakpoints.SM}px) {
      padding-left: 15px;
      padding-right: 15px;
    }
    @media (max-width: 340px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  `,
  select: css`
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  `,
  button: css`
    background-color: ${theme.colors.primary}ee;
    border: 5px solid ${theme.colors.primary};
    padding-right: 30px;
    padding-left: 30px;
    padding-top: 2.5px;
    padding-bottom: 2.5px;
  `,
} as const;

export { cssSnippets };
