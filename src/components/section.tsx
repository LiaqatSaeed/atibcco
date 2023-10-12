import cx from "classnames";

interface ISectionProps {
  children: React.ReactNode;
  className: string;
  id?: string;
}



export const Section = ({ children, id, className }: ISectionProps) => (
  <section  className={cx("section-padding", className)} id={id}>{children}</section>
);
