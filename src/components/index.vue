<template>
    <div>
        <el-container>
            <el-header>
                <div>{{indexTitle}}</div>
            </el-header>
            <el-main>
                
                <el-row>
                    <el-col :span="5" v-for="(a, index) in articleList"  :key="index" :offset="1">
                        <el-card :body-style="{ padding: '0px' }">
                            <img :src="a.images.small" class="image">
                            <div style="padding: 14px;line-height: 0">
                            <span>{{a.title}}</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ a.year }}</time>
                            </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
        
    </div>
</template>
<script>
    export default{
        name:'index',
        data(){
            return{
                articleList:[],
                indexTitle:''
            }
        },
        mounted:function(){
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
                header:{},
                emulateJSON: true
            }).then(function(res){
                this.articleList=res.data.subjects;
                this.indexTitle=res.data.title;
            },function(eres){})
        }
    }
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>