import styled from "styled-components";
import { theme } from "../../styles/theme";
interface LayoutContainerData {
  background?: string;
}
export const LayoutContainer = styled.div<LayoutContainerData>`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  min-width: 320px;
  position: relative;
  background-color: ${(props) =>
    props.background ? props.background : theme.colors.primaryBackground};
  color: ${theme.colors.text};

  #blocker {
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100vw;
    height: 100vh;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }

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
    pointer-events: none;
    display: none;
  }
`;
