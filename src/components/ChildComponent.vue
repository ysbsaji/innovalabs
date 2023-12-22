<template>
  <div>
    <h2 class="text-secondary">Child Component</h2>
    <p class="my-6">{{ message }}</p>
    <v-btn @click="notifyParent" class=" bg-primary text-white">Notify Parent</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  methods: {
    notifyParent() {
      this.$emit('notifyChild', 'Message From Child Component!');
    },
  },
};
</script>
