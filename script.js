window.addEventListener('DOMContentLoaded', function() {
    var generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', generateMeme);

    function generateMeme() {
        var memeImg = document.getElementById('meme-img');
        var textTop = document.getElementById('text-top').value;
        var textBottom = document.getElementById('text-bottom').value;

        var canvas = document.createElement('canvas');
        canvas.width = memeImg.naturalWidth;
        canvas.height = memeImg.naturalHeight;
        var ctx = canvas.getContext('2d');

        ctx.drawImage(memeImg, 0, 0, canvas.width, canvas.height);

        ctx.font = '30px Arial';
        ctx.fillStyle = 'black'; // Cambia el color del texto a negro
        ctx.textAlign = 'center';

        ctx.fillText(textTop, canvas.width / 2, 40);
        ctx.fillText(textBottom, canvas.width / 2, canvas.height - 20);

        var dataURL = canvas.toDataURL('image/jpeg');

        var downloadLink = document.getElementById('download-link');
        downloadLink.href = dataURL;
        downloadLink.style.display = 'block';

        var memePreviewImg = document.getElementById('meme-preview-img');
        memePreviewImg.src = dataURL;
    }

    var downloadLink = document.getElementById('download-link');
    downloadLink.addEventListener('click', function() {
        var imgData = canvas.toDataURL('image/jpeg');
        downloadLink.href = imgData;
    });
});
