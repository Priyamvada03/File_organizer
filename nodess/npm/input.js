let organizee=require("./moduless/organise")
let helps=require("./moduless/help")
let trees=require("./moduless/tree")

let fs=require("fs")
let path=require("path")
let input=process.argv.slice(2)
let destPath
let types = {
    media: ["mp4", "mkv", "mp3"],
    images : ["JPG","png"],
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


switch(input[0]){
case 'tree':
    trees.treeKey(input[1])
break;
case 'organize':
    console.log(organizee.organizeKey(input[1]))
    break;
case 'help':
    helps.helpKey()
    break;
}



