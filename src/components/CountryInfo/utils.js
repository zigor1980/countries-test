export const FORMATTER_BY_KE = {
  languages: (value) => value.map(({ name }) => name).join(', '),
  currencies: (value) => value.map(({ name, code }) => `${name}(${code})`).join(', '),
  regionalBlocs: (value) => value.map(({ name, acronym }) => `${name}(${acronym})`).join(', '),
  borders: (value) => value.join(', '),
  callingCodes: (value) => value.join(', '),
  latlng: (value) => JSON.stringify(value),
  timezones: (value) => value.join(', '),
  alpha2Code: (value, { alpha3Code }) => `${value}/${alpha3Code}`,
};

export function fieldFormatter(key, value) {
  const formatter = FORMATTER_BY_KE[key];

  if (!formatter) {
    return value[key];
  }

  return formatter(value[key], value);
}
