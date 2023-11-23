import { css } from "@emotion/css";
import React from "react";

export const homeStyles = {
  container: css``,
  picture: css`
    width: 200%;
    border-radius: 10px;
    transition-duration: 0.5s;
    /* Safari */
    -webkit-transition-duration: 0.5s;
    /* Mozilla Firefox */
    -moz-transition-duration: 0.5s;
    /* Opera */
    -o-transition-duration: 0.5s;
    /* IE 9 */
    -ms-transition-duration: 0.5s;
    &:hover {
      transform: scale(1.2);
      -webkit-transform: scale(1.2);
      -moz-transform: scale(1.2);
      -o-transform: scale(1.2);
      -ms-transform: scale(1.2);
      cursor: pointer;
    }
  `,
};
