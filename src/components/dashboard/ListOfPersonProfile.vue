<template>
  <div class="table-container">
    <b-table striped hover show-empty head-variant="light" :items="items"  :fields="fields" @row-clicked="showDetailPersonProfile">
      <template v-slot:empty="scope" class="text-center">
        <div class="text-center">
          <b-spinner small variant="primary" label="Spinning" v-if="is_loading"></b-spinner>
          <span v-if="!is_loading">There are no person profile to show</span>
        </div>
      </template>
      <template v-slot:cell(index)="data">
        {{ data.index + 1 }}
      </template>
      <template v-slot:cell(actions)="row">
        <b-button variant="info" size="sm" @click="editPersonProfile(row.item.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" size="sm" @click="deletePersonProfile(row.item.id)" class="mr-2">
          Delete
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
  import profileService from '../../services/profileService.js'

  export default {
    data() {
      return {
        fields: [{ key: 'index', label: '#' }, { key: 'id', label: 'User ID' }, 'first_name', 'last_name', 'email', 'username', 'actions'],
        items: [],
        is_loading: false
      }
    },
    beforeMount() {
      this.is_loading = true;
      profileService.getList()
        .then((response) => {
          this.items = response.data;
        })
        .finally(() => {
          this.is_loading = false;
        })
    },
    methods: {
      showDetailPersonProfile(row) {
        this.$router.push({ name: 'detail-person-profile', params: { id: row.id }})
      },
      editPersonProfile(id) {
        this.$router.push({ name: 'edit-person-profile', params: { id }})
      },
      deletePersonProfile(id) {
        this.$bvModal.msgBoxConfirm('Are you sure you want to delete person profile with User ID ' + id + '?')
          .then(value => {
            if (value === true) {
              profileService.delete(id)
                .then(() => {
                  profileService.getList()
                    .then((response2) => {
                      this.items = response2.data;
                      if (this.$router.currentRoute.name !== 'list-person-profile') {
                        this.$router.push({ name: 'list-person-profile'});
                      }
                    })
                })
            }
          })
          .catch(() => {
              alert('error to delete person profile')
          })
        
      }
    }
  }
</script>

<style scoped>
  .table-container {
    overflow-x: auto;
    max-height: 50vh;
  }
</style>
