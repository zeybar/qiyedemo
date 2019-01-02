<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">Link1</b-nav-item>
          <b-nav-item href="#">Link2</b-nav-item>
          <b-nav-item href="#">Link3</b-nav-item>
          <b-nav-item-dropdown text="Link4" extra-toggle-classes="nav-link-custom" left>
            <b-dropdown-item href="#">link4-1</b-dropdown-item>
            <b-dropdown-item href="#">link4-2</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <nav>
      <nuxt-link to="/">首页</nuxt-link>
      <nuxt-link to="/posts">列表</nuxt-link>
    </nav>
    <h2>Example headi1ng <b-badge>New</b-badge></h2>
    <div class="language">
      <p class="active-lang"
         @click="toggleLang">{{langs[lang].text}}</p>
      <ul class="lang"
          v-if="langShow">
        <li v-for="item in Object.keys(langs)"
            @click="setLang(item)"
            :key="item">{{langs[item].text}}</li>
      </ul>
    </div> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      lang: 'en_us',
      langShow: false,
      langs: {
        en_us: {
          lang: 'en_us',
          text: 'English',
        },
        ja_jp: {
          lang: 'ja_jp',
          text: '日本語',
        },
        zh_cn: {
          lang: 'zh_cn',
          text: '简体中文',
        },
      },
    };
  },
  methods: {
    toggleLang() {
      this.langShow = !this.langShow;
    },
    setLang(lang) {
      this.lang = lang;
      this.langShow = false;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 56px;
  nav {
    display: flex;
    justify-content: center;
    a {
      margin: 0 16px;
    }
  }
  .language {
    position: absolute;
    right: 12px;
    top: 4px;
  }
}
</style>