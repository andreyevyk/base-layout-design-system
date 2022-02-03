import { Wrapper, WrapperProps } from "./styles";
import { MdSearch } from 'react-icons/md';
import useFocus from "hooks/useFocus";
import { ChangeEvent, useMemo, useState } from "react";
import { theme } from "config/stitches.config";

export interface InputProps extends WrapperProps{
  inputClassName: string;
}

export const Input = ({
  className, 
  inputClassName, 
  onChange, 
  css , 
  ...rest
}: InputProps) => {
  const [inputRef, setInputFocus] = useFocus();
  const [hasValue, setHasValue] = useState(false);
  
  function onChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.currentTarget
    setHasValue(!!value)
    onChange && onChange(event);
  }
  const svgColor = useMemo(() => 
    hasValue 
      ? theme.colors.primary.toString() 
      : theme.colors.complement.toString()
  , [hasValue]);

  return (
    <Wrapper css={css} className={className}>
        <MdSearch color={svgColor} onClick={setInputFocus}/>
        <input 
          ref={inputRef} 
          className={inputClassName} 
          onChange={onChangeInput}
          {...rest} 
        />
    </Wrapper>
  );
}