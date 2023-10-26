import { tokens } from "@/configs/vanilla.css";
import { style } from "@vanilla-extract/css";

export const logoStyle = style({
  fontSize: tokens.fontSize.xxxxl,

  selectors: {
    '&:hover' : {
        color: tokens.colors.orange
    }
  }
});
