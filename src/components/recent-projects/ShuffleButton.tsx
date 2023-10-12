import cx from "classnames";
import { IShuffleButtonProps } from "./shuffle-button";

export const ShuffleButton: React.FC<IShuffleButtonProps> = ({
  label,
  id,
  active,
  onChange,
}) => {
  const handleClick = () => {
    console.log("FUNCTION CLICKED");
    onChange && onChange(id);
  };

  return (
 
      <label
        key={id}
        className={cx({ active })}
        htmlFor={id}
        onClick={() => {
          console.log("CLICKED")
        }}
      >
       
        {label}
      </label>
  
  );
};
