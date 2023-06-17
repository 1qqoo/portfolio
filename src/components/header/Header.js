import './style.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Dmitry <em>frontend developer</em>
          </strong>
        </h1>
        <div className="header__text">
          <p className="header__subtitle">
            "Не волнуйтесь, если что-то не работает.
          </p>
          <p className="header__subtitle">
            Если бы всё работало, вас бы уволили."
          </p>
        </div>
        {/* <a
          href="#!"
          className="btn"
        >
          Download CV
        </a> */}
      </div>
    </header>
  );
};

export default Header;
