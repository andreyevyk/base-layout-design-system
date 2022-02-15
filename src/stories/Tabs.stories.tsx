import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from 'components/Tabs';
const { TabPane } = Tabs;

export default {
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Default: ComponentStory<typeof Tabs> = () => (
  <Tabs>
    <TabPane tab="Todas" key="1">Todas</TabPane>
    <TabPane tab="Mais acessadas" key="2" />
    <TabPane tab="A-Z" key="3"/>
  </Tabs>
)