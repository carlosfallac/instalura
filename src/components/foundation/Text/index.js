import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariants = {
  title: css`
    font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  `,

  titleXs: css`
    font-size: ${({ theme }) => theme.typographyVariants.titleXs.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.titleXs.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.titleXs.lineHeight};
  `,

  subtitle: css`
    font-size: ${({ theme }) => theme.typographyVariants.subtitle.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.subtitle.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.subtitle.lineHeight};
  `,

  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,

  paragraph2: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
  `,

  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  ${propToStyle('textAlign')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  // eslint-disable-next-line react/require-default-props
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  tag: 'span',
  variant: 'paragraph1',
};
