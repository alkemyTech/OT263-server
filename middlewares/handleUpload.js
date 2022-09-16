const multer = require('multer')

const storage = multer.memoryStorage()

const fileFilter = (req, file, cb) => {
	if (file.mimetype.split('/')[0] === 'image') {
		cb(null, true)
	} else {
		cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'), false)
	}
}

const upload = multer({
	storage,
	fileFilter,
	limits: { fileSize: 5000000, files: 1 }
})

module.exports = upload.single('image')

// app.use((error, req, res, next) => {
// 	if (error instanceof multer.MulterError) {
// 		if (error.code === 'LIMIT_FILE_SIZE') {
// 			return res.status(400).json({
// 				message: 'File is too large'
// 			})
// 		}

// 		if (error.code === 'LIMIT_FILE_COUNT') {
// 			return res.status(400).json({
// 				message: 'File limit reached'
// 			})
// 		}

// 		if (error.code === 'LIMIT_UNEXPECTED_FILE') {
// 			return res.status(400).json({
// 				message: 'File must be an image'
// 			})
// 		}
// 	}
// })
