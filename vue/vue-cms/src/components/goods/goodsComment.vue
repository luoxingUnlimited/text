<template>
    <div>
        <h3>商品评论</h3>
        <cmtbox :id="$route.params.id"></cmtbox>
    </div>
</template>

<script>
import cmtbox from '../sub-components/comment.vue'
export default {
    components: {
        cmtbox: cmtbox
    }
}
</script>

<style lang="scss" scoped>

</style>