class i18n {
  get(locale) {
    return {
      App: {
        Common: require('./' + locale + '/App/Common'),
        Header: require('./' + locale + '/App/Header'),
        Footer: require('./' + locale + '/App/Footer'),
      },
    };
  }
}

export default new i18n();
