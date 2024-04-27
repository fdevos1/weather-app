import { useCallback } from "react";
import { cep } from "./mask";

const InputMask = ({ ...props }) => {
  const handleKeyUp = useCallback((e) => {
    cep(e);
  }, []);

  return (
    <>
      <input {...props} onKeyUp={handleKeyUp} />
    </>
  );
};

export default InputMask;
