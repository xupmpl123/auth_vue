<template>
  <div class="login">
    <h1>登入 Login</h1>
    <form action="#" @submit.prevent="login">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text"
            class="form-control" name="username" id="username" v-model="username">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password"
            class="form-control" name="password" id="password" v-model="password">
        </div>
        <div class="form-group">
          <button class="btn" @click="login">Login</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        login() {
            this.$store.dispatch('retrieveToken', {
                username: this.username,
                password: this.password,
            })
            .then(response => {
              console.log(response)
              this.$router.push({ name: 'Home'})
            })
            .catch(error => {
              console.log(error)
            })
        }
    }
}
</script>