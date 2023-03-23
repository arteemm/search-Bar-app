type Card = {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
  url_m: string;
  height_m: number;
  width_m: NumberConstructor;
};

type Value = {
  value: string;
  isDisabled: boolean;
  arrCard: Card[];
};

type Photos = {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: Card[];
};

type ResponseCard = {
  photos: Photos;
  stat: string;
};

export type { ResponseCard };
