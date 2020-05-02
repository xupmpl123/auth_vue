<template>
  <div class="register">
    <h1>註冊 register</h1>
        <form action="#">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text"
            class="form-control" name="username" id="username" v-model="username">
        </div>
        <div class="form-group">
          <label for="username">Email</label>
          <input type="text"
            class="form-control" name="email" id="email" v-model="email">
        </div>
        <div class="form-group">
          <label for="password1">Password</label>
          <input type="password"
            class="form-control" name="password1" id="password1" v-model="password1">
        </div>
        <div class="form-group">
          <label for="password2">ConfrimPassword</label>
          <input type="password"
            class="form-control" name="password2" id="password2" v-model="password2">
        </div>
        <div class="form-group">
          <button class="btn" @click.prevent="register">Register</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            username: '',
            email: '',
            password1: '',
            password2: '',
        }
    },
    methods: {
        register() {
            this.$store.dispatch('registerUser', {
                username: this.username,
                email: this.email,
                password1: this.password1,
                password2: this.password2
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