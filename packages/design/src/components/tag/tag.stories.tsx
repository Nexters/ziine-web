import { Tag } from './tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
    children: "Text",
  }
}


export const Primary = {
  args: {
    children: 'Text',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    children: 'Text',
    variant: 'secondary',
  },
};
