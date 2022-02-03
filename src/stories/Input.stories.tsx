import { styled } from '@stitches/react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from 'components/Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const StyledInput = styled(Input, {
  width: "330px !important",
})

export const Default: ComponentStory<typeof Input> = () => <StyledInput onChange={() => console.log("teste")} placeholder='Teste'/>