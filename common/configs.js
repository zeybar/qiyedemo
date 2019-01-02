const env = process.env.NUXT_ENV_PAGE;

const pageApi = {
  dev: 'dev',
  test: '2',
  rc: '3',
  prod: '4',
};
class Configs {
  static get DEFAULT() {
    return {
      ENV: env,
      API: pageApi[env],
      DOMAIN_URL: '',
    };
  }
}
export default Configs;
