<template>
  <div id="app">
    <div class="main">
      <div class="inputs">
        <el-row :gutter="2" type="flex" class="row-bg" justify="end">
          <el-col :span="3"
            ><div class="grid-content bg-purple">
              <div class="block">
                <span class="demonstration"></span>
                <h4>من تاريخ</h4>
                <el-date-picker
                  v-model="valueDate"
                  type="date"
                  placeholder="2020-10-15"
                >
                </el-date-picker>
              </div></div
          ></el-col>
          <el-col :span="3"
            ><div class="grid-content bg-purple-light">
              <span class="demonstration"></span>
              <h4>المستوى</h4>
              <el-select v-model="value" placeholder="1">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select></div
          ></el-col>
          <el-col :span="3"
            ><div class="grid-content bg-purple">
              <span class="demonstration"></span>
              <h4>اسم الفرع</h4>
              <el-select v-model="value2" placeholder="الفرع الرئيسي">
                <el-option
                  v-for="item in options2"
                  :key="item.value2"
                  :label="item.label2"
                  :value="item.value2"
                >
                </el-option>
              </el-select></div
          ></el-col>
        </el-row>

        <div>
          <div>
            <el-row :gutter="2" type="flex" class="row-bg" justify="end">
              <el-col :span="3"
                ><div class="grid-content bg-purple">
                  <div class="block">
                    <span class="demonstration"></span>
                    <h4>إلى تاريخ</h4>
                    <el-date-picker
                      v-model="valueDate2"
                      type="date"
                      placeholder="2020-10-15"
                    >
                    </el-date-picker>
                  </div></div
              ></el-col>
              <el-col :span="3"
                ><div class="grid-content bg-purple-light">
                  <span class="demonstration"></span>
                  <h4>مركز التكلفة</h4>

                  <el-select v-model="value3" placeholder="بدون">
                    <el-option
                      v-for="item in options3"
                      :key="item.value3"
                      :label="item.label3"
                      :value="item.value3"
                    >
                    </el-option>
                  </el-select></div
              ></el-col>
            </el-row>
          </div>
        </div>

        <div class="left-btns">
          <div class="dang-btn">
            <el-row :gutter="20" type="flex" class="row-bg" justify="start">
              <el-col :span="4"
                ><div class="grid-content bg-purple-dark">
                  <el-button id="dang-text" type="danger">
                    إظهار الحسابات التي رصيدها صفر
                  </el-button>
                </div></el-col
              >
            </el-row>
          </div>

          <el-row :gutter="20" type="flex" class="row-bg" justify="start">
            <el-col :span="1.5"
              ><div class="grid-content bg-purple">
                <el-button type="info"> تضمين الأرصدة الإفتتاحية </el-button>
              </div></el-col
            >
            <el-col :span="1.5"
              ><div class="grid-content bg-purple-light">
                <el-button type="info"> نضمين قيمة المخزون </el-button>
              </div></el-col
            >
          </el-row>
        </div>
      </div>

      <div class="table">
        <el-table
          :data="tableData"
          stripe
          border
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column prop="raseedMadeen" label="رصيد مدين" width="586">
          </el-table-column>
          <el-table-column prop="raseedDaen" label="رصيد دائن" width="586">
          </el-table-column>
          <el-table-column prop="esmElhesab" label="اسم الحساب" width="586">
          </el-table-column>
          <el-table-column prop="m" label="م" width="40"> </el-table-column>
        </el-table>
        <el-table :data="tableData2" border style="width: 100%">
          <el-table-column prop="numMadeen" label="23,649.13" width="586">
          </el-table-column>
          <el-table-column prop="numDaen" label="23,649.13" width="586">
          </el-table-column>
          <el-table-column
            prop="egmali"
            label="إجمالي ربح المتاجرة"
            width="626"
          >
          </el-table-column>
        </el-table>
      </div>
    </div>

    <footer>
      <el-row :gutter="8" type="flex" class="row-bg" justify="start">
        <div class="footer-btn">
          <el-col :span="1.5"
            ><div class="grid-content bg-purple">
              <el-button size="small" type="warning">F4 طباعة</el-button>
            </div></el-col
          >
          <el-col :span="1.5"
            ><div class="grid-content bg-purple-light">
              <el-button size="small" type="warning">PDF طباعة</el-button>
            </div></el-col
          >
          <el-col :span="1.5"
            ><div class="grid-content bg-purple">
              <el-button size="small" type="primary">عرض</el-button>
            </div></el-col
          >
        </div>
      </el-row>
    </footer>
    <div class="pagination">
      <div class="block">
        <span class="demonstration"></span>

        <el-pagination
          v-model:currentPage="currentPage4"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          background="rgb(240, 240, 240)"
          layout="sizes, total, prev, pager, next, jumper"
          :total="40"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
function accDetails(num, dash, name) {
  return `${num} ${dash} ${name}`;
}

export default {
  name: "app",
  data() {
    return {
      disabledDate(time) {
        return time.getTime() > Date.now();
      },

      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      options: [
        {
          value: "1",
          label: "1",
        },
      ],
      options2: [
        {
          value2: "الفرع الرئيسي",
          label2: "الفرع الرئيسي",
        },
      ],
      options3: [
        {
          value3: "يدون",
          label3: "بدون",
        },
      ],
      value: "",
      value2: "",
      value3: "",
      valueDate: "",
      valueDate2: "",
      tableData: [
        {
          raseedMadeen: "23,649.13",
          raseedDaen: "103,276.86",
          esmElhesab: accDetails("1000", "ابراهيم السيد", "-"),
          m: 1,
        },
        {
          raseedMadeen: "103,276.86",
          raseedDaen: "23,649.13",
          esmElhesab: accDetails("2000", "علي عبد العال", "-"),
          m: 2,
        },
        {
          raseedMadeen: "103,276.86",
          raseedDaen: "23,649.13",
          esmElhesab: accDetails("2000", "علي عبد العال", "-"),
          m: 3,
        },
        {
          raseedMadeen: "103,276.86",
          raseedDaen: "23,649.13",
          esmElhesab: accDetails("2000", "علي عبد العال", "-"),
          m: 3,
        },
      ],
      tableData2: [
        {
          numMadeen: "23,649.13",
          numDaen: "23,649.13",
          egmali: "الإجمالي",
        },
      ],
    };
  },
};
</script>

<style>
body {
  background: rgb(240, 240, 240);
}
#app {
  max-width: 1800px;
  justify-content: center;
  align-items: center;
  margin: 2% auto;
  font-size: large;
}

footer {
  max-width: 1750px;
  min-height: 150px;
  background: rgb(227, 245, 252);
  margin: auto;
  box-shadow: 1px 1px 2px 2px rgb(211, 211, 211);
  border-radius: 3px;
  margin-top: 0.3px;
}

.footer-btn {
  margin-top: 90px;
  margin-bottom: 15px;
  margin-left: 40px;
}

#dang-text {
  padding: 2px 78px;
}

.table {
  margin-top: 30px;
}
.dang-btn {
  margin-bottom: 18px;
}

.inputs {
  margin-right: 20px;
}

.left-btns {
  margin-left: 20px;
}

.main {
  box-shadow: 1px 1px 2px 2px rgb(211, 211, 211);
  border-radius: 3px;
  background: #fff;
  max-height: 100vh;
  text-align: right;
}

.pagination {
  margin-top: 20px;
  text-align: center;
  margin-bottom: 30px;
}

.el-table th > .cell,
.el-table .cell {
  text-align: center;
}

.el-table_1_column_1.is-leaf,
.el-table_1_column_2.is-leaf,
.el-table_1_column_3.is-leaf,
.el-table_1_column_4.is-leaf {
  font-size: large;
  background: rgb(24, 121, 138);
  color: #fff;
}

.el-table_2_column_7.is-leaf,
.el-table_2_column_7 {
  font-size: large;
  background: rgb(85, 222, 231) !important;
  color: #fff;
}

.el-table_2_column_6.is-leaf,
.el-table_2_column_5.is-leaf,
.el-table_2_column_6,
.el-table_2_column_5 {
  background: rgba(237, 240, 101, 0.425) !important;
  color: #606266;
}
.el-table .cell {
  font-weight: 100;
}
</style>
