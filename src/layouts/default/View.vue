<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer border="0" v-model="navigationDrawer">
      <div class="d-flex justify-center my-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
          width="150"
          height="150"
          alt="Round 2"
          title="Round 2"
        />
      </div>
      <div
        class="d-flex justify-center text-primary font-weight-black text-overline "
      >
        Round 2
      </div>
      <v-list density="compact" nav class="my-6">
        <v-list-item
          v-for="(item, index) in menuList"
          :key="`menu-list${index}`"
          :prepend-icon="item.icon"
          :class="
            $route.fullPath == item.path ? 'bg-primary text-white' : 'bg-white'
          "
          :title="item.title"
          :to="item.path"
          value="home"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar title="" elevation="0">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click.stop="navigationDrawer = !navigationDrawer"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title class="text-primary font-weight-black text-overline"
        >Innovalabs Task</v-app-bar-title
      >
      <v-avatar size="36px" class="mx-3" variant="elevated">
        <v-img
          alt="Avatar"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
        ></v-img>
      </v-avatar>
      <div class="text-primary font-weight-black text-overline mr-3 ">Sajeeth Britto Y</div>
    </v-app-bar>

    <v-main
      class="d-flex bg-bg align-center justify-center"
      style="min-height: 300px"
    >
      <router-view />
    </v-main>
  </v-layout>
</template>
<script>
import menuList from "../../components/menu";
export default {
  data() {
    return {
      navigationDrawer: true,
      menuList: menuList,
    };
  },
};
</script>
