<template>
  <div>
    <label>
      <input type="checkbox" v-model="formData[block.token]" class="checkbox custom-input-css"/>
      {{ block.props.title }}
    </label>
  </div>
</template>

<script>
export default {
  props: ["block", "formData"],
};
</script>

<style>
</style>
