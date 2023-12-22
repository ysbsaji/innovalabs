<template>
  <v-container class="fill-height py-8 ma-0">
    <v-responsive class="text-center fill-height pa-0 ma-0">
      <v-card class="bg-bg my-4" flat="">
        <v-card-text
          class="d-flex text-left pa-0 ma-0 font-weight-black text-overline "
        >
          <v-icon class="text-primary">mdi-google-circles-communities</v-icon>
          <div class="mx-2 my-2">Component Communication</div>
        </v-card-text>
      </v-card>
      <ParentComponent />
    </v-responsive>
  </v-container>
</template>

<script>
import ParentComponent from "@/components/ParentComponent.vue";
export default {
  components: {
    ParentComponent,
  },
};
</script>

<style>
</style>
