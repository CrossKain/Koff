import { Logo } from "../../components/Logo/Logo"
import { Container } from "../Container/Container"
import s from "./Footer.module.scss"


export const Footer = () => (
<footer className={s.footer}>
<Container className={s.container}>
<div className={s.logo}>
<Logo/>
</div>


</Container>
</footer>
)