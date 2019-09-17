<template>
  <div>
    <b-navbar toggleable="md" type="light">
      <b-navbar-toggle target="nav-collapse" class="ml-auto my-2 mr-2"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-container fluid>
          <b-row>
              <b-col xl="2" lg="3" md="3" class="sidebar fixed-top">
                <div class="text-center pt-3 pb-2">
                  <b-navbar-brand to="/">Person Profile App</b-navbar-brand>
                </div>

                <b-navbar-nav class="flex-column">
                  <b-nav-item to="/dashboard">Dashboard</b-nav-item>
                  <b-nav-item to="/dashboard/person-profile">Person Profile</b-nav-item>
                  <b-nav-item to="/">Logout</b-nav-item>
                </b-navbar-nav>
              </b-col>
              <b-col xl="10" lg="9" md="9" class="top-navbar ml-auto">
                <b-row>
                  <b-col class="ml-auto text-right pt-2">
                    <img src="../assets/photo.jpg" height="38px" class="rounded-circle" alt="avatar"/>
                  </b-col>
                </b-row>
              </b-col>
          </b-row>
        </b-container>
      </b-collapse>
    </b-navbar>

    <b-container fluid>
        <b-row>
            <b-col xl="10" lg="9" md="9" class="ml-auto content">
                <router-view></router-view>
            </b-col>
        </b-row>
    </b-container>


  </div>
</template>

<style scoped>
.navbar {
	padding: 0;
}

.sidebar {
  height: 100vh;
  background-color: #eee;
}

.nav-item {
  transition: all .3s;
  padding: 4px 0;
  margin-top: 5px;
}

.nav-item:hover {
  background-color: #ddd;
  border-radius: 3px;
}

.top-navbar {
    position: fixed;
    right: 0;
    background-color: #ddd;
    z-index: 9;
    height: 55px;
}

.content {
    padding-top: 85px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
}

@media (max-width: 768px) {  
  .sidebar {
    position: static;
    height: auto;
  }

  .top-navbar {
    display: none;
  }

  .content {
      padding-top: 0;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
