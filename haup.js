function downloadFile() {
    const filePath = 'C:\Users\LENOVO\Desktop\NEA SEXY BITCH\TAPAWAN, NEA CHRISTEL - RESUME.zip';
    
    // Create a link element
    const link = document.createElement('a');
    link.href = filePath;

    // Set the download attribute to specify the filename
    link.download = 'C:\Users\LENOVO\Desktop\NEA SEXY BITCH\TAPAWAN, NEA CHRISTEL - RESUME.zip';

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}
