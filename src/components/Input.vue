<template>
  <div class="flex flex-col gap-2">
    <label :for="name">{{ label }}</label>
    <input :name="name" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none" type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    label: String,
    placeholder: {
      default: "",
      type: String,
    },
  },
};
</script>
