<template>
    <div>
      <Table 
      :columns="columns10" 
      :data="data9"
      :row-class-name="getRowClass"
      ></Table>
      <Button @click="showModel">編輯</Button>
      <div>{{ treeData}}</div>
      <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <Input 
          prefix="ios-search"
          v-model="value14"
          placeholder="Enter something..."
          @on-enter="searchTree"
          clearable
          @on-clear="initData" />
        <Tree 
        :data="dataSearch" 
        show-checkbox
        @on-check-change="selectedNode"></Tree>
    </Modal>
    </div>
    
</template>
<script>
    import expandRow from './table-expand.vue';
    import Fragment from '../components/Fragment.vue'
    export default {
        components:{
          Fragment
        },
        data () {
            return {
              treeData:['leaf 2-2222'],
              checkedNode:[],
              dataCopy:[],
              dataSearch:[],
              modal1:false,
              selectedColumn:'',
              value14:'',
              arr:[],
              data1: [
                    {
                        title: 'parent 1',
                        expand: true,
                        checked: false,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true,
                                        checked: false,
                                        children: [
                                          {
                                              title: 'leaf 2-2222',
                                              checked: false,
                                          },
                                          {
                                              title: 'leaf 1-2-1-1',
                                              checked: false,
                                          }
                                      ]
                                    },
                                    // {
                                    //     title: 'leaf 1-1-2',
                                    //     checked: false,
                                    // }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                checked: false,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        checked: false,
                                    },
                                    {
                                        title: 'leaf 1-2-2',
                                        checked: false,
                                    }
                                ]
                            }
                        ]
                    }
                ],
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
                                },
                                on:{
                                  //监听子组件showDetail事件
                                    showDetail:value => {
                                    //确保dom更新完成
                                    // console.log(value)
                                    this.modal1=true
                                      // this.$nextTick(() => {
                                      //   this.toDetail(value[0]);
                                      // })
                                    }
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
                            return h('div', {style:{marginLeft:'25px'}},jobName)
                          }
                      }
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        render: (h,params) =>{
                          let vm=this
                          function clickDropdown(name){
                              vm.clickDropdown(name,params.row)
                          }

                          return (
                            <span>{params.row.address.name}
                            <Dropdown trigger="click" on-on-click={clickDropdown}>
                              <Tooltip content="更多選擇" placement="right" transfer>
                                  <a href="javascript:void(0)">
                                    <Icon type="md-more"/>
                                </a>
                              </Tooltip>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="look" disabled = {params.row.address.isLook}>
                                      <Icon type="ios-glasses-outline" />
                                      <span>閱讀</span>
                                    </DropdownItem>
                                    <DropdownItem name="download" disabled = {params.row.address.isDownload}>
                                      <Icon type="ios-cloud-download-outline" />
                                      <span>下載</span>
                                    </DropdownItem>
                                    <DropdownItem name="print" disabled = {params.row.address.isPrint}>
                                      <Icon type="ios-print-outline" />
                                       <span>列印</span>
                                    </DropdownItem>
                                    <DropdownItem name="delete">
                                      <Icon type="ios-trash-outline" />
                                      <span>刪除</span>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            </span>
                          )
                        }
                    },
                    {
                        title: '操作',
                        render: (h, params) => {
                           let vm = this
                           return(
                             <Fragment>
                               <Button onClick={()=>{this.modal1 = true}}>編輯</Button>
                                <Button>查看</Button>
                            </Fragment>
                           )
                           
                      }
                    }
                ],
                data9: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 
                          {
                            name:'New York',
                            isLook: false,
                            isDownload: true,
                            isPrint: false
                          }
                        ,
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
                        address: 
                          {
                            name:'London No. 1 Lake Park',
                            isLook: true,
                            isDownload: true,
                            isPrint: true
                          }
                        ,
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
                        address: 
                          {
                            name:'Sydney No. 1 Lake Park',
                            isLook: true,
                            isDownload: true,
                            isPrint: false
                          }
                        ,
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
                        address: 
                          {
                            name:'Ottawa No. 2 Lake Park',
                            isLook: false,
                            isDownload: false,
                            isPrint: false
                          }
                        ,
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
        created(){

          // this.dataSearch = JSON.parse(JSON.stringify(this.data1))
          // this.dataCopy = JSON.parse(JSON.stringify(this.data1))
          // this.structureTree(this.dataCopy)
          // console.log(this.data1)
          // this.$api.name
          // .getList()
          // .then(res => {
          //   console.log(res)
          //   // this.accountList = res.data;
          // })
          // .catch(err => {
          //   console.log(err);
          // });
          // console.log(this.$api.name.getList())
        },
        mounted(){
          // let aaa = this.$store.dispatch('permission','abc')
          let aaa = this.commonFun.permissionJudge('ccc')
          console.log(aaa)
        },
        computed:{
          
        },
        watch:{
          value14(){
            if(!this.value14){
              // console.log(this.filterSelectedNode(this.dataCopy))
              this.initTreeData()
              // this.filterSelectedNode(this.dataCopy)
            }
          }
        },
        methods:{
          initTreeData(){
            this.dataSearch = JSON.parse(JSON.stringify(this.data1))
            this.dataCopy = JSON.parse(JSON.stringify(this.data1))
            // this.structureTree(this.dataCopy)
            this.commonFun.constructureNode(this.dataCopy,(childNode,node)=>{
              childNode.parent = node
              childNode.checked = false
              childNode.expand = false
            })
            console.log(this.dataCopy)
            this.filterSelectedNode(this.dataCopy)
          },
          resetSeletedTreeNode(data){
            for(let i=0; i<=data.length-1;i++){
              let node = data[i]
              if(node.children&&node.children.length>0){
                this.resetSeletedTreeNode(node.children)
              }else{
                node.checked = false
              }
            }
          },
          // recursive(data){
          //   console.log(data.length)
          //   for(var i=0; i<=data.length-1;i++){
          //     let node =data[i]
          //     if(node.children&&node.children.length>0){
          //       node.parent = data
          //       this.recursive(node.children)
          //     }
          //   }
          //   console.log(data)
          // },
          getRowClass(row) {
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
          ok () {
            console.log(this.treeData)
              // this.treeData = this.checkedNode
              this.$Message.info('Clicked ok');
          },
          cancel () {
                this.$Message.info('Clicked cancel');
          },
          clickDropdown(name,row){
              // console.log(row)
              switch(name){
                case 'delete':
                  this.$Modal.confirm({
                    title: `要刪除「${row.name}」嗎?`,
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
                  break
              }
              // console.log(name)
            },
          searchTree(){
              // console.log('ddddddddddddd')

              // console.log(this.data1)
              // this.dataCopy = JSON.parse(JSON.stringify(this.data1))
              // console.log('ddddddddddddd')
              // this.structureTree('filterSearchNode',this.dataCopy)
              this.initTreeData()
              this.filterSearchNode(this.dataSearch)
          },
      //     expandRow(params){
			// //判断当前行是否展开，如果未展开，执行以下方法，先展开再请求接口加载到data9中当前data index 后
      //       if(!this.data9[params.index].isDown){
      //         // getRecordData().then(res => {
      //         // 	return res.data
      //         //     }).then( data => {
      //               this.data9[params.index].isDown = true
      //               let newArrayData = this.data9[params.index].else
      //               this.data9[params.index].totals = newArrayData.length //将展开操作查询到的数据总条数加到当前行数据的totals上
      //               newArrayData.map( item =>{
      //                 item.isExpand = true
      //                 item.upLevelIndex = params.index
      //               })
      //         newArrayData.map( (value, key) =>{
      //           this.data9.splice(params.index + key + 1, 0, value)
      //         })
      //         // })
      //       }else{//如果当前行已展开，则隐藏
      //         this.data9[params.index].isDown = false
      //         this.data9.splice(params.index + 1, params.row.totals)
      //       }
      //     }
      showModel(){
        this.modal1 = true
        this.resetSeletedTreeNode(this.data1)
        this.initTreeData()
        // console.log(this.data1)
        // console.log(this.data1,this.treeData)
        // this.data1.forEach
      },
      structureTree(tree){
          for (let idx in tree){
            this.constructureNode(tree[idx])
          } 
        // else if(type==='filterSearchNode'){
        //   for (let idx in tree){
        //     this.filterSearchNode(tree[idx])
        //   } 
        // }
        
      },
      constructureNode(node){
        // console.log(nodes)
        // nodes.forEach(node=>{
          // node.parent = nodes
          // console.log(node)
          if(node.children&&node.children.length>0){
            node.children.forEach(childNode=>{
              childNode.parent = node
            })
            this.structureTree(node.children) 
          }
        // })
      },
      filterSelectedNode(data){
        console.log(this.dataCopy)
        // console.log('filterSelectedNode',data)
         for(var i=0; i<=data.length-1;i++){
              let node =data[i]
              if(node.children && node.children.length>0){
              node.children.forEach(childNode=>{
                // console.log('filterSelectedNode',childNode)
                if(childNode.children){
                  this.filterSelectedNode(childNode.children)
                }else{
                  this.treeData.forEach(data=>{
                    if(childNode.title === data){
                      console.log('childNode',childNode.title,data)
                      childNode.checked = true
                    }
                  })
                }
              })
            }else{
              this.treeData.forEach(data=>{
                if(node.title === data){
                console.log('node',node)
                  node.checked = true
                }
              })
          }
          // console.log('filterSelectedNode',this.dataCopy)
        }
        this.dataSearch = Object.assign([],this.dataCopy)

          // console.log(this.arr)
      },
      selectedNode(selectedNodes, selectedNode){
        let vm = this

        function resetTreeNode(data){
          for(let i=0; i<=data.length-1;i++){
              let node =data[i]
              // console.log(node)
              if(node.children && node.children.length>0){
                node.children.forEach(childNode=>{
                  if(childNode.children){
                    resetTreeNode(childNode.children)
                  }else{
                    childNode.checked = false
                  }
                })
              }else{
                node.checked = false
            }
        }
        }

        function recursive(data){
          for(let i=0; i<=data.length-1;i++){
              let node =data[i]
              // console.log(node)
              if(node.children && node.children.length>0){
                node.children.forEach(childNode=>{
                  if(childNode.children){
                    recursive(childNode.children)
                  }else{
                     let checkedNode = selectedNodes.filter((node)=> !node.children)
                      // console.log(checkedNode)
                      checkedNode.forEach(data=>{
                        // console.log(node,selectedNodes)
                        if(childNode.title === selectedNode.title){
                          childNode.checked = true
                        }
                      })
                  }
                })
              }else{
                // node.checked=false
                let checkedNode = selectedNodes.filter((node)=> !node.children)
                // console.log(checkedNode)
                checkedNode.forEach(data=>{
                  // console.log(node,selectedNodes)
                  if(node.title === selectedNode.title){
                    node.checked = true
                  }
                })
                // this.treeData = this.childNode
                // console.log(node)
            }
        }
        }

        resetTreeNode(this.data1)
        // console.log(this.data1)
        recursive(this.data1)

      this.checkedNode = []
      // console.log(this.treeData)
      let checkedNode = selectedNodes.filter((node)=> !node.children)
      checkedNode.forEach((node)=>{
        this.checkedNode.push(node.title)
      })

      if(!selectedNode.checked){
        this.treeData.splice(this.treeData.indexOf(selectedNode.title),1)
        // this.treeData = [this.treeData,...this.checkedNode].flat()
        // this.treeData = this.treeData.filter((data,index)=>{
        //   return this.treeData.indexOf(data) === index
        // })
        // console.log(this.treeData)
      }else{
        // console.log(this.treeData)
      }
      this.treeData = [this.treeData,...this.checkedNode].flat()
      this.treeData = this.treeData.filter((data,index)=>{
          return this.treeData.indexOf(data) === index
        })
      },
      filterSearchNode(treeData){
        // console.log(treeData)
          if(!this.value14){
            this.filterSelectedNode(this.dataCopy)
            return
          }
          for(let i=treeData.length-1; i>=0;i--){
            let node = treeData[i]
            // console.log(node)
            if(node.children && node.children.length>0){
              // console.log(node)
              this.filterSearchNode(node.children)
            }else{
              // console.log(node.title,node.title.indexOf(this.value14))
              if(node.title.indexOf(this.value14)<0){
                // console.log(node)
                  treeData.splice(i,1)
                }
            }
            // console.log(node)
            if(node.children && node.children.length ===0){
              // console.log(node,i)
                treeData.splice(i,1)
              }
          }

           if(this.dataCopy[0] && this.dataCopy[0].children && this.dataCopy[0].children.length===0){
              this.dataCopy = []
            }
            // console.log('ccccccccccccc')

        this.dataSearch = Object.assign([],this.dataCopy)
        
      },
      initData(){
        // console.log(this.data1)
        this.dataSearch = this.data1
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

/deep/ .ivu-dropdown{
  margin-left: 5px;
}

/deep/ .ivu-dropdown-item span{
  margin-left: 5px;
}

</style>