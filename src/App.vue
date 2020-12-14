<template>
    <div class="container">
        <BlHeader></BlHeader>
        <router-view></router-view>
        <BlFooter></BlFooter>
    </div>
</template>

<script>
import BlHeader from './components/BlHeader'
import BlFooter from './components/BlFooter'
export default {
  components: {
    BlHeader,
    BlFooter
  }
}
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
  }
  .container{
    border: 1px solid #41B883;
    margin: 0 auto;
    width: 1000px;
    min-height: 200px;
    box-shadow: 0px 0px 35px rgba(65, 184, 131, 0.2);
  }
</style>
