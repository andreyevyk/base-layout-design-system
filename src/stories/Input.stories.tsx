import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from 'components/Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const customCss = {
  width: "416px"
}

export const Default: ComponentStory<typeof Input> = () => <Input onChange={() => console.log("teste")} css={customCss} placeholder='Teste'/>