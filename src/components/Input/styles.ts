import { ComponentProps } from '@stitches/react'
import { styled, theme } from 'config/stitches.config'

const input = styled('input')
export type WrapperProps = ComponentProps<typeof input>


export const Wrapper = styled("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.colors.background02,
    border: `1px solid ${theme.colors.shape02}`,

    boxSizing: "border-box",
    borderRadius: "10px",
    padding: "11px 16px",

    color: theme.colors.complement,
    
    '& svg': {
      width: 20,
      height: 20,
    },
    '& input': {
      marginLeft: 10,
      width: "100%",
      border: "none",
      background: 'inherit',
      outline: 'none',
      
      fontSize: "16px",
      lineHeight: "22px",

      "&::placeholder": {
        color: theme.colors.complement,
      }
    }
})