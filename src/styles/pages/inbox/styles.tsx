import { css } from "@emotion/css";

export const InboxStyles = {
  boxContainAll: css`
    width: 40vw;
    height: 40vh;
    border: 1px solid #ccc;
  `,

  boxChat: css`
    width: 30vw;
    height: 35vh;
    border: 1px solid #ccc;
    display: grid;
    grid-template-rows: min-content;
    justify-items: center;
    overflow-y: auto;
  `,

  boxChatInput: css`
    display: flex;
    justify-content: center;
  `,

  chatContent: css`
    border: 1px solid #ccc;
    width: 80%;
    height: 23px;
    border-radius: 10px;
    background-color: #bd84f1;
    color: white;
  `,

  chatContent2: css`
    border: 1px solid #ccc;
    width: 80%;
    height: 23px;
    border-radius: 10px;
    background-color: #37d9ee;
    color: white;
  `,
  inputStyles: css`
    width: 25vw;
  `,
};
