import { cva, RecipeVariantProps } from 'styled-system/css';

export const dividerStyle = cva({
  defaultVariants: {
    thickness: 'thin',
  },
  base: {},
  variants: {
    thickness: {
      thin: {
        height: '1px',
        bg: 'grayscale.700',
      },
      fat: {
        height: '2px',
        bg: '#ff6464',
      },
    },
  },
});

export type DividerStyleProps = NonNullable<RecipeVariantProps<typeof dividerStyle>>;
