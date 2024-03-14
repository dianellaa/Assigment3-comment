const article = require('./module/mongo')

const getHomePage = (req, res)=> {
  article.find()
 .populate('coment_id')
 .sort({_id: -1})
 .then((result) => {   
  res.render('index', {article: result, coment: result.coment_id})})
 .catch(err => console.log(err))
}


const createArticle = (req, res) => {
    const newArticle = new article(req.body)
    newArticle.save()
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
  }
  



module.exports = { 
    getHomePage, 
    createArticle
    

}