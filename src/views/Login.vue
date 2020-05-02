<template>
  <div class="login">
    <h1>登入 Login</h1>
    <form action="#" @submit.prevent="login">
        <div class="form-group">
          <label for="username">email</label>
          <input type="text"
            class="form-control" name="email" id="email" v-model="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password"
            class="form-control" name="password" id="password" v-model="password">
        </div>
        <div class="form-group">
          <button class="btn" @click.prevent="login">Login</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        login() {
            this.$store.dispatch('retrieveToken', {
                email: this.email,
                password: this.password,
            })
            .then(response => {
              this.$router.push({ name: 'Home'})
              return response
            })
            .catch(error => {
              console.log(error)
            })
        }
    }
}
</script>