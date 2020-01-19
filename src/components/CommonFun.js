export default{
    constructureNode(tree, callback){
        for(let i=0; i<tree.length; i++){
            let node = tree[i]
          if(node.children&&node.children.length>0){
            node.children.forEach(childNode=>{
            callback(childNode,node)
            })
            this.constructureNode(node.children,callback) 
          }  
        }
    },
    permissionJudge(value) {
      // let list = store.getters.getMenuBtnList;
      let list = ['aaa','bbb']

      // for (let item of list) {
        // console.log(item)
        if (list.indexOf(value)>-1) {
          return true;
        }
      // }
      return false;
    }
}