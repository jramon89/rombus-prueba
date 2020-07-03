(function () {

    const dropCanvas = document.querySelector('.dashed-square');

    dropCanvas.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false)
    dropCanvas.addEventListener('dragenter', function (e) {
        e.preventDefault();
        this.style.opacity="0.5"
    }, false)

    dropCanvas.addEventListener('dragleave', function (e) {
        e.preventDefault();
        this.style.opacity="1"
    }, false)

    dropCanvas.addEventListener('drop', function (e) {
        e.preventDefault();
        this.innerHTML='<div class="dropped-content">\n' +
            '<img src="../images/Archivo.png" alt="">\n' +
            '<div>Nombre del archivo <span class="del">(eliminar)</span></div>\n' +
            '</div>';
        //this.querySelector('.dropped-content').style.display="flex"
        this.style.opacity="1"
    }, false)

    dropCanvas.addEventListener('click', function () {
        this.querySelector('input').click();
    })

    dropCanvas.querySelector('input').onchange =function () {
        dropCanvas.innerHTML='<div class="dropped-content">\n' +
            '<img src="../images/Archivo.png" alt="">\n' +
            '<div>Nombre del archivo <span class="del">(eliminar)</span></div>\n' +
            '</div>';
    }

})();