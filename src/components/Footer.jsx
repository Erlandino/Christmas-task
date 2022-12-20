import Github from "../media/github.png";
import Figma from "../media/figma.png";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer__list">
        <li className="footer__list__item">
          <a
            className="footer__list__item__link"
            href="https://github.com/Erlandino/Christmas-task"
            target="_blank"
          >
            <img className="footer__list__item__link__logo" src={Github} alt="" /> Github
          </a>
        </li>
        <li className="footer__list__item">|</li>
        <li className="footer__list__item">
          <a
            className="footer__list__item__link"
            href="https://www.figma.com/file/cPIkeXKbLLojYG7EyJXObd/ChristmasCalender?node-id=2%3A33&t=voO52qHem3ftnr1A-1"
            target="_blank"
          >
            <img className="footer__list__item__link__logo" src={Figma} alt="" /> Figma
          </a>
        </li>
      </ul>
    </div>
  );
}
