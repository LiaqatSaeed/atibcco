import { PROJECTS, PROJECT_TYPES } from "@/helpers/consts";
import { ShuffleButton } from "./ShuffleButton";
import { Project } from "./project";
import { useState } from "react";
import { Section } from "@/components";

export const RecentProjects = () => {
  const [activeCategory, setActiveCategory] = useState("show all");
  return (
    <Section id="project-area" className="project-area solid-bg">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h2 className="section-title">Work of Excellence</h2>
            <h3 className="section-sub-title">Recent Projects</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
          <label
                  htmlFor="option1"
                  onClick={() => {
                    debugger;
                  }}
                >
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="option1"
                    onChange={() => {
                      debugger;
                    }}
                  />
                  Option 1
                </label>
            <div className="shuffle-btn-group">
              

              {PROJECT_TYPES.map((item, index) => (
                <ShuffleButton
                  key={`${item}-${index}`}
                  id={item}
                  active={activeCategory === item}
                  onChange={(val) => {
                    console.log("VAL", val);
                  }}
                  label={`${item.toLocaleUpperCase()}`}
                />
              ))}
            </div>

            <div className="row shuffle-wrapper">
              <div className="col-1 shuffle-sizer"></div>
              {PROJECTS.map(({ title, category, imgUrl }) => (
                <Project
                  key={`${title}-${category}`}
                  imgUrl={imgUrl}
                  title={title}
                  category={category}
                />
              ))}
            </div>
          </div>

          <div className="col-12">
            <div className="general-btn text-center">
              <a className="btn btn-primary" href="projects.html">
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
