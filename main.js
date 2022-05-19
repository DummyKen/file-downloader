const fileInput = document.querySelector('input'),
downloadBtn = document.querySelector('button');

downloadBtn.addEventListener('click', e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading file...";
    fetchFile(fileInput.value);
})

function fetchFile(url){
    fetch(url).then(res => res.blob()).then(file => {
        //URL.createObjectURL creates a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl; // passing tempUrl as href value of <a> tag
        aTag.download = "filename"; //passing filename as download value of <a> tag
        document.body.appendChild(aTag);
        aTag.click(); //clicking the tag so the file download starts
        aTag.remove(); // removing the a tag once the file download
        URL.revokeObjectURL(tempUrl);
    });
}