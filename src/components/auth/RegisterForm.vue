<template>
  <form @submit.prevent="register">
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
        @keypress="onlyNumbers"
        maxlength="12"
        minlength="12"
        required
      />
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
        required
      />
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
        required
      />
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
        required
      />
      <p v-if="passwordError" class="error">{{ passwordError }}</p>
    </div>
    <div>
      <label for="confirmPassword">Confirm Password:</label>
      <input
        id="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        v-model="confirmPassword"
        required
      />
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
import api from "@/API/auth/api";
import { ref, computed, watch } from "vue";

export default {
  setup() {
    const email = ref("");
    const phone = ref("");
    const lastname = ref("");
    const firstname = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const error = ref(null);
    const passwordError = ref("");

    // Email validation
    const isValidEmail = computed(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.value);
    });

    // Simplified phone validation
    const onlyNumbers = /^\d{12,12}$/;
    const isValidPhone = computed(() => {
      const cleanedPhone = phone.value.replace(/\D/g, "");
      return onlyNumbers.test(cleanedPhone);
    });

    // Firstname and lastname validation
    const isValidFirstname = computed(() => {
      const nameRegex = /^[A-Za-zА-Яа-я]{2,50}$/; // Length between 2 and 50 characters, only letters
      return nameRegex.test(firstname.value.trim());
    });

    const isValidLastname = computed(() => {
      const nameRegex = /^[A-Za-zА-Яа-я]{2,50}$/; // Length between 2 and 50 characters, only letters
      return nameRegex.test(lastname.value.trim());
    });

    // Password validation checks
    const hasUppercase = computed(() => /[A-Z]/.test(password.value));
    const hasLowercase = computed(() => /[a-z]/.test(password.value));
    const hasNumber = computed(() => /\d/.test(password.value));
    const hasSpecialChar = computed(() => /[@$!%*?&]/.test(password.value));
    const hasMinLength = computed(() => password.value.length >= 8);
    const hasCyrillic = computed(() => /[А-Яа-яЁё]/.test(password.value));

    // Update password error message
    watch(
      [
        hasUppercase,
        hasLowercase,
        hasNumber,
        hasSpecialChar,
        hasMinLength,
        hasCyrillic,
      ],
      () => {
        if (hasCyrillic.value) {
          passwordError.value =
            "The password must not contain cyrillic characters.";
        } else if (!hasMinLength.value) {
          passwordError.value =
            "The password must be at least 8 characters long.";
        } else if (!hasUppercase.value) {
          passwordError.value =
            "The password must contain at least one capital letter and a special character.";
        } else if (!hasLowercase.value) {
          passwordError.value =
            "The password must contain at least one lowercase letter.";
        } else if (!hasNumber.value) {
          passwordError.value =
            "The password must contain at least one number.";
        } else if (!hasSpecialChar.value) {
          passwordError.value =
            "The password must contain at least one special character.";
        } else {
          passwordError.value = "";
        }
      }
    );

    // Confirm password validation
    const doPasswordsMatch = computed(() => {
      return password.value === confirmPassword.value;
    });

    // Form validation including all fields
    const isFormValid = computed(() => {
      return (
        isValidEmail.value &&
        isValidPhone.value &&
        isValidFirstname.value &&
        isValidLastname.value &&
        passwordError.value === "" &&
        doPasswordsMatch.value
      );
    });

    const register = async () => {
      if (!isFormValid.value) {
        error.value = "Please check your input.";
        return;
      }

      console.log("Attempting to register with:", {
        email: email.value,
        phone: phone.value,
        lastname: lastname.value,
        firstname: firstname.value,
        password: password.value,
      });

      try {
        const response = await api.post("/auth/registration", {
          email: email.value,
          phone: phone.value,
          lastname: lastname.value,
          firstname: firstname.value,
          password: password.value,
        });

        console.log("Registration successful:", response.data);
        this.$emit("close");
      } catch (error) {
        console.error("Registration error:", error);
        if (error.response) {
          if (error.response.status === 400) {
            error.value = error.response.data.message || "Invalid input.";
          } else if (error.response.status === 409) {
            error.value = "A user with this email already exists.";
          } else {
            error.value = error.response.data.message || "Registration failed.";
          }
        } else if (error.request) {
          error.value = "No response from the server.";
        } else {
          error.value = "An error occurred during registration.";
        }
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
      register,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

form {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;

  div {
    margin-bottom: $spacing-unit;
  }

  button {
    padding: $spacing-unit;
    border: none;
    border-radius: 4px;
    background-color: $extra-color-Peach;
    color: $text-color;
    font-size: 1rem;
    cursor: pointer;
    font-family: "Open Sans", sans-serif;

    &:hover {
      color: $text-color;
    }
  }
}

.toggle {
  margin-top: $spacing-unit;
  color: $text-color;
  cursor: pointer;
  font-family: "Roboto", sans-serif; /* Apply Roboto font */

  &:hover {
    text-decoration: underline;
  }
}

.error {
  color: red;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
}
</style>
