import Image from "next/image";
import { CompanyInfo, SiteNavigation } from "@/components";

export const Header = () => (
  <header id="header" className="header-one">
    <CompanyInfo/>
    <SiteNavigation />
  </header>
);
