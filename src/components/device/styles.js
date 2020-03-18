import styled, { css } from "styled-components";

export const Device = styled.li`
  ${({ theme: { spacing, border, colors }, status }) => css`
    margin: ${spacing.small}px 0;

    padding: ${spacing.big}px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-left: ${border.size}px solid ${colors[status || "black"]};
    background-color: ${colors.gray};
    color: ${colors.darkGray};
  `}
`;

export const Status = styled.div`
  ${({ theme: { spacing, colors, font }, status }) => css`
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: ${font.sizes.small}px;

    &:before {
      content: "";
      width: ${spacing.small}px;
      height: ${spacing.small}px;
      background-color: ${colors[status || "black"]};
      display: inline-block;
      margin-right: ${spacing.base}px;
      border-radius: 50%;
    }
  `}
`;
