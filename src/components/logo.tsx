import {Raleway, Rubik_Mono_One} from "next/font/google"
import cx from "classnames";
import { logoStyle } from "@/styles";

const roboto = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
});

export const Logo = () => (
  <a className={cx("d-block", roboto.className, logoStyle)} href="/">
    ATIBCCO
  </a>
);
