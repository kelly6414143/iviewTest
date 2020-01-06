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
    }
}