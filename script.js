/* github link */
function redirectToGitHub(url) {
    window.location.href = url;
}

/* to download resume */
document.getElementById('downloadBtn').addEventListener('click', function() {
    // URL of the PDF document
    var pdfUrl = 'https://drive.google.com/file/d/1lvX1f1ll78vEVHs8U4mhEaYNAyRg6gbM/view?usp=sharing';

    // Creating an invisible anchor element to trigger the download
    var a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'document.pdf'; // Name of the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});