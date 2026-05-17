import Logo from './Logo';
import './Header.css';

function Header({ title, subtitle, logoUrl }) {
  return (
    <header className="header">
      <Logo imageUrl={logoUrl} />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
export default Header;