<template>
  <div class="bg-white pa-12">
    <form @submit.prevent="submitForm">
      <div v-for="block in blocks" :key="block.token" class="py-2">
        <component
          :is="block.type"
          :block="block"
          :formData="formData"
          :showError="showError"
        ></component>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import text from "../components/TextComponent.vue";
import checkbox from "../components/CheckboxComponent.vue";
import date from "../components/DateComponent.vue";
export default {
  components: {
    text,
    checkbox,
    date,
  },
  data() {
    return {
      showError: false,
      formData: {},
      blocks: [
        {
          token: "PERSON_NAME",
          type: "text",
          props: {
            title: "Enter your name",
            required: true,
            placeholder: "e.g. John Doe",
          },
        },
        {
          token: "IS_PERSON_MINOR",
          type: "checkbox",
          props: {
            title: "Is the current person minor?",
            default: false,
          },
        },
        {
          token: "PERSON_DOB",
          type: "date",
          props: {
            title: "Enter your BOD",
            required: "IS_PERSON_MINOR",
            placeholder: "e.g. 01/01/2000",
          },
        },
      ],
    };
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        console.log("Form Data:", this.formData);
      } else {
        console.log("Form validation failed.");
      }
    },
    validateForm() {
      var result = true;
      this.blocks.forEach((block) => {
        if (block.props.required && !this.formData[block.token]) {
          this.showError = true;
          result = false;
        }
      });
      if (!result) this.showError = true;
      return result;
    },
  },
};
</script>

<style>
form {
  min-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.custom-input-css {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.checkbox {
  width: auto !important;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: #fff !important;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
