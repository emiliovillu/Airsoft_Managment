const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const uploadFolderPath = path.join( global.__base, process.env.UPLOAD_FOLDER )


const app = express()
const upload = multer({
  dest: uploadFolderPath
})

const uploadCloudinary = require('./handlers/uploadCloudinary')

// app.use( express.static(path.join(__dirname, '../client/dist')))

router.post('/upload', upload.single('file'), uploadCloudinary, (req, res) => {
  const { imageLink } = req
  res.status(200).json( { imageLink } );
})


module.exports = router