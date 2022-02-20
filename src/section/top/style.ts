import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  min-width: 320px;
  position: relative;
  .semiLogo {
    background: ${theme.colors.primary};
  }
  .header-text {
    color: ${theme.colors.secondary};
    width: 70%;
    left: 28%;
    padding-right: 5%;
    font-size: 6rem;
    line-height: 1;

    top: 11rem;
    @media (min-width: 1824px) {
      font-size: 5rem /* 72px */;
      line-height: 1;
      top: 13rem;
      width: 58%;
      left: 30%;
    }
    @media (max-width: 1824px) {
      font-size: 4rem /* 72px */;
      line-height: 1;
      top: 12rem;
      width: 57%;
      left: 32%;
    }
    @media (max-width: 900px) {
      font-size: 4rem /* 72px */;
      line-height: 1;
      top: 23rem;
      width: 90%;
      left: 5%;
    }
    @media (max-width: 610px) {
      font-size: 3rem /* 72px */;
      line-height: 1;
      top: 20rem;
      width: 90%;
      left: 5%;
    }
    @media (max-width: 420px) {
      font-size: 2.5rem /* 72px */;
      line-height: 1;
    }
  }
  .menu {
    color: ${theme.colors.primary};
    .menu-data {
      .icon-menu {
        z-index: 10;
        border: 1px solid ${theme.colors.primary};
        svg {
          transition: stroke 0.3s ease-in-out;
          transition-delay: 150ms;
          stroke: ${theme.colors.primary};
        }
      }
      .menu-box {
        z-index: 5;
        transform: scale(0, 0);
        background: ${theme.colors.primary};
        transition: transform 250ms ease-in-out;
        transition-delay: 150ms;
        border: 1.2px solid ${theme.colors.primary};
      }
      :hover {
        .icon-menu {
          svg {
            stroke: ${theme.colors.primaryBackground};
          }
        }
        .menu-box {
          transform: scale(1, 1);
        }
      }
    }
  }
`;
