<template>
  <v-card>
    <v-card-text>
      <v-card-text>
        <v-row class="justify-end">
          <v-col cols="12" lg="3" md="4" sm="12" v-if="isFilterNeeded">
            <v-select
              v-model="filter"
              :items="filterOptions"
              density="compact"
              variant="solo"
              label="Select Fitler"
            ></v-select>
          </v-col>
          <v-col cols="12" lg="3" md="4" sm="12" v-if="isSearchNeeded">
            <v-text-field
              v-model="search"
              density="compact"
              label="Search"
              append-inner-icon="mdi-magnify"
              variant="solo"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="2" md="4" sm="12" v-if="isBtnNeeded">
            <v-btn
              class="text-white bg-primary"
              prepend-icon="mdi-plus"
              @click="addData"
              >{{ btnTitle }}</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
      <v-data-table
        :items="items"
        :items-per-page="itemsPerPage"
        :items-per-page-options="itemsPerPageOptions"
        :search="search"
        :hover="true"
        :headers="headers"
      >
        <template v-slot:[`item.IS_PERSON_MINOR`]="{ item }">
          <v-chip variant="solo" class="bg-green text-white" size="small">{{
            item.IS_PERSON_MINOR
          }}</v-chip>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      filter: "",
    };
  },
  props: {
    headers: {
      type: Object,
      default: [],
    },
    items: {
      type: Object,
      default: [],
    },
    isSearchNeeded: {
      type: Boolean,
      default: false,
    },
    itemsPerPage: {
      type: Number,
      default: 5,
    },
    itemsPerPageOptions: {
      type: Object,
      default: [
        { value: 5, title: "5" },
        { value: 10, title: "10" },
        { value: 25, title: "25" },
        { value: 50, title: "50" },
        { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" },
      ],
    },
    isFilterNeeded: {
      type: Boolean,
      default: false,
    },
    filterOptions: {
      type: Object,
      default: [],
    },
    btnTitle: {
      type: String,
      default: "ADD",
    },
    isBtnNeeded: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    filter(val) {
      val && this.$emit("updateData", val);
    },
  },
  methods: {
    addData() {
      this.$emit("updateData", "add");
    },
  },
};
</script>
