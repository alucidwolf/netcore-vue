<template>
  <form @submit.prevent class="border" :class="dropClass">
    <div>
      <component v-for="(item, index) in formData.components" :key="index" :parentIndex="index" v-bind:elementIndex="index" :elementData="item" v-bind:is="item.component" :value="item.value">{{item}}</component>
      <button @click="addCategory">Add Category</button>
      <button @click="submitForm()">Submit</button>
    </div>
    </form>
</template>
<script>
import RoomBlock from "./RoomBlock.vue";
export default {
  data: function() {
    return {
      inputValue: "",
      inputElement: {}
    };
  },
  computed: {
    formData: function() {
      return this.$store.state.dataForTheForm;
    },
    dropClass: function() {
      return this.$store.state.dropClassValue;
    }
  },
  methods: {
    addCategory: function() {
      var component = JSON.parse(JSON.stringify(this.formData.template));
      var lengthOfTheCategoryArray = this.formData.components.length;
      this.formData.components.push(component);
    }
  },
  components: {
    RoomBlock: RoomBlock
  }
};
</script>