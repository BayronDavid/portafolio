const express   = require('express')
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

// Initializations
const app = express()

// Middle-wares
app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/uploads')
}).single('img'))


// Settings
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Routes
app.use(require('./routes/index.routes.js'))
// Start server
app.listen(app.get('port'), ()=> {
    console.log('Server on port ' + app.get('port'))
    }
)