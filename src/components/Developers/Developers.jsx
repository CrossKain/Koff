import s from "./Developers.module.scss";

export const Developers = () => (
  <ul className={s.developers}>
    <li className={s.item}>
      Designer:{" "}
      <a
        className={s.link}
        href="https://t.me/Mrshmallowww"
        target="_blank"
        rel="noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li className={s.item}>
      Developer:{" "}
      <a
        className={s.link}
        href="https://t.me/CROSSKAIN"
        target="_blank"
        rel="noreferrer">
        Denis Fomin
      </a>
    </li>
  </ul>
);
