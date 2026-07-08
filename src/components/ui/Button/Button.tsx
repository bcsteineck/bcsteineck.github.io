import { Link } from 'react-router-dom';

import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  to?: string;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  download?: boolean | string;
  disabled?: boolean;
};

export default function Button({
  children,
  className = '',
  variant = 'primary',
  to,
  href,
  target,
  rel,
  type = 'button',
  onClick,
  download,
  disabled,
}: ButtonProps) {
  const classes = `button button--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        download={download}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}