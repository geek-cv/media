<template>
    <Form :model="formItem" :label-width="80">
        <FormItem label="密码">
            <Input v-model="formItem.username" placeholder="请输入账户"></Input>
        </FormItem>
        <FormItem label="帐号">
            <Input v-model="formItem.userpassword" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem label="Radio">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem>
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
    </Form>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    username: '',
                    userpassword: '',
                }
            }
        }
    }
</script>
