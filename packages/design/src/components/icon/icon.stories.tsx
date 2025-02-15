import type { Meta, StoryObj } from '@storybook/react';

import Icon from './icon';
import { ICON_NAMES } from './meta';
import { css } from 'styled-system/css';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Components/Icon',
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'arrow_down',
    color: 'primary.100',
  },
  render: (args) => {
    return <Icon {...args} />;
  },
};

export const IconList: Story = {
  args: {
    size: 'medium',
  },
  argTypes: {},
  render: (args) => {
    return (
      <div className={css({
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
      })}>
        {ICON_NAMES.map((name) => {
          return (
            <div key={name} className={css({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            })}>
              <Icon {...args} name={name} />
              {name}
            </div>
          );
        })}
      </div>
    );
  },
};
