export interface ButtonLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  logo?: string;
  upperText?: string;
  lowerText?: string;
}

function ButtonLinks({ href, children, className, rel }: ButtonLinkProps) {
  return (
    <a href={href} children={children} className={className} rel={rel}></a>
  );
}

export default ButtonLinks;
