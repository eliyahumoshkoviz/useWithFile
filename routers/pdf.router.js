const PDFDocument = require('pdfkit');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/file', async (req, res) => {
    try {
        const doc = new PDFDocument();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="pdf_data.pdf"');

        doc.pipe(res);

        doc.fontSize(25)
            .text('Get Information', { align: 'center' })
            .moveDown()
            .fontSize(16)
            .text('Displaying', { align: 'center' });


        doc.end();
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
});

router.get('/download-pdf', (req, res) => {
    const pdfPath = path.join(__dirname, '../uploads/pdf/file-1721031586733-753046991');

    if (fs.existsSync(pdfPath)) {
        res.contentType("application/pdf");
        fs.createReadStream(pdfPath).pipe(res);
    } else {
        res.status(404).send("PDF file not found");
    }
});

module.exports = router;
