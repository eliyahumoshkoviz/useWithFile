const express = require("express"),
    router = express.Router(),
    multer = require('multer');

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        let folder = './uploads/others';
        
        if (file.mimetype === 'application/pdf') {
            folder = './uploads/pdf';
        } else if (file.mimetype.startsWith('image/')) {
            folder = './uploads/img';
        }

        cb(null, folder);
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        res.send(req.file);
    }
    catch (err) {
        res.status(400).send(err.messgae || err)
    }
})


module.exports = router;



