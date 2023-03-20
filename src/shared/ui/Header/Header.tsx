interface HeaderProps {
  content: string;
}

const Header = ({ content }: HeaderProps) => {
  return <h2>{content}</h2>;
};

export default Header;
