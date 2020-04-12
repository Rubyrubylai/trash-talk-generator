const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const generateTrashTalker = require('./generate_trash_talker')
const Handlebars = require('handlebars')

Handlebars.registerHelper('ifEquals', function(a, b, options) {
    if (a === b){
        console.log(this)
        return options.fn(this)
    }
    else{
        return options.inverse(this)
    }
})

app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const options = req.query
    const jobs = req.query.target
    console.log(jobs)

    const trashTalker = generateTrashTalker(options)
    res.render('index', {trashTalker: trashTalker, jobs: jobs})
})

app.listen(port, () => {
    console.log('app is listening')
})