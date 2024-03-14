const article = require('./module/mongo')
const coment = require("./module/coment")

const NewComent = (req,res) => {
    const id = req.params.id
    const newcoment = new coment({coment:req.body.coment, article_id: id})
    newcoment.save()
    .then(()=>{
      article.findById(id)
      .then((art)=>{
      art.coment_id.push(newcoment._id)
      art.save()
      .then(()=>res.redirect(`/`))
      .catch((err)=>console.log(err))
      })
      .catch((err)=>console.log(err))
    })
    .catch((err)=>console.log(err))

  }



module.exports = {
    
     NewComent,
    
}