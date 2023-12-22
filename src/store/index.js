import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    FORM_TYPE: {
      TEXT: 'text',
      CHECKBOX: 'checkbox',
      DATE: 'date',
      PASSWORD: 'password',
      NUMBER: 'number',
      DATEPICKER: 'datepicker'
    },
    formData: []
  },
  actions: {
    async postApi({ state }, { inputData, apiPath }) {
      return new Promise(async (resolve, reject) => {
        let form = inputData
        const url = state.baseUrl += apiPath
        axios
          .post(apiPath, form)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async updateApi({ state }, { inputData, apiPath }) {
      return new Promise(async (resolve, reject) => {
        let form = inputData
        state.baseUrl += apiPath
        axios
          .put(apiPath, form)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async deleteApi({ state }, { inputData, apiPath }) {
      return new Promise(async (resolve, reject) => {
        let form = inputData
        state.baseUrl += apiPath
        axios
          .delete(apiPath, form)
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async getApi({ state }, { inputData, apiPath }) {
      return new Promise(async (resolve, reject) => {
        const url = `${state.baseUrl}${apiPath}`
        axios
          .get(url)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    async setFormData({ state }, payload) {
      state.formData = payload
    },
  },
  getters: {
    formType: (state) => state.FORM_TYPE,
    formData: (state) => state.formData
  }
});
