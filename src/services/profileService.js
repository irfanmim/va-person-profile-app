import BASE_API_URL from './config.js'
import axios from 'axios'

export default {
    getList() {
      return axios.get(BASE_API_URL + "/profile/")
        .catch((error) => {
          throw new Error(error);
        });
    },
    getDetail(id) {
      return axios.get(BASE_API_URL + "/profile/" + id + "/")
        .catch((error) => {
          throw new Error(error);
        });
    },
    create(data) {
      let formData = new FormData();
      formData.append('first_name', data.first_name)
      formData.append('last_name', data.last_name)
      formData.append('date', data.date)
      formData.append('gender', data.gender)
      formData.append('nationality', data.nationality)
      formData.append('email', data.email)
      formData.append('phone_number', data.phone_number)
      formData.append('username', data.username)
      
      if (data.photo == null) {
        delete data.photo
      } else {
        formData.append('photo', data.photo)
      }

      return axios.post(BASE_API_URL + "/profile/", formData)
        .catch((error) => {
          throw new Error(error);
        });
    },
    update(data) {
      let formData = new FormData();
      formData.append('first_name', data.first_name)
      formData.append('last_name', data.last_name)
      formData.append('date', data.date)
      formData.append('gender', data.gender)
      formData.append('nationality', data.nationality)
      formData.append('email', data.email)
      formData.append('phone_number', data.phone_number)
      formData.append('username', data.username)
      
      if (data.photo == null) {
        delete data.photo
      } else {
        formData.append('photo', data.photo)
      }

      return axios.put(BASE_API_URL + "/profile/" + data.user_id + "/", formData)
        .catch((error) => {
          throw new Error(error);
        });
    },
    delete(id) {
      return axios.delete(BASE_API_URL + "/profile/" + id + "/")
        .catch((error) => {
          throw new Error(error);
        });
    },
  };