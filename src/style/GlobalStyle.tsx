import React from "react";
import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionNormalize}

      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
      }

      html,
      body,
      #root {
        width: 100%;
        min-height: 100%;
        height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        background-color: #efefef;
      }

      li {
        list-style: none;
      }

      body,
      html,
      #root {
        width: 100%;
        height: 100%;
      }

      #root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #6d9da89c;
        font-weight: 600;
        width: 100%;
        height: 100%;
      }

      header {
        display: flex;
        justify-content: center;
      }

      .board-wrapper {
        width: 360px;
        height: 360px;
        margin-top: 10px;
        display: grid;
        user-select: none;
      }

      .board-wrapper > .board {
        border-radius: 8px;
        box-shadow: 1px 1px 7px #18181848;
        user-select: none;
        margin: 2px;
      }

      footer {
        width: 100%;
        max-width: 360px;
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        border-top: 1px solid rgba(83, 83, 83, 0.5);
      }

      footer > a {
        margin-top: 10px;
      }

      a {
        color: rgb(83, 83, 83);
        text-decoration: none;
        outline: none;
      }

      a:hover,
      a:active {
        color: rgb(83, 83, 83);
        text-decoration: none;
      }

      html,
      body,
      div,
      span,
      a {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }

      ol,
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      body {
        line-height: 1;
      }

      @media screen and (max-width: 360px) {
        #root {
          font-size: 14px;
        }

        .board-wrapper,
        header {
          width: 100%;
        }
      }
    `}
  />
);

export default GlobalStyle;
