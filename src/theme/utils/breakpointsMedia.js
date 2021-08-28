import theme from '../index'
import { css } from 'styled-components'

const { breakpoints } = theme

export function breackpointsMedia(cssByBreackpoints){
  const breackpointsNames = Object.keys(cssByBreackpoints);
  return breackpointsNames.map((breackpointName) => {
    return css`
      @media(min-width: ${breakpoints[breackpointName]}){
        ${cssByBreackpoints[breackpointName]}
      }
    `
  })
}