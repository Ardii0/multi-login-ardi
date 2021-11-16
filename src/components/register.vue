<template>
  <div class="a">
    <div class="kotak_login">
      <p class="tulisan_login">Silahkan Registrasi</p>
      <br />
      <form>
        <label>Username</label>
        <input
          type="text"
          name="username"
          v-model="username"
          class="form_login"
          placeholder="Username atau email .."
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          v-model="password"
          class="form_login"
          placeholder="Password .."
        /><br />

        <div
          @click="login"
          style="
            background-color: black;
            text-align: center;
            height: 40px;
            padding-top: 10px;
            margin-left: 40px;
            margin-right: 40px;
            border-radius: 10px;
            color: white;
          "
        >
          <bottom>Registrasi</bottom>
        </div>

        <br />
        <br />
      </form>
    </div>
  </div>
</template>
<script >
import axios from "axios";
export default {
  name: "Registrasi",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const payload = {
        username: this.username,
        password: this.password,
        role: "siswa",
      };
      const registrasi = await axios.post(
        "http://localhost:3000/users",
        payload
      );
      var convertToString = JSON.stringify(registrasi.data);
      sessionStorage.setItem("USER_DATA", convertToString);
      this.$router.push("/link");
    },
  },
};
</script>
<style>
h1 {
  text-align: center;
  /*ketebalan font*/
  font-weight: 300;
}

.tulisan_login {
  text-align: center;
  /*membuat semua huruf menjadi kapital*/
  text-transform: uppercase;
}

.kotak_login {
  width: 350px;
  background: silver;
  /*meletakkan form ke tengah*/
  margin: 80px auto;
  padding: 30px 20px;
  margin-top: 0px;
}

label {
  font-size: 11pt;
}

.form_login {
  /*membuat lebar form penuh*/
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 11pt;
  margin-bottom: 20px;
}

.tombol_login {
  background: #2e2e2e;
  color: white;
  font-size: 11pt;
  width: 100%;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
}

.link {
  color: #232323;
  text-decoration: none;
  font-size: 10pt;
}
</style>