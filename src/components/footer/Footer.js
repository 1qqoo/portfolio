import git from "./../../img/icons/gitHub.svg";
import telegram from "./../../img/icons/telegram.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/1qqoo">
                <img
                  src={git}
                  alt="Link"
                />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/Dennosfen">
                <img
                  src={telegram}
                  alt="Link"
                />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 frontend-dev.ru</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
