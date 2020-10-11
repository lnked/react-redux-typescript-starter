export type CountProps = {
  count: number | string;
};

export type IDProps = {
  id: string;
};

export type SlugProps = {
  slug: string;
};

export type CategoryProps = {
  category: string;
};

export type ItemProps = Partial<SlugProps> & Partial<IDProps> & Partial<CategoryProps>;
