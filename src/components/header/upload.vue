<!-- <template>
    <Upload action="http://localhost:8080/api/upload">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
</template>
<script>
    export default {
        
    }
</script>
 -->
 <template>
    <Upload
        multiple
        type="drag"
        action="http://localhost:8080/api/upload">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
</template>
<script>
    export default {
        
    }
</script>
