import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  min-width: 320px;
  position: relative;

  #blocker {
    background-color: #00000033;
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100vw;
    height: 100vh;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;
