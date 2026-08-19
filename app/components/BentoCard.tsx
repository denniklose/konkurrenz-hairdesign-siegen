import type { HTMLAttributes, ReactNode } from "react";

type BentoCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export default function BentoCard({
  children,
  className = "",
  ...props
}: BentoCardProps) {
  return (
    <article className={("bento-card " + className).trim()} {...props}>
      {children}
    </article>
  );
}
