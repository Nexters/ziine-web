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
        fontWeight: '700',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      heading2: {
        fontSize: '32px',
        fontWeight: '700',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      heading3: {
        fontSize: '28px',
        fontWeight: '600',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      heading4: {
        fontSize: '24px',
        fontWeight: '600',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      heading5: {
        fontSize: '20px',
        fontWeight: '600',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      subtitle1: {
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      subtitle2: {
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      subtitle3: {
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '130%',
        letterSpacing: '0%',
      },
      paragraph1: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
      paragraph2: {
        fontSize: '14px',
        fontWeight: '500',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
      paragraph3: {
        fontSize: '13px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
      paragraph4: {
        fontSize: '12px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
      paragraph5: {
        fontSize: '11px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
      paragraph6: {
        fontSize: '10px',
        fontWeight: '400',
        lineHeight: '160%',
        letterSpacing: '0%',
      },
    },
  },
});

export type TypographyStyleProps = NonNullable<RecipeVariantProps<typeof typographyStyle>>;
