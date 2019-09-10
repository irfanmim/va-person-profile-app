<template>
  <b-container>
    <h1 class="text-left">Profile Page</h1>
    <b-row class="mt-3">
      <b-col sm="12" md="3">
        <img src="../assets/photo.jpg" style="width: 100%"/>
      </b-col>
      <b-col sm="12" md="8">
        <div class="ml-2 mt-2">
          <h4>{{form.firstName + " " + form.lastName}}</h4>
          <h5 class="mb-4">{{form.email}}</h5>

          <h6>User ID: {{form.userId}}</h6>
          <h6>Username: {{form.username}}</h6>
          <h6>Nationality: {{form.nationality}}</h6>
          <h6>Gender: {{form.gender}}</h6>
          <h6>Date of Birth: {{form.date}}</h6>
          <h6>Phone Number: {{form.phoneNumber}}</h6>
        </div>
      </b-col>
      <b-col sm="12" md="1" class="text-center mt-3">
        <b-button @click="editProfile" size="sm">Edit</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          userId: 1,
          firstName: 'Muhamad Irfan',
          lastName: 'Maulana',
          date: '2000-10-18',
          gender: 'Male',
          nationality: 'Nationality',
          file: null,
          email: 'example@gmail.com',
          phoneNumber: '081237891232',
          username: 'username',
        },
      }
    },
    beforeMount() {
      if (this.$route.params.data !== undefined) {
        this.form = {
          userId: this.$route.params.data.userId,
          firstName: this.$route.params.data.firstName,
          lastName: this.$route.params.data.lastName,
          date: this.$route.params.data.date,
          gender: this.$route.params.data.gender,
          nationality: this.$route.params.data.nationality,
          file: this.$route.params.data.file,
          email: this.$route.params.data.email,
          phoneNumber: this.$route.params.data.phoneNumber,
          username: this.$route.params.data.username,
        }
      }
    },
    methods: {
      editProfile(e) {
        e.preventDefault()
        this.$router.push({ name: 'edit', params: { data: this.form } })
      }
    }
  }
</script>