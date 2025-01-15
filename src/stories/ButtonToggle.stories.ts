import type { Meta, StoryObj } from '@storybook/react';

import { ButtonToggle } from '../components/ButtonToggle/ButtonToggle';

const meta = {
  title: 'Components/ButtonToggle',
  component: ButtonToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    enabled: { control: 'boolean' },
    enabledText: { control: 'text' },
    disabledText: { control: 'text' },
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof ButtonToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    enabled: false,
    onChange: (enabled: boolean) => console.log('Toggle:', enabled),
    enabledText: 'Enable Event',
    disabledText: 'Disable Event',
  },
};
