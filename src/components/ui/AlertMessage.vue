<template>
  <div v-if="visible" class="alert" :class="type">
    <p>{{ message }}</p>
    <button @click="closeAlert">x</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      type: 'success' // success, error, info
    };
  },
  methods: {
    showAlert(message, type = 'success') {
      this.message = message;
      this.type = type;
      this.visible = true;
      setTimeout(() => (this.visible = false), 3000); // Автоховання через 3 секунди
    },
    closeAlert() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.alert {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  z-index: 1000;
}
.alert.success {
  background-color: #28a745;
}
.alert.error {
  background-color: #dc3545;
}
.alert.info {
  background-color: #17a2b8;
}
</style>
