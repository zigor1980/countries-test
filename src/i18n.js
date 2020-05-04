import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      countries: 'Countries',
      searchByName: 'Search by name',
      searchByCode: 'Search by code',
      searchByCurrency: 'Search by currency',
      search: 'Search',
      fullText: 'Full text',
      alpha2Code: 'Code',
      population: 'Population',
      latlng: 'Lating',
      demonym: 'Demonym',
      timezones: 'Time Zones',
      numericCode: 'Numeric Code',
      currencies: 'Currencies',
      languages: 'Languages',
      regionalBlocs: 'Regional Blocs',
      cioc: 'cioc',
      capital: 'Capital',
      borders: 'Borders',
      nativeName: 'Native Name',
      emptyCurrentCountry: 'No country for display',
      emptyCountries: 'Countries list is empty',
      notFound: 'Not found!',
      error: 'Error!',
    },
  },
  ru: {
    translation: {
      countries: 'Страны',
      searchByName: 'Поиск по имени',
      searchByCode: 'Поиск по коду',
      searchByCurrency: 'Поиск по валюте',
      alpha2Code: 'Код',
      capital: 'Столица',
      population: 'Население',
      latlng: 'Координаты',
      timezones: 'Часовые поясы',
      numericCode: 'Числовой код',
      currencies: 'Валюта',
      languages: 'Языки',
      regionalBlocs: 'Регионы',
      search: 'Поиск',
      cioc: 'cioc',
      fullText: 'Полное имя',
      demonym: 'Этнохороним',
      borders: 'Границы',
      nativeName: 'Исконное название',
      emptyCurrentCountry: 'Страна не выбрана',
      emptyCountries: 'Список стран пуст',
      notFound: 'Ничего не найдено!',
      error: 'Ошиюка!',
    },
  },
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem('locale') || 'ru',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
