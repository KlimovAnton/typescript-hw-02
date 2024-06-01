import { ImageCardProps } from "../../types";

import { FC } from "react";

export const ImageCard: FC<ImageCardProps> = ({ img: {
    alt_description,
    urls: { small, regular },
  }, onClick }) => {
    return (
        <div>
            <img
                onClick={() => onClick(regular)}
                src={small}
                alt={alt_description} 
                width="290"
                height="290"
            />
        </div>
    )
}
