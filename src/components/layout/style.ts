import styled from "styled-components";
import { theme } from "../../styles/theme";
interface LayoutContainerData {
  background?: string;
}
export const LayoutContainer = styled.div<LayoutContainerData>`
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
    background: ${theme.colors.primaryBackground};
  }
`;
