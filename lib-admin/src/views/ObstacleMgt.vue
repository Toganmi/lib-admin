<template>
  <div>
    <div class="input-text">
      <el-select v-model="value" placeholder="请选择">
        <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
      </el-select>
      <el-input  v-model="input" placeholder="设置预约人数"></el-input>
      <el-button @click="btnClick(value, input)">确定</el-button>
    </div>

    <el-table
            :data="appointmentlist"
            height="600"
            border
            style="width: 95%;margin: 5% auto">
      <el-table-column
              prop="no"
              label="学号"
              width="180">
      </el-table-column>
      <el-table-column
              prop="build"
              label="图书馆号"
              width="180">
      </el-table-column>
      <el-table-column
              prop="time"
              label="时间"
              width="180">
      </el-table-column>
      <el-table-column
              prop="status"
              label="审核状态">
      </el-table-column>
      <el-table-column label="操作">r
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  @click="handleClick(scope.$index,scope.row),dialogVisible = true">管理
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
      <div>
        <el-radio-group v-model="radio1">
          <el-radio-button label="等待审核"></el-radio-button>
          <el-radio-button label="预约成功"></el-radio-button>
          <el-radio-button label="预约失败"></el-radio-button>
        </el-radio-group>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleCorrect()">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import {getappointmentlist, editappointment} from "../network/appointment";

  export default {
    data() {
      return {
        appointmentlist: [],
        dialogVisible: false,
        radio1: '等待审核',
        row: 0,
        _id: '',
        status: '',
        input: '',
        options: [{
          value: '1号',
          label: '1号'
        }, {
          value: '2号',
          label: '2号'
        }, {
          value: '3号',
          label: '3号'
        }, {
          value: '4号',
          label: '4号'
        }, {
          value: '5号',
          label: '5号'
        }],
        value: ''
      }
    },
    created() {
      this.getappointmentlist()
    },
    methods: {
      getappointmentlist() {
        getappointmentlist().then(res => {
          console.log(res);
          this.appointmentlist = res

        })
      },
      editappointment(id, status) {
        editappointment(id, status).then(res => {
          console.log(res);
        })
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      handleCorrect() {
        this.dialogVisible = false
        this.editappointment(this._id,this.radio1)
        this.getappointmentlist()
      },
      handleClick(index, row) {
        this.radio1 = this.appointmentlist[index].status
        this._id = this.appointmentlist[index]._id
        this.status = this.appointmentlist[index].status
      },
      btnClick(build, value) {
        console.log(`图书馆号：${build},人数：${value}`)
      }
    }
  }
</script>

<style scoped>
  .input-text {
    display: flex;
    margin: 5% 2%;
    width: 40%;
  }
</style>