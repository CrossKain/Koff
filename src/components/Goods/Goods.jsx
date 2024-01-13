import { Container } from "../../views/Container/Container"
import { CardItem } from "../CardItem/CardItem"
import s from "./Goods.module.scss"

export const Goods = () =>(
    <section>
        <Container>
        <h2 className={`${s.title} visually-hidden`}>Список Товаров</h2>

        <ul className={s.list}>
            <li>
                <CardItem/>
            </li>
            <li>
                <CardItem/>
            </li>
            <li>
                <CardItem/>
            </li>
        </ul>
        </Container>
    </section>
)