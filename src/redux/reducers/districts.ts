const initialState = {
  coords: {
    zoom: 12,
    center: [55.752639, 37.623910],
  },
  points: [],
  region: {},
  current: {},
  districts: [],
  loading: false,
  hasErrors: false,
};

const regionReducer = payload => {
  const { objects, ...restProps } = payload;

  const points: any = [];

  objects && objects.forEach(({ list }) => {
    list.forEach(({ name, address }) => {
      if (address.length) {
        address.forEach(({ coords }) => {
          points.push({ name, coords });
        });
      } else {
        points.push({ name, coords: address.coords });
      }
    });
  });

  return {
    points,
    region: {
      ...restProps,
    },
  };
};

const currentReducer = payload => {
  const { zoom, coords } = (payload && payload.address) || {};

  return {
    ...(zoom && coords && coords.length && {
      coords: {
        zoom,
        center: coords,
      },
    } || {}),
    current: payload,
  };
};

export default function districts(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DISTRICTS':
      return {
        ...state,
        districts: [
          ...state.districts,
          ...action.payload.districts,
        ],
      };

    case 'CHANGE_COORDS':
      return {
        ...state,
        coords: action.payload.coords,
      };

    case 'CHANGE_REGION':
      return {
        ...state,
        ...regionReducer(action.payload.region),
      };

    case 'CHANGE_CURRENT':
      return {
        ...state,
        ...currentReducer(action.payload.current),
      };

    default:
      return state;
  }
}
