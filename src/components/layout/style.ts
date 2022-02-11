import styled from "styled-components";
import { theme } from "../../styles/theme";
interface LayoutContainerData {
  background?: string;
}
export const LayoutContainer = styled.div<LayoutContainerData>`
  position: relative;
  background-color: ${(props) =>
    props.background ? props.background : theme.colors.primaryBackground};
  color: ${theme.colors.text};
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  /* width */
  ::-webkit-scrollbar {
    width: 7.5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px ${theme.colors.primaryBackground};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  }

  #mouse-tracker {
    border: 2px solid #fff;
    border-radius: 100%;
    z-index: 100;
    width: 60px;
    height: 60px;
    position: absolute;
    transform: translate(0px, 0px);
    transition: transform 0.075s ease-in-out;
    will-change: transform;
  }
`;
