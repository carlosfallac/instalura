import styled, {css} from "styled-components";
import get from 'lodash/get'
import { TextStyleVariants } from '../../foundation/Text';

const ButtonGhost = css `
  background: transparent;
  color: ${(props) => get(props.theme, `colors.${props.variant}.main.color`)};
`
const ButtonDefault = css `
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.main.color`)};
  color: ${(props) => get(props.theme, `colors.${props.variant}.main.contastText`)};
`
export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;

  ${TextStyleVariants.smallestException}

  ${(props) => {
    if(props.ghost){
      return ButtonGhost
    }
    return ButtonDefault
  }}
  &:hover,
  &:focus{
    opacity: 0.5;
  }
`