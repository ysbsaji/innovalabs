<template>
  <v-card>
    <v-card-text>
      <div>
        <h1 class="text-primary">Parent Component</h1>
        <ChildComponent
        class="my-6"
          :message="parentMessage"
          @notifyChild="handleNotifyChild"
        />
        <p class="text-primary">Received from child: {{ childResponse }}</p>
      </div>
    </v-card-text>
  </v-card>
</template>

  <script>
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  data() {
    return {
      parentMessage: "Message from parent component!",
      childResponse: "",
    };
  },
  methods: {
    handleNotifyChild(response) {
      this.childResponse = response;
    },
  },
};
</script>
