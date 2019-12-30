<template>
    <Table 
    :columns="columns10" 
    :data="data9"
    :row-class-name="getRowClass"
    @on-row-click="tableExpand"
    ></Table>
</template>
<script>
    import expandRow from './table-expand.vue';
    export default {
        components: { expandRow },
        data () {
            return {
              isExpand:false,
                columns10: [
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        //  render: (h, params) => {
                        //   let jobName = params.row.name
                        //   let isExpand = params.row.isExpand
                        //   let isDown = params.row.isDown
                        //   let iconType = !isDown ? 'ios-arrow-forward' : 'ios-arrow-down'
                        //   if(!isExpand){
                        //     console.log(params.row)
                        //     return(
                        //       <div style={"cursor: pointer"} onClick={(e) => {e.stopPropagation();this.expandRow(params)}}>
                        //         {params.row.else?<Icon type={iconType} style={"marginRight:5px"}/>:''}
                        //         <span>{jobName}</span>
                        //       </div>
                        //     )
                        //   }else{
                        //     return h('div', {style:{marginLeft:'25px'}},jobName)
                        //   }
                      // }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data9: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        job: 'Data engineer',
                        interest: 'badminton',
                        birthday: '1991-05-14',
                        book: 'Steve Jobs',
                        movie: 'The Prestige',
                        music: 'I Cry',
                        isDown: false,
                        isExpand:false,

                        else:[
                          {name: 'John Brown',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            job: 'Data engineer',
                            interest: 'badminton',
                            birthday: '1991-05-14'
                          },
                          {name: 'John Brown',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            job: 'Data engineer',
                            interest: 'badminton',
                            birthday: '1991-05-14'
                          },
                        ]
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        job: 'Data Scientist',
                        interest: 'volleyball',
                        birthday: '1989-03-18',
                        book: 'My Struggle',
                        movie: 'Roman Holiday',
                        music: 'My Heart Will Go On'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        job: 'Data Product Manager',
                        interest: 'tennis',
                        birthday: '1992-01-31',
                        book: 'Win',
                        movie: 'Jobs',
                        music: 'Don’t Cry'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        job: 'Data Analyst',
                        interest: 'snooker',
                        birthday: '1988-7-25',
                        book: 'A Dream in Red Mansions',
                        movie: 'A Chinese Ghost Story',
                        music: 'actor'
                    }
                ]
            }
        },
        computed:{
          
        },
        methods:{
          getRowClass(row, index) {
            let res = []
            if (!row.else)//即改行没有子元素时，添加row-expand-cover类
              res.push('row-expand-cover')
              return res
            /* if (row.operate == 2)
              res.push('hide-row')
            return res.join(' ') */
          },
          tableExpand(e,index){
            console.log(e,index)
            if(!e.else)return
            this.data9.sort() //更新视图
                // for (let i = 0; i <  this.tableData.length; i++) {
                //     this.tableData[i]._expanded = false;   
                //     this.tableData[i]._text = "查看所有经停站"                       
                // } 
                //点击展开
                if (e._expanded) {  
                    // this.tableData.splice()  
                    // this.tableData.push()  
                    this.data9.sort() //更新视图 
                    this.data9[index]._expanded = false
                    // this.tableData[index]._text = "查看所有经停站"                        
                }else{
                    this.data9.splice()  
                    this.data9[index]._expanded = true
                    // this.tableData[index]._text = "收起所有经停站"
                }
          },
          expandRow(params){
			//判断当前行是否展开，如果未展开，执行以下方法，先展开再请求接口加载到data9中当前data index 后
            if(!this.data9[params.index].isDown){
              // getRecordData().then(res => {
              // 	return res.data
              //     }).then( data => {
                    this.data9[params.index].isDown = true
                    let newArrayData = this.data9[params.index].else
                    this.data9[params.index].totals = newArrayData.length //将展开操作查询到的数据总条数加到当前行数据的totals上
                    newArrayData.map( item =>{
                      item.isExpand = true
                      item.upLevelIndex = params.index
                    })
              newArrayData.map( (value, key) =>{
                this.data9.splice(params.index + key + 1, 0, value)
              })
              // })
            }else{//如果当前行已展开，则隐藏
              this.data9[params.index].isDown = false
              this.data9.splice(params.index + 1, params.row.totals)
            }
          }
        }
    }
</script>

<style scoped>

/deep/ .ivu-table-row{
  cursor: pointer;
}

/deep/ td.ivu-table-expanded-cell{
    padding: 20px 0px 20px 50px !important;
}

/deep/ .row-expand-cover .ivu-table-cell-expand .ivu-icon {
  display: none;
}
/deep/ .row-expand-cover.ivu-table-row {
  cursor: default;
}

</style>