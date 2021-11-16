<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/Navbar">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">

        <a class="nav-link" href="/link">Link</a>

      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>

    <a class="btn btn-outline-danger my-2 my-sm-0" style="margin-left: 830px" v-if="logout === null" href="/login">
    Login</a>

    <a
    class="btn btn-outline-danger my-2 my-sm-0"
       style="margin-left: 830px"
       v-if="logout !== null"
       @click="out"
       href="/">
       Logout</a>


  </div>
</nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "App",
computed: {
  logout() {
    return JSON.parse(sessionStorage.getItem("USER_DATA"));
  },
},
methods: {
  out() {
    sessionStorage.clear();
  },
},
}
</script>