<template>
  <div>
    <label>{{ block.props.title }}</label>
    <input
      type="date"
      v-model="formData[block.token]"
      :placeholder="block.props.placeholder"
      class="custom-input-css"
      />
      <!-- :required="isDateRequired(block)" -->
    <span v-if="showErrorStatement()" class="text-red">Field is required.</span>
  </div>
</template>

<script>
export default {
  props: ["block", "formData", "showError"],
  methods: {
    isDateRequired() {
      return this.block.props.required && this.formData[this.block.props.required];
    },
    showErrorStatement() {
      return !this.formData[this.block.token] && this.isDateRequired(this.block) && this.showError;
    }
  },
};
</script>

<style>
</style>
