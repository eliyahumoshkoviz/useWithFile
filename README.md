Express Application with File Uploads and PDF Generation
This repository contains an Express.js application that demonstrates file uploads using multer and PDF generation using PDFKit.

Prerequisites
Node.js installed on your machine
Getting Started
1. Clone the repository:
2. Install dependencies:
3. Navigate to http://localhost:5050 in your web browser to see the application running.

File Uploads
The /upload endpoint handles file uploads using multer middleware.
Files are stored in different directories (uploads/others, uploads/pdf, uploads/img) based on their MIME type.


PDF Generation
The /file endpoint generates a sample PDF using PDFKit and streams it back to the client.
The /download-pdf endpoint serves a pre-generated PDF file (pdf_data.pdf) stored in uploads/pdf.

API Endpoints
/upload: POST endpoint for uploading files.

/file: GET endpoint for generating and streaming a PDF.
/download-pdf: GET endpoint for downloading a pre-existing PDF file.
Contributing
Feel free to fork the repository and submit pull requests for any improvements or additional features.

License
This project is licensed under the MIT License - see the LICENSE file for details.
