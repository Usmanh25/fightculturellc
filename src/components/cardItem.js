import React from "react";
import Link from 'next/link'

function CardItem(props) {
    return (
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <a>
                        <figure className="cards__item__pic-wrap" data-category={props.label}>
                            <img src={props.src} alt="Sample-Pic" className="cards__item__img"/>
                        </figure>
                    </a>
                </Link>
            </li>
    )
}
export default CardItem