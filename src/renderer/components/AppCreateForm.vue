<template>
  <a-modal
    v-model="mvisible"
    title="新建项目"
    ok-text="确认"
    cancel-text="取消"
    :maskClosable="false"
    @ok="okHandler"
    @cancel="cancelHandler"
  >
    <div>
      <a-form-model
        ref="appCreateForm"
        :model="appCreateForm"
        :rules="rules"
        v-bind="layout"
      >
        <a-form-model-item has-feedback label="项目名称:" prop="name">
          <a-input v-model="appCreateForm.name" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="新建到:" prop="dir">
          <a-tree-select
            v-model="appCreateForm.dir"
            style="width: 100%"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            :tree-data="dirData"
            tree-default-expand-all
            :replaceFields="{key: 'id', title: 'label', value: 'id'}"
          >
          </a-tree-select>
        </a-form-model-item>
      </a-form-model>
    </div>
    <template slot="footer">
      <a-button key="cancel" @click="cancelHandler">
        取消
      </a-button>
      <a-button key="ok" type="primary" :loading="loading" @click="okHandler">
        确定
      </a-button>
    </template>
  </a-modal>
</template>

<script>
import bus from "utils/bus"

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value(val) {
      this.mvisible = val;
    },
  },
  data() {
    return {
      mvisible: this.value,
      appCreateForm: {
        name: "",
        dir: '2',
      },
      rules: {
        name: [{ required: true, message: "请输入项目名称", trigger: "change" }],
      },
      layout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 12 },
      },
      loading: false,
      dirData: []
    };
  },
  mounted() {
    this.$store.dispatch('file/dirList').then( res => {
      this.appCreateForm.dir = res.id
      this.dirData = [res]
    })
  },
  methods: {
    okHandler() {
      this.$refs["appCreateForm"].validate((valid) => {
        if (valid) {
          this.mvisible = false;
          this.createApp();
        } else {
          return false;
        }
      });
    },
    cancelHandler() {
      this.mvisible = false;
      this.$emit("input", false);
    },
    createApp() {
      this.loading = true;
      this.$store
        .dispatch("file/create", this.appCreateForm)
        .then(() => {
          this.loading = false;
          this.$store.dispatch("showMessage", {
            type: "success",
            msg: "创建成功",
          });
          this.$emit("input", false);
          bus.emit("app-create-success")
        })
        .catch((err) => {
          console.error(err);
          this.loading = false;
          this.$store.dispatch("showMessage", {
            type: "error",
            msg: "创建失败",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
