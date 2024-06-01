type Urls = {
    small: string;
    regular: string;
  };
  
export type Images = {
alt_description: string;
urls: Urls;
id: string;
};

export type Status = true | false;

export type ImageCardProps = {
  img: Images;
  onClick: (regular: string) => void;
};

export type PropsImageGallery = {
  images: Images[];
  onClick: (regular: string) => void;
};

export type ImageModalProps = {
  image: string;
  state: boolean;
  close: () => void;
};

export type LoadMoreBtnProps = {
  addArticle: () => void;
};

export type SearchBarProps = {
  onSearch: (data: string) => void;
};

export type Value = {
  query: string;
}