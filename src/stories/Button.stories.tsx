import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'components/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button>Descobrir todos os lugares</Button>;

export const Secondary: ComponentStory<typeof Button> = () => <Button color="secondary">Default Color</Button>;

export const Large: ComponentStory<typeof Button> = () => <Button size='large'>Descobrir todos os lugares</Button>;

export const Disabled: ComponentStory<typeof Button> = () => <Button disabled>Descobrir todos os lugares</Button>;