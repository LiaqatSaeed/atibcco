"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Banner, Features, Header, RequestQuote, Facts, ServiceArea, RecentProjects, Testimonals, Footer } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <RequestQuote/>
      <Features/>
      <Facts/>
      <ServiceArea/>
      <RecentProjects/>
      <Testimonals/>
      <Footer/>
    </>
  );
}
