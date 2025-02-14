import { cva, RecipeVariantProps } from '@/styled-system/css';

export const tagStyles = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    px: '10px',
    py: '4px',
    borderRadius: '99px',
    boxSizing: 'content-box',
  },
  variants: {
    variant: {
      orangeOutlined: {
        bg: 'primary.150',
        color: 'primary.500',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: 'primary.100',
      },
      grayOutlined: {
        bg: 'grayscale.800',
        color: 'grayscale.200',
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: 'grayscale.700',
      },
      orangeFilled: {
        bg: 'primary.500',
        color: 'grayscale.900',
      },
      grayFilled: {
        bg: 'grayscale.800',
        color: 'grayscale.200',
      },
    },
  },
});

export type TagStyleProps = NonNullable<RecipeVariantProps<typeof tagStyles>>;
