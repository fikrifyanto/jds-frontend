<template>
  <div class="flex flex-col gap-2">
    <label :for="name">{{ label }}</label>
    <select @change="callback(selected)" v-model="selected" :name="name" class="focus:border-green-500 border-2 border-w4c-black-13 rounded px-3 h-10 focus:outline-none">
      <option v-for="item in items" v-bind:key="item.id" :value="item.id">{{ item.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
    };
  },
  props: ["name", "label", "items"],
  methods: {
    callback: function () {
      this.$emit("callback", this.selected);
      this.$emit("changeOption", this.selected);
    },
  },
};
</script>

<style></style>
