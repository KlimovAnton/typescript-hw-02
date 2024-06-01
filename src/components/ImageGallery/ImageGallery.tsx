import { ImageCard } from "../ImageCard/ImageCard"
import css from "./ImageGallery.module.css"

import { FC } from "react"
import { PropsImageGallery } from "../../types"

export const ImageGallery: FC<PropsImageGallery> = ({ images, onClick }) => {
    return (
        <ul className={css.list}>
            {images.map((img) => (
                <li key={img.id}>
                    <ImageCard img={img} onClick={onClick} />
                </li>
            ))}
            
        </ul>
    )
}