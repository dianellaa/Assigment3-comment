const mongoose = require('mongoose')
const schema = mongoose.Schema

const comentSchema = new schema({
    coment: {
        type: String,
        required: true,
        minlength: 25,
   },
   article_id: {
       type: mongoose.Types.ObjectId,
       ref: 'article'
   }
})
const coment = mongoose.model("coment", comentSchema)
module.exports= coment 