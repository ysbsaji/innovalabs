<template>
  <v-container class="fill-height py-8 ma-0">
    <v-responsive class="text-center fill-height pa-0 ma-0">
      <v-card class="bg-bg my-4" flat="">
        <v-card-text
          class="d-flex text-left pa-0 ma-0 font-weight-black text-overline"
        >
          <v-icon class="text-primary">mdi-clipboard-text-outline</v-icon>
          <div class="mx-2 my-2">Form Template</div>
        </v-card-text>
      </v-card>
      <DataTableComponent
        :btnTitle="`Add`"
        :isBtnNeeded="true"
        @updateData="updateData"
        :items="formData"
        :headers="headers"
        :isSearchNeeded="true"
        :itemsPerPage="5"
      />
      <v-row justify="center">
        <v-dialog v-model="formTemplateDialog" max-width="800">
          <FormTemplateComponent
            :references="formReferences"
            ref="formValidation"
            :model="templateObj"
          />
        </v-dialog>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import DataTableComponent from "@/components/DataTableComponent.vue";
import FormTemplateComponent from "@/components/FormTemplateComponent.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      formTemplateDialog: false,
      dateMenu: false,
      loading: false,
      templateObj: {
        PERSON_DOB: null,
        PERSON_NAME: "",
        IS_PERSON_MINOR: false,
      },
      dataLists: [],
      headers: [
        {
          title: "Person Name",
          align: "center",
          value: "PERSON_NAME",
          sortable: true,
        },
        {
          title: "Is Person Minor",
          align: "center",
          value: "IS_PERSON_MINOR",
          sortable: true,
        },
        {
          title: "Person DOB",
          align: "center",
          value: "PERSON_DOB",
          sortable: true,
        },
      ],
    };
  },
  components: {
    DataTableComponent,
    FormTemplateComponent,
  },

  computed: {
    ...mapGetters(["formType", "formData"]),
    formReferences() {
      return {
        title: "Form Template",
        blocks: [
          {
            token: "PERSON_NAME",
            type: this.formType.TEXT,
            md: 6,
            sm: 12,
            lg: 6,
            xl: 6,
            props: {
              title: "Enter your name",
              required: true,
              placeholder: "e.g. John Doe",
            },
          },
          {
            token: "IS_PERSON_MINOR",
            type: this.formType.CHECKBOX,
            md: 6,
            sm: 12,
            lg: 6,
            xl: 6,
            props: {
              title: "Is the current person minor?",
              default: false,
            },
          },
          {
            token: "PERSON_DOB",
            type: this.formType.DATEPICKER,
            dateMenu: this.dateMenu,
            md: 6,
            sm: 12,
            lg: 6,
            xl: 6,
            props: {
              title: "Enter your BOD",
              required: "IS_PERSON_MINOR",
              placeholder: "e.g. 01/01/2000",
            },
          },
        ],
        buttons: [
          {
            name: "CANCEL",
            color: "secondary",
            textColor: "white",
            label: "CANCEL",
            click: () => this.closeDialog(),
            is_show: true,
          },
          {
            name: "SUBMIT",
            color: "primary",
            textColor: "white",
            label: "SUBMIT",
            click: () => this.saveUpdateHandler(),
            loading: this.loading,
            is_show: true,
          },
        ],
      };
    },
  },
  methods: {
    updateData(data) {
      data === "add" && this.addData();
    },
    addData() {
      this.formTemplateDialog = true;
    },
    async saveUpdateHandler() {
      const { valid } = await this.$refs.formValidation.$refs.validateForm.validate()
      if (valid) {
        this.loading = true;
        this.dataLists.push(this.templateObj);
        const data = JSON.parse(JSON.stringify(this.dataLists));
        this.$store.dispatch("setFormData", data);
        this.loading = false;
        this.templateObj = {
          PERSON_DOB: null,
          PERSON_NAME: "",
          IS_PERSON_MINOR: false,
        };
        this.formTemplateDialog = false;
      }
    },
    closeDialog() {
      this.$refs.formValidation.$refs.validateForm.resetValidation()
      this.formTemplateDialog = false;
    },
  },
};
</script>

<style>
</style>
