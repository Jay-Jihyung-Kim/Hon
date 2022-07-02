import { css } from "styled-components";

export const large = (props) => {
  return css`
    @media only screen and (max-width: 1650px) {
      ${props}
    }
  `;
};

export const largeTablet = (props) => {
  return css`
    @media only screen and (max-width: 1240px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 720px) {
      ${props}
    }
  `;
};

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};
