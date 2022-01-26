import { ComponentProps } from 'react';
import { styled, theme } from '../../config/stitches.config'

export type WrapperProps = ComponentProps<typeof Wrapper>

export const Wrapper = styled('button', {
	borderRadius: "10px",
	fontWeight: 500,
	border: 'none',

	"&:hover": {
		cursor: "pointer",
	},

	"&:disabled": {
    opacity: "70%"
	},
	variants: {
		color: {
			primary: {
				backgroundColor: theme.colors.primary,
				color: theme.colors.shape,
			},
			secondary: {
				backgroundColor: theme.colors.secondary,
				color: theme.colors.secondaryDark,
			},
		},
		size: {
			normal:{
				fontSize: "16px",
				lineHeight: "26px",
				padding: "11px 32px",
			},
			large:{
				fontSize: "18px",
				lineHeight: "26px",
				padding: "23px 56px",

			}
		}
	}
});