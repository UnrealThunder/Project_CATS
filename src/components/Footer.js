import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-links">
        <h4>Linkuri utile</h4>
        <ul>
          <li>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
              React
            </a>
          </li>
          <li>
            <a href="https://api-ninjas.com" target="_blank" rel="noreferrer">
              API Ninjas
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com" target="_blank" rel="noreferrer">
              W3Schools
            </a>
          </li>
        </ul>
      </div>
      <p className="copyright">Copyright {currentYear}</p>
    </footer>
  );
}
export default Footer;