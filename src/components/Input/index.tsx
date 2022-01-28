import { Wrapper, WrapperProps } from "./styles";
import { MdSearch } from 'react-icons/md';
import useFocus from "hooks/useFocus";

export type ButtonProps = WrapperProps

export const Input = ({css,...rest}: ButtonProps) => {
  const [inputRef, setInputFocus] = useFocus();

  return (
    <Wrapper css={css}>
        <MdSearch onClick={setInputFocus}/>
        <input ref={inputRef} {...rest} />
    </Wrapper>
  );
}