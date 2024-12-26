<template>
  <form @submit.prevent="register">
    <h2>Register</h2>
    <div>
      <label for="email">Email:</label>
      <input type="email" v-model="email" placeholder="Your email" required />
      <p v-if="!isValidEmail" class="error">
        Please enter a valid email address.
      </p>
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input
        id="phone"
        placeholder="380"
        type="text"
        v-model="phone"
        class="input-tel"
        maxlength="12"
        minlength="12"
        required />
      <p v-if="!isValidPhone" class="error">
        Please enter a valid phone number.
      </p>
    </div>
    <div>
      <label for="lastname">Lastname:</label>
      <input
        id="lastname"
        placeholder="Your lastname"
        type="text"
        v-model="lastname"
        required />
      <p v-if="!isValidLastname" class="error">
        Please enter a valid lastname.
      </p>
    </div>
    <div>
      <label for="firstname">Firstname:</label>
      <input
        id="firstname"
        placeholder="Your firstname"
        type="text"
        v-model="firstname"
        required />
      <p v-if="!isValidFirstname" class="error">
        Please enter a valid firstname.
      </p>
    </div>
    <div>
      <label for="password">Password:</label>
      <input
        type="password"
        v-model="password"
        placeholder="Your password"
        required />
      <p v-if="passwordError" class="error">{{ passwordError }}</p>
    </div>
    <div>
      <label for="confirmPassword">Confirm Password:</label>
      <input
        id="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        v-model="confirmPassword"
        required />
      <p v-if="!doPasswordsMatch" class="error">Passwords do not match.</p>
    </div>
    <button type="submit" :disabled="!isFormValid">Register</button>
    <p v-if="error" class="error">{{ error }}</p>
    <p class="toggle" @click="$emit('toggle')">
      Already have an account? Login
    </p>
  </form>
</template>

<script>
import { computed, ref } from 'vue';
import { registerUser } from '@/api/auth'; // import function registration

export default {
  emits: ['toggle', 'close'],
  setup(_, { emit }) {
    const email = ref('');
    const phone = ref('');
    const lastname = ref('');
    const firstname = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const error = ref(null);

    const isValidEmail = computed(() =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
    );
    const onlyNumbers = /^\d{12}$/;
    const isValidPhone = computed(() =>
      onlyNumbers.test(phone.value.replace(/\D/g, ''))
    );
    const isValidFirstname = computed(() =>
      /^[A-Za-zА-Яа-я]{2,50}$/.test(firstname.value.trim())
    );
    const isValidLastname = computed(() =>
      /^[A-Za-zА-Яа-я]{2,50}$/.test(lastname.value.trim())
    );

    const passwordError = computed(() => {
      if (password.value.length < 8) {
        return 'Пароль должен быть не менее 8 символов';
      }
      return '';
    });

    const doPasswordsMatch = computed(
      () => password.value === confirmPassword.value
    );

    const isFormValid = computed(() => {
      return (
        isValidEmail.value &&
        isValidPhone.value &&
        isValidFirstname.value &&
        isValidLastname.value &&
        passwordError.value === '' &&
        doPasswordsMatch.value
      );
    });

    const register = async () => {
      if (!isFormValid.value) {
        error.value = 'Please check your input.';
        return;
      }

      try {
        const userData = {
          email: email.value,
          phone: phone.value,
          lastname: lastname.value,
          firstname: firstname.value,
          password: password.value
        };

        const result = await registerUser(userData); // Call API
        console.log('Registration successful:', result);
        error.value = null; // Reset error
        emit('close'); // Close form
      } catch (err) {
        error.value = err.message; // Set error
      }
    };

    return {
      email,
      phone,
      lastname,
      firstname,
      password,
      confirmPassword,
      error,
      passwordError,
      isValidEmail,
      isValidPhone,
      isValidFirstname,
      isValidLastname,
      doPasswordsMatch,
      isFormValid,
      register
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
</style>
