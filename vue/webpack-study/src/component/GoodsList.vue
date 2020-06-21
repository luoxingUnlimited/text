<template>
    <div class="container">
        <h3>这是容器中的第二个子组件</h3>
        <div class="box">
            <div class="triangle"></div>
            <div class="triangle1"></div>
            <div class="triangle2"></div>
            
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .container {
        width: 100%;
        height: 100%;
        background-color: #f69;
        text-align: center;
        .box {
            width: 100%;
            height: 100%;
            background-color: black;
            div {
                width: 0;
                height: 0;
                border: 50px solid #69f;
                margin: 0 auto 10px;
            }
            .triangle {
                border-right-color: transparent; 
                border-left-color: transparent;
                border-bottom: 0;
            }
            .triangle1 {
                width: 50px;
                height: 50px;
                border-right-color: transparent; 
                border-left-color: transparent;
                border-top-color: transparent;
            }
            .triangle2 {
                border-right: 50px solid #fff; 
                border-left: 50px solid red;
                border-top: 50px solid red;
            }
            
        }
    }
</style>
