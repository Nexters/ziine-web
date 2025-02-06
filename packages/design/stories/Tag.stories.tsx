import type { Meta, StoryObj } from '@storybook/react';
import { css } from '../styled-system/css';

import { Tag } from './Tag';
import React from 'react';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'rgba(30, 30, 30, 1)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Text',
  },
};

export const Primary: Story = {
  args: {
    children: 'Text',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    variant: 'secondary',
  },
};
