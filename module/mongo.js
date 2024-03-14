
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.URI_DB)
.then(() => console.log(`DB is connectd`))
.catch(err => console.log(err))


const schema = mongoose.Schema
const articleSchema = new schema({
    text: {
         type: String,
         required: true,
          minlength: 25,
    },
    coment_id: [{
        type: mongoose.Types.ObjectId,
        ref: 'coment'  
    }]
})
const article = mongoose.model('article', articleSchema);

module.exports = article;



