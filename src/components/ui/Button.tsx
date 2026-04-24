import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

type Variant = "primary" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
    external?: boolean;
  };

type RouterProps = CommonProps & {
  as: "link";
  to: string;
};

type Props = ButtonProps | LinkProps | RouterProps;

export default function Button(props: Props) {
  const { variant = "primary", className, children } = props;
  const cls = cn(variants[variant], className);

  if (props.as === "link") {
    const { to } = props;
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  if (props.as === "a") {
    const { href, external, ...rest } = props;
    return (
      <a
        {...rest}
        href={href}
        className={cls}
        target={external ? "_blank" : rest.target}
        rel={external ? "noopener noreferrer" : rest.rel}
      >
        {children}
      </a>
    );
  }
  const { as: _as, ...rest } = props as ButtonProps;
  return (
    <button {...rest} className={cls}>
      {children}
    </button>
  );
}
