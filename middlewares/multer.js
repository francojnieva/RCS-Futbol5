const multer = require('multer')
const path = require('path')

const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return cb(new Error('Formato incorrecto'), false)
        }
        cb(null, true)  
    }
})

module.exports = upload

