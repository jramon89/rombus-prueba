(function(){

    const skills = document.querySelector('.skills');
    const areas = document.querySelectorAll('.areas li');
    const categories = document.querySelector('.item-categories');
    const sub = document.querySelector('.categories.sub');

    const hideElements = document.querySelectorAll('.content .hide');

    const CATEGORIES = {
        em: [
            { title: 'Desarrollo de Negocio Digital', sub: [
                    { title: 'Marca Lider' },
                    { title: 'Empresa Grande' },
                    { title: 'PyME' },
                    { title: 'Micro Empresa / Emprendimeinto' },
                    { title: 'Institución / ONG' }
                    ]
            },
            { title: 'Marca e Imagen Corporativa / Branding', sub: false },
            { title: 'Estrategia de contenidos y Comunicación', sub: false },
            { title: 'Marketing de Social Media', sub: false },
            { title: 'Reputación online', sub: false },
            { title: 'Estrategia de crecimiento (Growth Hacking)', sub: false },
            { title: 'Estrategia de Experiencia de Consumidor', sub: false },
            { title: 'Generación de Propesctos (Leads)', sub: false },
            { title: 'Gestión de Campaña Digital', sub: false },
            { title: 'Optimización en Buscadores (SEM)', sub: false },
            { title: 'Estrategias de ventas online', sub: false },
            { title: 'Relaciones Públicas', sub: false },
            { title: 'Marketing de Influencers', sub: false },
            { title: 'Investigación y Análisis de Mercado', sub: false }
        ],
        dc: [
            { title: 'Creación de Marca e identidad Corporative', sub: false },
            { title: 'Diseño Web', sub: false },
            { title: 'Diseño de Aplicación', sub: [
                    { title: 'Android' },
                    { title: 'IOS' },
                    { title: 'Desktop' }
                ]
            },
            { title: 'Diseño UX: Experiencia de usuario', sub: false },
            { title: 'Diseño Gráfico', sub: false },
            { title: 'Diseño Editorial', sub: false },
            { title: 'Diseño Industrial', sub: false },
            { title: 'Diseño de Indumentaria y Moda', sub: false },
            { title: 'Redacción', sub: false },
            { title: 'Traducción a idiomas', sub: false },
            { title: 'Fotografía', sub: false },
            { title: 'Ilustraciones', sub: false },
            { title: 'Animaciones', sub: false },
            { title: 'Video', sub: false },
            { title: 'Audio y Sonido', sub: false },
        ],
        pc: [
            { title: 'Creatividad Publicitaria', sub: false },
            { title: 'Planificación de Medios', sub: false },
            { title: 'Publicidad Digital', sub: false },
            { title: 'Gestion de Campaña Publicitaria', sub: [
                    { title: 'Pay Per Click' },
                    { title: 'Otra' }
                ] },
            { title: 'Publicidad en Redes Sociales (Social Ads)', sub: false },
            { title: 'Publicidad BTL', sub: false },
            { title: 'Eventos', sub: false },
            { title: 'Prensa', sub: false },
            { title: 'Estrategia multiformato 360', sub: false },
        ],
        pt: [
            { title: 'Interfaz de Usuario - Diseño UI / Front-End', sub: false },
            { title: 'Programación Web', sub: [
                    { title: 'Website' },
                    { title: 'Landing Page' },
                    { title: 'Mail' },
                    { title: 'Arreglo de website (bug)' },
                    { title: 'Otro' }
                ]
            },
            { title: 'Plataforma de Gestión de Contenidos (CMS)', sub: false },
            { title: 'Desarrollo de Aplicaciones', sub: false },
            { title: "Integración de API's", sub: false },
            { title: 'Comercio Electrónico', sub: false },
            { title: 'Juegos', sub: false },
            { title: 'Control de Calidad', sub: false },
            { title: 'Sistémas', sub: false },
            { title: 'Redes', sub: false },
            { title: 'Seguridad Informática', sub: false },
            { title: 'Inteligencia de Negocios / BI (Bussines Intelligence)', sub: false },
            { title: 'Soporte', sub: false }
        ]
    }

    areas.forEach(function (el, i) {
        el.addEventListener('click', function () {

            areas.forEach(function (e) { e.classList.remove('selected') })
            el.classList.add('selected')
            //categories.style.display="block";

            //skills.classList.add(el.id);

            let bg = '';

            switch (el.id) {
                case 'em':
                    bg = '#d01d00'
                    break;
                case 'dc':
                    bg = '#fcb040'
                    break;
                case 'pc':
                    bg = '#0e76bc'
                    break
                case 'pt':
                    bg = '#9f1f63'
                    break;
                default:
                    bg = '#d01d00'

            }

            skills.style.setProperty('--color-tmp', bg);

            hideElements.forEach(function (e) { e.style.display="block" })

            let li = '';
            let subCat = '';

            CATEGORIES[el.id].forEach(function (items) {
                li += "<li class='item' id="+el.id+" data-sub="+!!items.sub.length+"><div>"+items.title+"</div></li>";

                categories.querySelector('.list-categories ul').innerHTML = li;

                sub.classList.remove('active');

                if (items.sub) {
                    items.sub.forEach(function (items) {
                        console.log('subCat', items)
                        subCat += "<li class='item' id=" + el.id + " data-sub=true><div>" + items.title + "</div></li>";
                        sub.innerHTML = subCat;

                    })
                }

                categories.querySelectorAll('li').forEach(function(el) {
                    el.addEventListener('mouseover', function () {
                        categories.querySelectorAll('li').forEach(function (e) { e.classList.remove('selected') })
                        el.classList.add('selected');
                        if(el.dataset.sub === "true") {
                            sub
                                .classList
                                .add('active')
                        } else {
                            sub
                                .classList
                                .remove('active')
                        }
                    })
                })
            })


        })
    })

})();