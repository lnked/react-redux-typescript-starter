// const x = 'Categories=All&Search=Filus';

export const parseQueryString = (str: string) =>
  str.split('&').reduce((acc, el) => {
    const [key, value] = el.split('=');

    return {
      ...acc,
      [key]: value,
    };
  }, {});

// const params = parseQueryString(x);

// console.log(params); // { Categories: "All", Search: "Filus" }

// const values = Object.values(params);

// console.log(values); // [ "All", "Filus" ]
