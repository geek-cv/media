<template>
<div>
    <Table :columns="columns1" :data="data1"></Table>
    <input type="text"/>
    <el-button>提交</el-button>
</div>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '时间',
                        key: 'date'
                    },
                    {
                        title: '评论内容',
                        key: 'content'
                    },
                    {
                        title: '用户',
                        key: 'user'
                    }
                ],
                data1: [
                    {
                        date:"",
                        content:"",
                        user:''
                    }
                ]
            }
        },
    }
</script>
