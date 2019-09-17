<template>
    <div style="background-color: #123">
    <b-navbar toggleable="md" type="light">
      <b-navbar-toggle target="nav-collapse" class="ml-auto my-2 mr-2"></b-navbar-toggle>
        
      <b-collapse id="nav-collapse" is-nav>
          <b-row>
              <b-col class="bg-dark" style="color: white;" lg="12">
                  Yuhu
              </b-col>
          </b-row>
          <b-row>
              <b-col xl="12" lg="12">
                <div class="text-center pt-3 pb-2">
                  <b-navbar-brand>Person Profile App</b-navbar-brand>
                </div>
                <b-navbar-nav class="flex-column">
                  <b-nav-item to="/create">Dashboard</b-nav-item>
                  <b-nav-item href="#">Person Profile</b-nav-item>
                  <b-nav-item href="#">Logout</b-nav-item>
                </b-navbar-nav>
              </b-col>
          </b-row>
      </b-collapse>
    </b-navbar>
    </div>
</template>

<style scoped>
.navbar {
    background-color: #eee;
    height: 100vh;
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

@media (max-width: 768px) {  
  .sidebar {
    position: static;
    height: auto;
  }

  .top-navbar {
    display: none;
  }
}
</style>
