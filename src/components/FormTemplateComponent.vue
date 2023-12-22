<template>
  <div>
    <v-card>
      <v-form ref="validateForm" autocomplete="off">
        <v-card-title primary-title class="pa-5" v-if="references.title">
          <h5>{{ references.title }}</h5>
        </v-card-title>
        <v-divider v-if="references.title"></v-divider>
        <v-row class="pa-5">
          <template v-for="(prop, index) in references.blocks" :key="index">
            <v-col
              cols="12"
              :md="prop?.md || 12"
              :lg="prop?.lg || 12"
              :sm="prop?.sm || 12"
              :xl="prop?.xl || 12"
              :class="prop?.class"
              :style="prop?.style"
              class="my-0 py-0"
            >
              <template
                v-if="
                  [formType.TEXT, formType.NUMBER, formType.PASSWORD].includes(
                    prop.type
                  )
                "
              >
                <v-text-field
                  v-model="model[prop.token]"
                  :label="prop.props.title"
                  :id="prop.token"
                  :ref="prop.token"
                  :disabled="prop.disabled"
                  :type="prop.type"
                  :rules="
                    prop.props.required
                      ? [(v) => !!v || `${prop.token} is required`]
                      : null
                  "
                  :placeholder="prop.props.placeholder"
                  density="compact"
                  :required="prop.props.required"
                  variant="solo"
                ></v-text-field>
              </template>
              <template v-else-if="prop.type === formType.CHECKBOX">
                <v-checkbox
                  :label="prop.props.title"
                  :id="prop.token"
                  color="primary"
                  v-model="model[prop.token]"
                  density="compact"
                  variant="solo"
                >
                </v-checkbox>
              </template>
              <template v-else-if="prop.type === formType.DATEPICKER">
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-text-field
                      v-model="model[prop.token]"
                      :label="prop.props.title"
                      v-bind="props"
                      density="compact"
                      variant="solo"
                      :placeholder="prop.props.placeholder"
                      :required="model[prop?.props?.required]"
                      :rules="
                        model[prop?.props?.required]
                          ? [(v) => !!v || 'Date is required']
                          : []
                      "
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    color="primary"
                    v-model="date"
                    @click="
                      model[prop.token] = useDate.format(date, 'keyboardDate')
                    "
                  ></v-date-picker>
                </v-menu>
              </template>
            </v-col>
          </template>
        </v-row>
        <v-divider></v-divider>
        <v-card-actions v-if="references.buttons">
          <v-spacer></v-spacer>
          <v-row class="justify-end mx-4">
            <template v-for="(button, index) in references.buttons">
              <v-btn
                :key="index"
                :loading="button.loading"
                :id="button.name"
                v-if="button.is_show"
                @click="button.click"
                :class="`bg-${button.color} text${textColor}`"
                :disabled="button.disabled"
              >
                {{ button.label }} </v-btn
              >&nbsp;
            </template>
          </v-row>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { useDate } from "vuetify";

export default {
  data() {
    return {
      date: null,
      useDate: useDate(),
      dateValidation: [(v) => !!v || "Date is required"],
    };
  },
  props: {
    references: {
      type: Object,
    },
    model: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["formType"]),
  },
};
</script>

<style>
</style>
