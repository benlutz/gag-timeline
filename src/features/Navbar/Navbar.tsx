import { StyledHeader } from './Navbar.styles';

type NavbarProps = {
  variant?: 'sticky' | 'static';
};

export const Navbar = (props: NavbarProps) => {
  const { variant } = props;

  return (
    <StyledHeader variant={variant}>{/* <span>GAG Sort</span> */}</StyledHeader>
  );
};
