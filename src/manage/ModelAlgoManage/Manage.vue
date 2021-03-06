<template>
  <div class="manage-content">
    <a-table
      size="middle"
      :columns="initColumns"
      :data-source="dataList"
      :pagination="this.pagination"
      @change="this.changeTable"
      :loading="tableLoading"
    >
      <span slot="action" slot-scope="text, record">
        <a @click="() => editorRow(record)">编辑</a>
        <a-divider type="vertical" />
        <a-popconfirm
          :title="popconfirmTitle"
          ok-text="确定"
          cancel-text="取消"
          @confirm="() => deleteRow(record)"
        >
          <a>删除</a>
        </a-popconfirm>
      </span>
    </a-table>
    <div v-if="formVisible">
      <a-button class="okBtn" type="primary" @click="onSubmit">
        确定
      </a-button>
      <a-button type="primary" @click="closeForm">
        取消
      </a-button>
    </div>
     <a-button v-else type="primary" @click="showForm">
      新建{{ this.types[this.type] }}
    </a-button>
    <div class="form" v-show="formVisible">
      <a-spin :spinning="formSpinning"/>
      <a-form-model ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol" :rules="rules">
        <a-form-model-item ref="name" :label="initColumns[0].title" prop="name">
          <a-input
            v-model="form.name" 
            @blur="
              () => {
                $refs.name.onFieldBlur();
              }
            "
          />
        </a-form-model-item>
        <a-form-model-item ref="desc" :label="initColumns[1].title" prop="desc">
          <a-input v-model="form.desc" />
        </a-form-model-item>
        <a-form-model-item
          class="prop"
          v-bind="index !== 0 && formItemLayoutWithOutLabel"
          v-for="(item, index) in form.prop"
          :key="item.key"
          :label="index === 0 ? '固定参数' : ''"
          prop="prop"
          :style="index === 0 && 'margin-bottom: 0'"
        >
          <a-input
            v-model="item.label"
            placeholder="标题"
          />
          <a-input
            v-model="item.name"
            placeholder="key"
          />
          <a-select class="select_type" v-model="item.type" placeholder="类型">
            <a-select-option value="string">string</a-select-option>
            <a-select-option value="number">number</a-select-option>
            <a-select-option value="array">array</a-select-option>
          </a-select>
          <a-input-number
            v-if="item.type === 'number'"
            v-model="item.value"
            placeholder="默认值"
          />
          <a-input
            v-else
            v-model="item.value"
            placeholder="默认值"
          />
          <a-icon
            class="dynamic-delete-button"
            type="minus-circle-o"
            :disabled="form.prop.length === 1"
            @click="removeProp(item)"
          />
        </a-form-model-item>
        <a-form-model-item class="addBtn" v-bind="formItemLayoutWithOutLabel">
          <a-button type="dashed" style="width: 100%" @click="addProp">
            <a-icon type="plus" /> 添加固定参数
          </a-button>
        </a-form-model-item>
        <a-form-model-item
          class="param"
          v-for="(item, index) in form.param"
          v-bind="index !== 0 && formItemLayoutWithOutLabel"
          :key="item.key"
          :label="index === 0 ? '可变参数' : ''"
          prop="param"
          :style="index === 0 && 'margin-bottom: 0'"
        >
          <a-input
            v-model="item.label"
            placeholder="标题"
          />
          <a-input
            v-model="item.name"
            placeholder="key"
          />
          <a-select class="select_type" v-model="item.type" placeholder="类型">
            <a-select-option value="string">string</a-select-option>
            <a-select-option value="number">number</a-select-option>
            <a-select-option value="array">array</a-select-option>
          </a-select>
          <a-input-number
            v-if="item.type === 'number'"
            v-model="item.defaultValue"
            placeholder="初始值"
          />
          <a-input
            v-else
            v-model="item.defaultValue"
            placeholder="初始值"
          />
          <a-checkbox v-model="item.isRequired" :checked="item.isRequired">必填</a-checkbox>
          <a-icon
            class="dynamic-delete-button"
            type="minus-circle-o"
            :disabled="form.param.length === 1"
            @click="removeParam(item)"
          />
        </a-form-model-item>
        <a-form-model-item class="addBtn" v-bind="formItemLayoutWithOutLabel">
          <a-button type="dashed" style="width: 100%" @click="addParam">
            <a-icon type="plus" /> 添加可变参数
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script>
export default {
  props: ["type"],
  computed: {
    initColumns: function() {
      this.columns[0].title = `${this.types[this.type]}名称`;
      this.columns[1].title = `${this.types[this.type]}描述`;
      return this.columns;
    },
    popconfirmTitle: function() {
      return `确定删除当前${this.types[this.type]}?`;
    },
    dataList: function() {
      let data = new Array();
      this.$store.state.ciList.map(val => {
        const { id, name, desc } = val;
        data.push({
          key: val.id,
          name,
          desc
        });
      });
      return data;
    },
    tableLoading: function() {
      return this.$store.state.loading;
    },
    formSpinning: function() {
      return this.$store.state.formSpinning;
    },
  },
  watch: {
    '$store.state.currentCiDetail': function(detail) {
      this.updateForm({ ...this.form, ...detail });
    },
    '$store.state.pagination': {
      handler(val) {
        this.pagination = val;
      },
      deep: true
    },
  },
  data() {
    return {
      types: {
        model: '模型',
        algo: '算法'
      },
      columns: [
        { title: '名称', dataIndex: 'name', key: 'name'},
        { title: '描述', dataIndex: 'desc', key: 'desc'},
        { title: '操作', dataIndex: 'operation', key: 'operation', width: 100, scopedSlots: { customRender: 'action' }},
      ],
      labelCol: { span: 5},
      wrapperCol: { span: 19 },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 19, offset: 5 },
          sm: { span: 19, offset: 5 },
        },
      },
      form: {
        name: '',
        desc: '',
        prop: [],
        param: []
      },
      rules: {
        name: [{ required: true, message: '请输入模型名称', trigger: 'blur' }],
        prop: [{ validator: this.checkParam }],
        param: [{ validator: this.checkParam }]
      },
      formVisible: false,
      createNew: true,
      pagination: {
        pageSize: 0,
        pageNo: 0,
        total: 0
      }
    };
  },
  methods: {
    changeTable(pagination) {
      this.$store.commit('updatePagination', pagination);
      this.getList();
    },
    showForm() {
      this.createNew = true;
      this.formVisible = true;
    },
    closeForm() {
      this.$store.commit('updateCurrentCiDetail', {
        name: '',
        desc: '',
        prop: [],
        param: []
      });
      this.formVisible = false;
    },
    onSubmit() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if (this.createNew) {
            this.$store.dispatch('createCi', {
              type: this.type,
              ...this.form
            });
          } else {
            this.$store.dispatch('updateCi', this.form);
          }
          this.closeForm();
        } else {
          return false;
        }
      });      
    },
    checkParam(rule, value, callback) {
      if (value.length > 0) {
        value.map(val => {
          if (Object.keys(val).length <= 0) {
            callback('请输入参数信息');
          }
        });
      }
      callback();
      return;
    },
    addProp() {
      if (this.form.hasOwnProperty('prop')) {
        this.form.prop.push({});
      } else {
        Object.assign(this.form, { prop: [{}]});
      }
    },
    removeProp(item) {
      let index = this.form.prop.indexOf(item);
      if (index !== -1) {
        this.form.prop.splice(index, 1);
      }
    },
    addParam() {
      if (this.form.hasOwnProperty('param')) {
        this.form.param.push({});
      } else {
        Object.assign(this.form, { param: [{}]});
      }
    },
    removeParam(item) {
      let index = this.form.param.indexOf(item);
      if (index !== -1) {
        this.form.param.splice(index, 1);
      }
    },
    deleteRow(record) {
      this.$store.dispatch('deleteCi', { id: record.key, type: this.type });
    },
    editorRow(record) {
      this.$store.dispatch('getCiDetail', { id: record.key });
      this.createNew = false;
      this.formVisible = true;
    },
    getList() {
      this.$store.dispatch('getList', {
        type: this.type,
        pagination: this.$store.getters['getPagination']
      });
    },
    updateForm(detail) {
      this.form = JSON.parse(JSON.stringify(detail));
    }
  }, 
};
</script>
<style lang="scss">
  .manage-content {
    .okBtn {
      margin-right: 10px;
    }
    
    .form {
      margin-top: 10px;
      border-top: 1px solid #e8e8e8;
      padding-top: 10px;

      .ant-form-item {
        margin-bottom: 0px;
      }

      .prop, .param {
        margin-bottom: 10px;
      }

      .prop .ant-form-item-children, .param .ant-form-item-children {
        display: flex;
        align-items: center;

        .ant-form-item-label {
          margin-bottom: 0;
        }

        .ant-input, .ant-select, .ant-input-number {
          margin-right: 2px;
        }

        .ant-checkbox-wrapper {
          display: flex;
          align-items: center;
          margin-left: 2px;

          .ant-checkbox + span {
            line-height: initial;
            width: 44px;
          }

          span.ant-checkbox {
            padding-right: 0px;
            width: 16px;
            
            span {
              width: 16px;
            }
          }
        }

        .select_type {
          max-width: 80px;
        }
        .ant-input-number {
          min-width: 70px;
        }
      }

      .addBtn {
        margin-bottom: 10px;
      }
    }
  }
</style>