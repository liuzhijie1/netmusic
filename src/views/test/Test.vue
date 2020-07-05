<template>
  <div>
      <button type="button" class="btn btn-danger">Action</button>
  </div>
</template>

<script>
import api from 'network/api.js';
export default {
    async created () {
        let data =await api.SearchMusic('海阔天空');
        console.log(data);
    },
}
</script>

<style>

</style>