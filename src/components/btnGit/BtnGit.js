import git from "./gitHub-black.svg";
import "./style.css";

const BtnGit = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="btn-outline"
      rel="noreferrer"
    >
      <img
        src={git}
        alt=""
      />
      GitHub repo
    </a>
  );
};

export default BtnGit;
