import { Container, Tab} from './styles';
import {TabsProps, TabPaneProps} from 'rc-tabs'


const Tabs = ({children, ...rest }:TabsProps) => {
  return(
    <Container {...rest}>
      {children}
    </Container>
  )
}

Tabs.TabPane = ({children,...rest}: TabPaneProps) => {
  return (
    <Tab {...rest}>
      {children}
    </Tab>
  )
}

export { Tabs }