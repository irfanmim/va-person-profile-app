<template>
    <div>
        <b-row>
          <b-col>
            <h2 class="mb-3">List of Person Profile</h2>
          </b-col>
          <b-col class="text-right">
            <b-button variant="primary" size="sm" :to="{ name: 'add-person-profile'}">Add Person Profile</b-button>
          </b-col>
        </b-row>

        <ListOfPersonProfile />

        <section class="mt-4">
          <router-view></router-view>
        </section>
    </div>
</template>

<script>
  import ListOfPersonProfile from '../components/dashboard/ListOfPersonProfile.vue' 

  export default {
    components: {
      ListOfPersonProfile
    },
  }
</script>