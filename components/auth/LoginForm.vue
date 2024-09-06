<template>
  <div class="loginFormContainer">
    <form
      class="flex flex-col gap-4"
      @submit.prevent="onSubmit"
    >
      <h1 class="text-lg font-bold text-blue-50">Login:</h1>
      <FormsTextInput
        v-model="email"
        label="Email"
        input-id="login-email-input"
        type="email"
        @submit="onSubmit"
      />
      <FormsTextInput
        v-model="password"
        label="Password"
        input-id="login-password-input"
        type="password"
        @submit="onSubmit"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')

const onSubmit = () => alert('logging in')
</script>