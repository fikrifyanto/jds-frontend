<template class>
  <div class="flex flex-col items-center justify-center pb-10 bg-slate-50 min-h-screen">
    <div class="flex items-center justify-center h-16 w-full text-center bg-green-500 text-white mb-5">
      <h1 class="text-lg">Data Penerima Bansos</h1>
    </div>
    <Form />
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  name: "JDS-Form",
  components: { Form },
};
</script>

<style></style>
