<template>
    <Table 
    :columns="columns10" 
    :data="data9"
    :row-class-name="getRowClass"
    ></Table>
</template>
<script>
    import expandRow from './table-expand.vue';
    export default {
        components: { expandRow },
        data () {
            return {
              // isExpand:false,
              selectedColumn:'',
                columns10: [
                    {
                        type: 'expand',
                        width: '1',
                        render: (h, params) => {
                          let vm = this
                          // let row = params.row.unshift()
                            return h(expandRow, {
                                props: {
                                    row: params.row,
                                    column: vm.selectedColumn
                                }
                            })
                            // return(
                            //   <expandRow row={params.row} cloumn={vm.selectedColumn}></expandRow>
                            // )
                        }
                    },
                    {
                        title: 'Name',
                        key: 'name',
                         render: (h, params) => {
                           let vm = this
                          let jobName = params.row.name
                          let isExpand = params.row.isExpand
                          let isDown = params.row.isDownname
                          let iconType = !isDown ? 'ios-arrow-forward' : 'ios-arrow-down'

                         function tableExpand(){
                            // vm.selectedColumn = params.column
                            // vm.tableExpand(params.row, params.index)
                            if(params.row.else){
                              vm.tableExpand(params, params.index)
                            }
                          }
                          if(!isExpand){
                            // console.log(params.row)
                            return(
                              <div style={params.row.else?"cursor: pointer":""} onClick={tableExpand}>
                                {params.row.else?<Icon type={iconType} style={"marginRight:5px"}/>:''}
                                <span>{jobName}</span>
                              </div>
                            )
                          }else{
                            return h('div', {style:{marginLeft:'25px'}},jobName)
                          }
                      }
                      // render:(h, params)=>{
                      //   let vm = this
                      //   function tableExpand(){
                      //     vm.selectedColumn = params.column
                      //     vm.tableExpand(params.row, params.index)
                      //   }
                      //   return(
                      //     <span onClick={tableExpand} style="cursor: pointer;">{params.row.name}</span>
                      //   )
                      // }
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        render: (h, params) => {
                           let vm = this
                          let jobName = params.row.name
                          let isExpand = params.row.isExpand
                          let isDown = params.row.isDownage
                          let iconType = !isDown ? 'ios-arrow-forward' : 'ios-arrow-down'

                          function tableExpand(){
                            if(params.row.elsetwo){
                              vm.tableExpand(params, params.index)
                            }
                          }
                          if(!isExpand){
                            // console.log(params.row)
                            return(
                              <div style={params.row.elsetwo?"cursor: pointer":""} onClick={tableExpand}>
                                {params.row.elsetwo?<Icon type={iconType} style={"marginRight:5px"}/>:''}
                                <span>{jobName}</span>
                              </div>
                            )
                          }else{
                            return h('div', {style:{marginLeft:'25px'}},age)
                          }
                      }
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
                        _expanded:false,
                        isDownname: true,
                        isDownage: true,

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
                        ],

                        elsetwo:[
                          {name: 'kkkk',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            job: 'Data engineer',
                            interest: 'badminton',
                            birthday: '1991-05-14'
                          },
                          {name: 'sss',
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
                        music: 'My Heart Will Go On',
                         _expanded:false,
                         isDownname: true,
                        isDownage: true,
                         elsetwo:[
                          {name: 'kkkk',
                            age: 18,
                            address: 'Nemmmmmkkaaaaaaark',
                            job: 'Data engineer',
                            interest: 'badminton',
                            birthday: '1991-05-14'
                          },
                          {name: 'ss999999s',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            job: 'Data engineer',
                            interest: 'badminton',
                            birthday: '1991-05-14'
                          },
                        ]
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
                        music: 'Don’t Cry',
                         _expanded:false,
                         isDownname: true,
                        isDownage: true,
                         else:[
                          {name: 'oo066666666666n',
                            address: 'New York No. 1 Lake Park',
                            job: 'Data engineer',
                            interest: 'badminton',
                            birthday: '1991-05-14'
                          },
                          {
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            job: 'Data engineer',
                            interest: 'badminton',
                            birthday: '1991-05-14'
                          },
                        ],
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
                        music: 'actor',
                          _expanded:false,
                         isDownname: true,
                        isDownage: true,
                        else:[
                          {name: 'oo0l,,,,n',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            job: 'Data engineer',
                            interest: 'badminton',
                            birthday: '1991-05-14'
                          },
                          {name: 'bkmkhihoin',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            job: 'Data engineer',
                            interest: 'badminton',
                            birthday: '1991-05-14'
                          },
                        ],

                        elsetwo:[
                          {name: '00p;.llllll',
                            address: 'New York No. 1 Lake Park',
                            job: 'Data engineer',
                            interest: 'badminton',
                            birthday: '1991-05-14'
                          },
                          {name: '7yhnnmmm',
                            age: 18,
                            address: 'New York No. 1 Lake Park',
                            interest: 'badminton',
                            birthday: '1991-05-14'
                          },
                        ]
                    }
                ]
            }
        },
        computed:{
          
        },
        methods:{
          getRowClass(row, index) {
            let res = []
            if (!row.else && !row.elsetwo)//即改行没有子元素时，添加row-expand-cover类
              res.push('row-expand-cover')
              return res
            /* if (row.operate == 2)
              res.push('hide-row')
            return res.join(' ') */
          },
          tableExpand(e,index){
            // console.log('tableexpand',e)
            let row = e.row
            // console.log(row.isDownage , row.isDownname,row.isDownage || row.isDownname)
            if(row.isDownage || row.isDownname){
              this.data9.forEach((item,itemIndex) => {
                if(itemIndex !== index){
                  item._expanded  = false
                  item.isDownname = item.isDownage = true
                  // console.log(item._expanded , item.isDownname , item.isDownage)
                }
              });
            }
            // console.log(e.column.key , this.selectedColumn, this.selectedColumn  && e.column.key !== this.selectedColumn.key)
            let toggle = this.selectedColumn  && e.column.key !== this.selectedColumn.key
            if(toggle){
              // console.log('dddddd',this.data9[index][`isDown${this.selectedColumn.key}`],e.column.key)
              this.data9[index][`isDown${this.selectedColumn.key}`] = true
            }
            this.selectedColumn = e.column
            
            // if(toggle) return

            // if(!row.else && !row.elsetwo)return
            this.data9.sort() //更新视图
                // for (let i = 0; i <  this.tableData.length; i++) {
                //     this.tableData[i]._expanded = false;   
                //     this.tableData[i]._text = "查看所有经停站"                       
                // } 
                //点击展开
                // if(toggle) {setTimeout(()=>{
                //   this.data9[index]._expanded = false
                // })}
                if (row._expanded) {  
                    // this.tableData.splice()  
                    // this.tableData.push()  
                    this.data9.sort() //更新视图 
                    this.data9[index]._expanded = false
                    // if(this.selectedColumn.key === "name"){
                      this.data9[index][`isDown${this.selectedColumn.key}`] = true
                    // }else if(this.selectedColumn.key === "age"){
                      // this.data9[index].isDownage = true
                    // }
                   if(toggle) {
                    //  setTimeout(()=>{
                      this.data9[index]._expanded = true
                      this.data9[index][`isDown${this.selectedColumn.key}`] = false
                      // console.log('eeeee')
                    // },200)
                    }
                    // this.tableData[index]._text = "查看所有经停站"                        
                }else{
                    this.data9.splice()  
                    this.data9[index]._expanded = true
                    // this.data9[index].isDown = false
                    if(this.selectedColumn.key === "name"){
                      this.data9[index].isDownname = false
                    }else if(this.selectedColumn.key === "age"){
                      this.data9[index].isDownage = false
                    }
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
  /* cursor: pointer; */
}

/deep/ td.ivu-table-expanded-cell{
    padding: 20px 0px 20px 0px !important;
}

/deep/.ivu-table-cell-expand .ivu-icon {
  display: none;
}
/deep/ .row-expand-cover.ivu-table-row {
  cursor: default;
}

</style>