<template>
    <div>
        <h2>Detail</h2>
        <b-spinner small variant="primary" label="Spinning" v-if="is_loading"></b-spinner>
        <b-row class="mt-3" v-if="!is_loading">
            <b-col sm="12" md="3">
                <img v-bind:src="form.photo" style="width: 100%"/>
            </b-col>
            <b-col sm="12" md="8">
                <div class="ml-2 mt-2">
                <h4>{{form.first_name + " " + form.last_name}}</h4>
                <h5 class="mb-4">{{form.email}}</h5>

                <h6>User ID: {{ form.user_id }}</h6>
                <h6>Username: {{form.username}}</h6>
                <h6>Nationality: {{form.nationality}}</h6>
                <h6>Gender: {{form.gender}}</h6>
                <h6>Date of Birth: {{form.date}}</h6>
                <h6>Phone Number: {{form.phone_number}}</h6>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  import BASE_API_URL from '../../services/config.js'
  import profileService from '../../services/profileService.js'

  export default {
    data() {
      return {
        form: {
          user_id: 0,
          first_name: '',
          last_name: '',
          date: '',
          gender: '',
          nationality: '',
          photo: '',
          email: '',
          phone_number: '',
          username: '',
        },
        is_loading: false
      }
    },
    beforeMount() {
      this.getData(this.$route.params.id)
    },
    methods: {
      getData(id) {
        this.is_loading = true;
        profileService.getDetail(id)
          .then((response) => {
            this.form.user_id = response.data.id;
            this.form.first_name = response.data.first_name;
            this.form.last_name = response.data.last_name;
            this.form.date = response.data.date;
            this.form.gender = response.data.gender;
            this.form.nationality = response.data.nationality;
            this.form.email = response.data.email;
            this.form.phone_number = response.data.phone_number;
            this.form.username = response.data.username;
            
            if (response.data.photo != null) {
              this.form.photo = BASE_API_URL + "/" + response.data.photo;
            } else {
              this.form.photo = BASE_API_URL + "/images/anonymous.jpg";
            }
          })
          .finally(() => {
            this.is_loading = false;
          })
      },
      editProfile(e) {
        e.preventDefault()
        this.$router.push({ name: 'edit', params: { data: this.form } })
      }
    },
    watch: {
      '$route.params.id': function() {
        this.getData(this.$route.params.id);
      }
    }
  }
</script>