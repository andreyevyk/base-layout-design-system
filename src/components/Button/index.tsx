import { Wrapper, WrapperProps } from "./styles"

type ButtonProps = WrapperProps 

export const Button = ({
		children, 
		color= "primary",
		size = "normal",
		...rest
	}: ButtonProps) => {

	return(
		<Wrapper color={color} size={size} {...rest}>
			{children}
		</Wrapper>
	)
}