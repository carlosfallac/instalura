import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariants } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  background: transparent;
  color: ${(props) => get(props.theme, `colors.${props.variant}.main.color`)};
`;

const ButtonDefault = css`
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.main.color`)};
  color: ${(props) => get(props.theme, `colors.${props.variant}.main.contrastText`)};
`;

// eslint-disable-next-line import/prefer-default-export
export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  ${(props) => {
    if (props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
  &:hover,
  &:focus{
    opacity: 0.5;
  }
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })}
  ${propToStyle('margin')}
  ${propToStyle('display')}
`;
