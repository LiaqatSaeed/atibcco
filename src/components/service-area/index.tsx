import ServiceIcon1 from "@/app/assets/images/icon-image/service-icon1.svg";
import ServiceIcon2 from "@/app/assets/images/icon-image/service-icon2.svg";
import ServiceIcon3 from "@/app/assets/images/icon-image/service-icon3.svg";
import ServiceIcon4 from "@/app/assets/images/icon-image/service-icon4.svg";
import ServiceIcon5 from "@/app/assets/images/icon-image/service-icon5.svg";
import ServiceIcon6 from "@/app/assets/images/icon-image/service-icon6.svg";
import ServiceCenter from "@/app/assets/images/services//service-center.jpg"

import { ServiceAreaItem } from "./service-area-item";
import { Section } from "@/components";

export const ServiceArea = () => (
  <Section id="ts-service-area" className="ts-service-area pb-0">
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <h2 className="section-title">We Are Specialists In</h2>
          <h3 className="section-sub-title">What We Do</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <ServiceAreaItem
            src={ServiceIcon1.src}
            title="Home Construction"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat"
          />
          <ServiceAreaItem
            src={ServiceIcon2.src}
            title="Building Remodels"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat"
          />
          <ServiceAreaItem
            src={ServiceIcon3.src}
            title="Interior Design"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat"
          />
        </div>

        <div className="col-lg-4 text-center">
          <img
            loading="lazy"
            className="img-fluid"
            src={ServiceCenter.src}
            alt="service-avater-image"
          />
        </div>

        <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
          <ServiceAreaItem
            src={ServiceIcon4.src}
            title="Exterior Desig"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat"
          />
          <ServiceAreaItem
            src={ServiceIcon5.src}
            title="Renovation"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat"
          />
          <ServiceAreaItem
            src={ServiceIcon6.src}
            title="Safety Management"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                adipiscing erat"
          />
        </div>
      </div>
    </div>
  </Section>
);
