import { useCallback } from "react";

export interface IShuffleButtonProps {
  id: string;
  label: string;
  active?: boolean;
  onChange?(val: any): void;
}


