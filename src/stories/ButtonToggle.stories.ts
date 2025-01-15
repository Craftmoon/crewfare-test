import type { Meta, StoryObj } from '@storybook/react';
import ButtonToggle from '../components/ButtonToggle/ButtonToggle';

const meta = {
  title: 'Components/ButtonToggle',
  component: ButtonToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    enabledText: { control: 'text' },
    disabledText: { control: 'text' },
    onToggle: { action: 'onToggle' },
  },
} satisfies Meta<typeof ButtonToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onToggle: (enabled: boolean) => console.log('Toggle:', enabled),
    enabledText: 'Enable Event',
    disabledText: 'Disable Event',
  },
};
