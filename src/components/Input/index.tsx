import { Wrapper, WrapperProps } from "./styles";
import { MdSearch } from 'react-icons/md';
import useFocus from "hooks/useFocus";

export interface InputProps extends WrapperProps{
  inputClassName: string;
}

export const Input = ({className, inputClassName, css , ...rest}: InputProps) => {
  const [inputRef, setInputFocus] = useFocus();
  
  return (
    <Wrapper css={css} className={className}>
        <MdSearch onClick={setInputFocus}/>
        <input ref={inputRef} className={inputClassName}  {...rest}/>
    </Wrapper>
  );
}