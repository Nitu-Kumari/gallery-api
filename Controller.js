const fs=require('fs');
const path=require("path");


const galleryjson=require("./Gallery.json");
class Controller{
 static getAllGallerys(req,res){
res.json(galleryjson);
}



static addGallery(req, res) {
  const file= req.files.gallery;
  const filePath=path.join(__dirname,'./public',file.name);
  console.log(filePath);
  const wstream=fs.createWriteStream(filePath);
const buffer=file.data;
wstream.write(buffer);
wstream.end();
const response={
  name:file.name,
image:"http://localhost:7000/" +file.name
}
galleryjson.push(response);
   res.json(response);

 }
}
module.exports=Controller;



