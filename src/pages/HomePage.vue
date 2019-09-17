<template>
    <div>
        <Header />
        <HomeContent />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import HomeContent from '../components/HomeContent.vue'

export default {
  name: 'HomePage',
  components: {
    Header,
    HomeContent
  }
}
</script>