<template>
  <div class="c-snack-bar">
    <span class="messages">{{messages}}</span>
  </div>
</template>

<script>
export default {
  name: 'Snackbar',
  props: {
    messages: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@include c(snack-bar){
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 50%;
  max-width: unit(960);
  min-width: unit(360);
  max-height: unit(104);
  min-height: unit(56);
  padding: 0 unit(30);
  transform: translateX(-50%);
  background-color: $C14;
  border-radius: unit(4);
  z-index: 10;
  .messages {
    @include text(29);
  }
}
</style>
