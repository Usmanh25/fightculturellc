import React from "react";
import Link from 'next/link'
import Image from 'next/image'
function CardItem(props) {
    return (
            <li className="cards__item">
                <Link className="cards__item__link" href={props.path}>
                    <a>
                        <figure className="cards__item__pic-wrap" data-category={props.label}>
                            <div style={{width: '100px', height: '100px', display: 'flex', position: 'relative'}}>
                                <Image 
                                    src={'/' + (props.src)} 
                                    label={props.label}
                                    path={props.path}
                                    layout='fill' 
                                    alt="Nav-Card-Image" 
                                    className="cards__item__img"
                                    />
                            </div>
                        </figure>
                    </a>
                </Link>
            </li>
    )
}
export default CardItem