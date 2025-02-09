import { cva, RecipeVariantProps } from 'styled-system/css';

export const typographyStyle = cva({
  defaultVariants: {
    level: 'paragraph1',
  },
  base: {
    fontFamily: 'body',
  },
  variants: {
    level: {
      heading1: {
        fontSize: '36px',
        fontWeight: 'bold',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      heading2: {
        fontSize: '32px',
        fontWeight: 'bold',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      heading3: {
        fontSize: '28px',
        fontWeight: 'semibold',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      heading4: {
        fontSize: '24px',
        fontWeight: 'semibold',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      heading5: {
        fontSize: '20px',
        fontWeight: 'semibold',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      subtitle1: {
        fontSize: '18px',
        fontWeight: 'semibold',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      subtitle2: {
        fontSize: '16px',
        fontWeight: 'semibold',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      subtitle3: {
        fontSize: '14px',
        fontWeight: 'semibold',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      paragraph1: {
        fontSize: '16px',
        fontWeight: 'medium',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
      paragraph2: {
        fontSize: '14px',
        fontWeight: 'medium',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
      paragraph3: {
        fontSize: '13px',
        fontWeight: 'medium',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
      paragraph4: {
        fontSize: '12px',
        fontWeight: 'medium',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
      paragraph5: {
        fontSize: '11px',
        fontWeight: 'regular',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
      paragraph6: {
        fontSize: '10px',
        fontWeight: 'regular',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
    },
  },
});

export type TypographyStyleProps = NonNullable<RecipeVariantProps<typeof typographyStyle>>;
