<template>
  <div v-if="$store.state.view.statusVisible" class="rto_custom rto_status" :class="[$store.state.theme]">
    <span class="status-title">{{ $store.state.statustooltip.status ? $store.state.statustooltip.status : '帮助文档请按F10' }}</span>
  </div>
</template>

<script>
export default {
  name: "status",
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss">
.rto_status {
  position: relative;
  z-index: 9999;
  height: 24px;
  box-sizing: border-box;
  padding: 0 12px;
  font-size: 12px;
  border-top: 1px solid #acacac;
  line-height: 22px;
  width: 100vw;
  background: #fff;
  .status-title {
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
<style lang="scss" scoped>
</style>
