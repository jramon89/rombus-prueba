(function(){


    const items = document.querySelectorAll('.areas .item');

    items.forEach(function (e) {
        e.addEventListener('click', function (item) {
           for (let i = 0; this.parentElement.children.length >= i; i++) {
                if (this.parentElement.children[i]) {
                    this.parentElement.children[i].classList.remove('active');
                }
            }
            this.classList.add('active');
            document.querySelector("#"+e.dataset.id).style.display="block";

            document.querySelectorAll('.content a.hide').forEach(function (e) {
                e.style.display="block";
            });
        })


    })


})();