interface IProjectProps {
  imgUrl: string;
  title: string;
  category: string[];
}

export const Project = ({ imgUrl, title, category }: IProjectProps) => (
  <div className="col-lg-4 col-md-6 shuffle-item">
    <div className="project-img-container">
      <a className="gallery-popup" href="#" aria-label="project-img">
        <img className="img-fluid" src={imgUrl} alt="project-img" />
        <span className="gallery-icon">
          <i className="fa fa-plus"></i>
        </span>
      </a>
      <div className="project-item-info">
        <div className="project-item-info-content">
          <h3 className="project-item-title">
            <a href="projects-single.html">{title}</a>
          </h3>
          <p className="project-cat">{category.join(", ")}</p>
        </div>
      </div>
    </div>
  </div>
);
