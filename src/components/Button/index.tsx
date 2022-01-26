import { ButtonHTMLAttributes, ReactNode } from "react"
import { Wrapper, WrapperProps } from "./styles"

type ButtonProps = WrapperProps 

export const Button = ({
		children, 
		color= "primary",
		size = "normal",
		css,
		...rest
	}: ButtonProps) => {

	return(
		<Wrapper color={color} size={size} {...rest}>
			{children}
		</Wrapper>
	)
}