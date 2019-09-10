<template>
    <b-container>
        <h1 class="text-center mt-3 mb-3">Edit Profile</h1>
        <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" :label-cols-md="2" label="First Name:" label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="form.firstName"
                placeholder="Enter first name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" :label-cols-md="2" label="Last Name:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.lastName"
                placeholder="Enter last name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" :label-cols-md="2" label="Date of Birth:" label-for="input-3">
                <b-form-input
                id="input-3"
                type="date"
                v-model="form.date"
                placeholder="Enter date of birth"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" :label-cols-md="2" label="Gender:" label-for="input-4">
                <b-form-radio-group id="input-4" class="text-left" v-model="form.gender">
                    <b-form-radio value="Male">Male</b-form-radio>
                    <b-form-radio value="Female">Female</b-form-radio>
                </b-form-radio-group>
            </b-form-group>

            <b-form-group id="input-group-5" :label-cols-md="2" label="Nationality:" label-for="input-5">
                <b-form-input
                id="input-5"
                v-model="form.nationality"
                placeholder="Enter nationality"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-6" :label-cols-md="2" label="Upload Photo:" label-for="input-6">
                <b-form-file
                id="input-6"
                v-model="form.file"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                ></b-form-file>
            </b-form-group>

            <b-form-group id="input-group-7" :label-cols-md="2" label="Email address:" label-for="input-7">
                <b-form-input
                id="input-7"
                type="email"
                v-model="form.email"
                placeholder="Enter email"
                :state="successValidation.email"
                required
                ></b-form-input>
                <b-form-invalid-feedback :state="successValidation.email">
                    {{errorMessage.email}}
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-8" :label-cols-md="2" label="Phone Number:" label-for="input-8">
                <b-form-input
                id="input-8"
                v-model="form.phoneNumber"
                placeholder="Enter phone number"
                :state="successValidation.phoneNumber"
                required
                ></b-form-input>
                <b-form-invalid-feedback :state="successValidation.phoneNumber">
                    {{errorMessage.phoneNumber}}
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-9" :label-cols-md="2" label="Username:" label-for="input-9">
                <b-form-input
                id="input-9"
                v-model="form.username"
                placeholder="Enter username"
                :state="successValidation.username"
                required
                ></b-form-input>
                <b-form-invalid-feedback :state="successValidation.username">
                    {{errorMessage.username}}
                </b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-10" :label-cols-md="2" label="User ID:" label-for="input-10">
                <b-form-input
                id="input-2"
                v-model="form.userId"
                placeholder="Enter user id"
                required
                disabled
                ></b-form-input>
            </b-form-group>

            <b-form-group class="text-center mt-4">
                <b-button type="submit" variant="success">Save</b-button>
            </b-form-group>
        </b-form>
    </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
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
        },
        successValidation: {
          email: null,
          phoneNumber: null,
          username: null,
        },
        errorMessage: {}
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault();
        if (this.isFormDataValid()){
            this.$router.push({ name: 'result', params: { data: this.form } })
        }
      },
      isFormDataValid() {
        return this.validateEmail() && this.validatePhoneNumber() && this.validateUsername();
      },
      validateEmail() {
        let isValid = true;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
            this.successValidation.email = false;
            this.errorMessage.email = "Email format is invalid"
            isValid = false;
        } else {
            this.successValidation.email = null;
        }

        return isValid;
      },
      validatePhoneNumber() {
        let isValid = true;
        if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,7}$/.test(this.form.phoneNumber)) {
            this.successValidation.phoneNumber = false;
            this.errorMessage.phoneNumber = "Phone number format is invalid, phone number must be number and length must be 10-13"
            isValid = false;
        } else {
            this.successValidation.phoneNumber = null;
        }

        return isValid;
      },
      validateUsername() {
        let isValid = true;
        if (this.form.username.length < 6 || this.form.username.length > 20) {
            this.successValidation.username = false;
            this.errorMessage.username = "Username format is invalid, length must be 6-20"
            isValid = false;
        } else {
            this.successValidation.username = null;
        }

        return isValid;
      }
    }
  }
</script>