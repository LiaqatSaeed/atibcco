interface IServiceAreaItemProps {
  src: string;
  title: string;
  description: string;
}

export const ServiceAreaItem: React.FC<IServiceAreaItemProps> = ({
  src,
  title,
  description,
}: IServiceAreaItemProps) => (
  <div className="ts-service-box d-flex">
    <div className="ts-service-box-img">
      <img loading="lazy" src={src} alt="service-icon" />
    </div>
    <div className="ts-service-box-info">
      <h3 className="service-box-title">
        <a href="#">{title}</a>
      </h3>
      <p>{description}</p>
    </div>
  </div>
);
