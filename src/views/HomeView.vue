<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <v-form v-slot="{errors,values,validate}" @submit="onSubmit">
      {{values}} {{errors}}
      <label for="email">Email</label>
      <v-field id="email" type="email" name="email"
      class="form-control" :class="{'is-invalid':errors['email']}"
      rules="email|required" v-model="user.email"></v-Field>
      <error-message name="email" class="invalid-feedback"></error-message>
      <button type="button" @click="validate">驗證</button>
    </v-Form>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return{
      user:{}, 
    };
  },
  methods:{
    onSubmit(){
      console.log(1);
    },
  },
}
</script>
