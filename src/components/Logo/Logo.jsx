import logoSvg from "./logo.svg";
import s from './logo.module.scss';
export const Logo = () => (
  <a className={s.link} href='/'>
    <img className={s.img} src={logoSvg} alt="Логотип мебельного маркета Koff" />
  </a>
);
