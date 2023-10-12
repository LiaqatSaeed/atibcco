import Fact1 from "@/app/assets/images/icon-image/fact1.png";
import Fact2 from "@/app/assets/images/icon-image/fact2.png";
import Fact3 from "@/app/assets/images/icon-image/fact3.png";
import Fact4 from "@/app/assets/images/icon-image/fact4.png";
import { FactItem } from "./fact-item";
import { Section } from "@/components";

export const Facts = () => (
  <Section id="facts" className="facts-area dark-bg">
    <div className="container">
      <div className="facts-wrapper">
        <div className="row">
            <FactItem count={0} title="Total Projects" src={Fact1.src} notFirstItem={false}/>
            <FactItem count={0} title="Staff Members" src={Fact2.src} notFirstItem={false}/>
            <FactItem count={0} title="Hours of Work" src={Fact3.src} notFirstItem={false}/>
            <FactItem count={0} title="Countries Experience" src={Fact4.src} notFirstItem={false}/>
        </div>
      </div>
    </div>
  </Section>
);
