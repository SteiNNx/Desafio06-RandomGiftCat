<template>
  <img v-if="url !== ''" :src="url" alt="" srcset="" />
</template>
<script>
export default {
  name: "ViewGiftCat",
  props: {
    url: "",
  },
};
</script>
