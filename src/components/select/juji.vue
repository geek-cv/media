<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in messages" :key="item._id">
        {{ index + 1 }}.{{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    axios.getAllMess().then(response => {
        //成功了就把data.result里的数据放入users，在页面展示
        this.messages = response.data.result;
    });
  }
};
</script>

<style>
</style>
