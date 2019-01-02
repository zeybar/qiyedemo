<template>
  <main>
    <Header />
    <div>
      <nuxt />
    </div>
    <Footer />
  </main>
</template>

<script>
import Header from '~/components/Header1';
import Footer from '~/components/Footer1';
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>