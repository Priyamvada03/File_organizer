const fs =require("fs")
const path = require('path')

let types = {
       media: ["mp4", "mkv", "mp3"],
       archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
       documents: [
         "docx",
         "doc",
         "pdf",
         "xlsx",
         "xls",
         "odt",
         "ods",
         "odp",
         "odg",
         "odf",
         "txt",
         "ps",
         "tex",
       ],
       app: ["exe", "dmg", "pkg", "deb"],
     };


function organizefn(dirpath){
    if(dirpath==undefined){
        console("Please enter a valid path")
    }
    else{
        ispath=fs.existsSync(dirpath)
        if(ispath==true){
        destPath=path.join(dirpath,'organisedFiles')
        if(fs.existsSync(destPath)==false){
                  fs.mkdirSync(destPath)
        }
        else{
            console.log("this file already exists")
        }}
        else{
            console.log("lease enter a valid path")
        }
    }
   organizeHelper(dirpath,destPath) 
}

function getCategory(name){
    let exten=path.extname(name)
    exten=exten.slice(1)

    for(let type in types){
        let n=types[type]
        for(let i=0;i< n.length;i++){
            //console.log(n[i])
            if(exten==n[i])
                //console.log(extn)
                return type;
            }
        }
        return 'others'
    }

    function organizeHelper(src,dest){
        let arry=fs.readdirSync(src)
        for(let i=0;i<arry.length;i++){
            newpath=path.join(src,arry[i])
            var stats = fs.statSync(newpath);
            let isfle=stats.isFile()
      // Use isFile() method to log the result to screen
         //  console.log('is file ? ' + stats.isFile());
           if(isfle==true){
               let fileCategory=getCategory(arry[i]);
               tranferFiles(newpath,fileCategory,dest)
              //console.log(fileCategory)
           }
        }
      }

function tranferFiles(srcFilePath,  fileCategory,dest) {
    let catPath = path.join(dest, fileCategory); // here we are making file categories paths
  
    if (fs.existsSync(catPath) == false) {
      // checking for category folder path
      fs.mkdirSync(catPath);
    }
  
    let fileName = path.basename(srcFilePath); /// we took out the names of the files
    let destFilePath = path.join(catPath, fileName); // here we created a path for the files in category folders
  
    fs.copyFileSync(srcFilePath, destFilePath); // copied files from src to dest
  
    fs.unlinkSync(srcFilePath); // deleted the files from src
  
    
  }
  module.exports={
      organizeKey:organizefn
  }
