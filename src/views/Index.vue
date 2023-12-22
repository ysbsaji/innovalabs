<template>
  <v-container class="fill-height py-8 ma-0">
    <v-responsive class="text-center fill-height pa-0 ma-0">
      <v-card class="bg-bg my-4" flat="">
        <v-card-text
          class="d-flex text-left pa-0 ma-0 font-weight-black text-overline"
        >
          <v-icon class="text-primary">mdi-account-circle-outline</v-icon>
          <div class="mx-2 my-2">Users</div>
        </v-card-text>
      </v-card>
      <DataTableComponent
        :items="userLists"
        :headers="headers"
        :isSearchNeeded="isSearchNeeded"
        :itemsPerPage="itemsPerPage"
        :itemsPerPageOptions="itemsPerPageOptions"
        :isFilterNeeded="isFilterNeeded"
        :filterOptions="filterOptions"
        @updateData="updateData"
      />
    </v-responsive>
  </v-container>
</template>

<script>
import DataTableComponent from "@/components/DataTableComponent.vue";
export default {
  data() {
    return {
      storedUsers: [],
      filterOptions: [],
      headers: [
        { title: "ID", align: "center", value: "id", sortable: true },
        { title: "Name", align: "center", value: "name", sortable: true },
        {
          title: "User Name",
          align: "center",
          value: "username",
          sortable: true,
        },
        { title: "Email", align: "center", value: "email", sortable: true },
        {
          title: "Phone Number",
          align: "center",
          value: "phone",
          sortable: true,
        },
        { title: "Website", align: "center", value: "website", sortable: true },
      ],
      userLists: [],
      isSearchNeeded: true,
      itemsPerPage: 5,
      itemsPerPageOptions: [
        { value: 5, title: "5" },
        { value: 10, title: "10" },
        { value: 25, title: "25" },
        { value: 50, title: "50" },
        { value: -1, title: "$vuetify.dataFooter.itemsPerPageAll" },
      ],
      isFilterNeeded: true,
    };
  },
  components: {
    DataTableComponent,
  },
  mounted() {
    this.getAllUserList();
  },
  methods: {
    updateData(data) {
      if (data !== "ALL") {
        this.userLists = this.storedUsers.filter(val => val.id === data)
      } else {
        this.userLists = this.storedUsers
      }
    },
    async getAllUserList() {
      const apiPath = "users";
      const data = await this.$store.dispatch("getApi", { apiPath });
      this.userLists = JSON.parse(JSON.stringify(data));
      this.storedUsers = JSON.parse(JSON.stringify(data));
      this.filterOptions = this.userLists.map((x) => x.id);
      this.filterOptions.unshift("ALL");
    },
  },
};
</script>
<style scoped>
/*  */
</style>
