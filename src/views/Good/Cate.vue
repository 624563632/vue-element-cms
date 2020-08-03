<template>
<div class="qf-cate">
    
    <div class="qf-cate-add">
        <el-input v-model="cate_zh" placeholder="请输入内容"></el-input>
        <el-input v-model="cate" placeholder="请输入内容"></el-input>
        <el-button type="primary" @click="submit">添加品类</el-button>
    </div>


    <el-table
      :data="list"
      style="width: 100%">

      <el-table-column
        prop="cate"
        label="品类英文"
        width="180">
      </el-table-column>

      <el-table-column
        prop="cate_zh"
        label="品类中文"
        width="180">
      </el-table-column>

      <el-table-column
        prop="create_time"
        label="时间">
      </el-table-column>

      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
            <el-button @click="handleClick('edit',scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleClick('del',scope.row)" type="text" size="small">删除</el-button>
        </template>
        </el-table-column>

    </el-table>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            cate_zh: '',
            cate: '',
            list: []
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.$http.fetchAllCates({}).then(res=>{
                this.list = res.list
            })
        },
        submit() {
            let data = {
                cate: this.cate,
                cate_zh: this.cate_zh
            }
            this.$http.fetchAddCate(data).then(()=>{
                this.$message({
                    message: '恭喜你添加成功',
                    type: 'success'
                })
                this.cate = ''
                this.cate_zh = ''
                this.init()
            })
        },
        handleClick(type,item) {
            if(type==='edit') {
                console.log('编辑', item)
            } else {
                console.log('删除', item)
            }
        } 
    }
}
</script>

<style lang="scss" scoped>
.qf-cate-add {
    width: 400px;
    margin: 50px auto;
}
</style>