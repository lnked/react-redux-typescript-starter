export type UiProps = {
  isError: boolean;
  isLoading: boolean;
};

export type ItemProps = {
  ui: UiProps;
  data: unknown;
};

export type StateProps = {
  items: ItemProps;
  count: ItemProps;
  item: ItemProps;
};

const ui: UiProps = {
  isError: true,
  isLoading: true,
};

export const initialState: StateProps = {
  items: {
    ui,
    data: [],
  },
  count: {
    ui,
    data: [],
  },
  item: {
    ui,
    data: {},
  },
};
