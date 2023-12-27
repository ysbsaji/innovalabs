<template>
  <div>
    <label>{{ block.props.title }}</label>
    <input
      type="text"
      v-model="formData[block.token]"
      class="custom-input-css"
      :placeholder="block.props.placeholder"
      />
      <!-- :required="block.props.required" -->
    <span v-if="showErrorStatement()" class="text-red">Field is required.</span>
  </div>
</template>

<script>
export default {
  props: ["block", "formData", "showError"],
  methods: {
    showErrorStatement() {
      return this.showError && this.block.props.required && !this.formData[this.block.token]
    }
  }
};
</script>

<style>
</style>
