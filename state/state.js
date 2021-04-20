const { atom, selector } = require('recoil');

const nameState = atom({
  key: 'name1State',
  default: '',
});

const charState = selector({
  key: 'charState',
  get: ({ get }) => {
    const name = get(nameState);
    return name.length;
  },
});

export { nameState, charState };
