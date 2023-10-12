import cx from "classnames";

interface IFactItemProps {
  src: string;
  count: number;
  title: string;
  notFirstItem?: boolean;
}

export const FactItem: React.FC<IFactItemProps> = ({
  src,
  title,
  count = 0,
  notFirstItem = true,
}: IFactItemProps) => (
  <div
    className={cx("col-md-3 col-sm-6 ts-facts", {
      "mt-5 mt-sm-0": notFirstItem,
    })}
  >
    <div className="ts-facts-img">
      <img loading="lazy" src={src} alt="facts-img" />
    </div>
    <div className="ts-facts-content">
      <h2 className="ts-facts-num">
        <span className="counterUp" data-count="1789">
          {count}
        </span>
      </h2>
      <h3 className="ts-facts-title">{title}</h3>
    </div>
  </div>
);
