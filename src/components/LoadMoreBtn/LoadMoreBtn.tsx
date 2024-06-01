import css from "./LoadMoreBtn.module.css";
import { FC } from "react";
import { LoadMoreBtnProps } from "../../types";

export const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ addArticle }) => {
    return (
        <div className={css.container}>
            <button className={css.button} onClick={addArticle} type="button">Load more articles</button>
        </div>
    )
}