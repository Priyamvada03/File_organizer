let fs=require('fs')
let path=require('path')
function treefn(dirpath){
    if(dirpath==undefined){
        console.log("Please enter a valid path")
    }else{
        let doesexist=fs.existsSync(dirpath);
        if(doesexist==true){
            treeHelper(dirpath," ")
        }
    }
}
function treeHelper(targetpath, indent){
    let isFile=fs.lstatSync(targetpath).isFile()
    if(isFile==true){
        let fileName=path.basename(targetpath)
        console.log(indent+"├──"+fileName)

    }
    else{
        let dirName =path.basename(targetpath)
        console.log(indent+"├──"+dirName)
        let children = fs.readdirSync(targetpath)
        for(let i=0;i<children.length;i++){
            let childPath= path.join(targetpath,children[i])
            treeHelper(childPath,indent+"\t")
        }
    }
}

module.exports={
    treeKey :treefn
}