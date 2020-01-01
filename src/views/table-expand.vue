<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
<template>
    <div>
        <Table :data="data" :columns="columns"></Table>
        <!-- <Row class="expand-row">
            <i-col span="8">
                <span class="expand-key">Job: </span>
                <span class="expand-value">{{ row.job }}</span>
            </i-col>
            <i-col span="8">
                <span class="expand-key">Interest: </span>
                <span class="expand-value">{{ row.interest }}</span>
            </i-col>
            <i-col span="8">
                <span class="expand-key">Birthday: </span>
                <span class="expand-value">{{ row.birthday }}</span>
            </i-col>
        </Row>
        <Row>
            <i-col span="8">
                <span class="expand-key">Favorite book: </span>
                <span class="expand-value">《{{ row.book }}》</span>
            </i-col>
            <i-col span="8">
                <span class="expand-key">Favorite movie: </span>
                <span class="expand-value">{{ row.movie }}</span>
            </i-col>
            <i-col span="8">
                <span class="expand-key">Favorite music: </span>
                <span class="expand-value">{{ row.music }}</span>
            </i-col>
        </Row> -->
    </div>
</template>
<script>
    export default {
        data(){
            return{
                columns: [
                    // {
                    //     title: 'Name',
                    //     key: 'name'
                    // },
                    // {
                    //     title: 'Age',
                    //     key: 'age'
                    // },
                    // {
                    //     title: 'Address',
                    //     key: 'address'
                    // }
                    {
                        title: '',
                        align: 'center',
                        children: [
                            {
                                title: 'Name',
                                key: 'name'
                            },
                            {
                                title: 'Age',
                                key: 'age'
                            },
                            {
                                title: 'Address',
                                key: 'address'
                            }
                        ]
                    },
                ],
            }
        },
        props: {
            row: Object,
            column: Object
        },
        computed:{
            // titleName(){
            //     return 'title'
            // },
            data(){
                if(this.column.key === 'name'){
                // this.data.sort()
                    return this.row.else
                }else if(this.column.key === "age"){
                    return this.row.elsetwo
                }
                // return this.row.else
            }
        },
        watch:{
            column(){
                this.changTitleName()
            }
        },
        created(){
            // console.log(this.column[0])
            this.changTitleName()
           
        },
        methods:{
            changTitleName(){
                if(this.column.key === 'name'){
                this.columns[0].title = 'name資訊'
                }else if(this.column.key === "age"){
                    this.columns[0].title = 'age來源'
                }
            }
        }
    };
</script>

<style scoped>

/deep/ .ivu-table:before{
    height: 0px;
}

/deep/ .ivu-table td{
    background-color: transparent !important;
}

/deep/ .ivu-table{
    background-color: transparent !important;
}

/deep/ .ivu-table td{
    border-bottom: 0px;
}

/deep/ .ivu-table-wrapper{
    border: 0px;
}

/deep/ td.expandBox .ivu-table-cell{
position: relative;
}

/deep/ .ivu-table-cell::after{
content: '';
position: absolute;
top: 0;
left:0;
height: 100%;
width:100%;
z-index: 9;
}

/deep/ .ivu-table-cell:hover .ivu-icon-ios-arrow-forward{
color:#1d7cd0;
border-color:#1d7cd0;
}

/deep/ .ivu-table-header tr:nth-child(2){
    display: none;
}
</style>
