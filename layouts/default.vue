<template>
  <div>
    <main class="wrapper">
      <Header/>
      <section class="container">
        <nuxt />
      </section>
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  components: { Header }
}
</script>

