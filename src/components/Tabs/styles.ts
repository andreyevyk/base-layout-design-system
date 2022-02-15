import RCTabs, { TabPane as RCTabPane } from 'rc-tabs'
import { styled } from '@stitches/react'
import { theme } from 'config/stitches.config'

export const Container = styled(RCTabs, {

  "& .rc-tabs-nav-wrap": {
    display: "flex",
  },
  "& .rc-tabs-nav-list": {
    borderBottom: `1px solid ${theme.colors.shape02}`,
    display: "flex",
  },

  "& .rc-tabs-tab ": {
    paddingBottom: "10px",
    color: theme.colors.complement,
    fontSize: 16,
    lineHeight: "26px",

    cursor: "pointer",
    "&:hover": {
      color: theme.colors.primary
    },
    "& + &": {
      marginLeft: 32,
    },
  },
  "& .rc-tabs-tab-active" : {
    fontWeight: 600,
    color: theme.colors.title,

    borderBottom: `2px solid ${theme.colors.primary}`
  },

  "& .rc-tabs-ink-bar": {
    display: "none",
  }
})

export const Tab = styled(RCTabPane, {
})