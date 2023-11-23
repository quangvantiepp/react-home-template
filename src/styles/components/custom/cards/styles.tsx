import { css } from "@emotion/css";

export const cardClass = {
  container: css``,

  antCardClass: css`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    & .ant-card,
    .ant-card-head {
      border-bottom: 1px solid #ccc;
    }
  `,
};
