const DEFAULT_STATE = {
  lang: localStorage.getItem('locale') || 'ru',
};

export default function reducer(state = DEFAULT_STATE, { type /* payload = {} */ }) {
  switch (type) {
    default: return state;
  }
}
