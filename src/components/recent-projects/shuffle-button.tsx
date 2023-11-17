import { useCallback } from "react";
import cx from "classnames";

export interface IShuffleButtonProps {
  id: string;
  label: string;
  active?: boolean;
  onChange?(val: any): void;
}

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
        console.log("CLICKED");
      }}
    >
      {label}
    </label>
  );
};
