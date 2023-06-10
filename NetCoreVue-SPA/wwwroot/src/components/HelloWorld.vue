<template>
    <div>
        <h1>{{ message }}</h1>
        <input v-model="message" type="text" />
    </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello from Vue!'
    }
  }
};
</script>