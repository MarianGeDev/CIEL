
document.addEventListener('DOMContentLoaded', () => {

    const catalogoDeProductos = [
        {
            id: 1,
            nombre: 'Glandularia Peruviana (Margarita Punzo)',
            imagen: 'img/fotos catalogo/1.Glandularia.jpg',
            imagenDetalle: 'img/descripcion/1glandulariadetalle.jpeg',
            Caracteristica1: 'Es rastrera, perenne. Tallos ascendentes. Hojas opuestas, ovadas. Flores: rojas, pubescentes, capituliformes. Fruto: esquizocarpo. Es ideal para cultivar en jardines como cubresuelo y techos verdes. Es polinizada por varias especies de mariposas. Es planta nutricia de la mariposa claudina (Tegosa claudina).',
            caracteristica2: 'Es una herbácea cubresuelos, que prospera bien en suelos pobres y bien drenados. En caso de cultivarlas en maceta, es preferible que sea en las de tipo jardineras para que pueda expandirse.Esta especie es hospedera de la mariposa "Claudina" (Tegosa claudina).',
            precio: 700,
        },

        {
            id: 2,
            nombre: 'Salvia guaranítica (Salvia Azul)',
            imagen: 'img/fotos catalogo/2.Salvia Guaranitica.jpg',
            imagenDetalle: 'img/descripcion/2gauraniticadetalle.jpeg ',
            Caracteristica1: 'Planta herbácea que puede alcanzar 1 m de altura. Perenne. Rizomatosa. Su parte aérea se seca durante los meses fríos. Vuelve a brotar a principios de la primavera. Hojas opuestas, pubescentes, aromáticas. Flores: inflorescencias en falsos racimos, azul violáceas, pubescentes. Fruto: clusas elipsoide-trígonas. Es polinizada principalmente por picaflores. Aunque también se pueden observar otros polinizadores como mariposas y Heminopteros.',
            caracteristica2: 'Es un arbusto de extensa floración. La parte aérea de la planta puede desaparecer y queda una base arbustiva de la que vuelve a rebrotar. Esta planta es ideal para borduras y canteros.',
            precio: 1400,
        },

        {
            id: 3,
            nombre: 'Asclepias curassavica (Banderita Española)',
            imagen: 'img/fotos catalogo/3.Asclepias curassavica.jpg',
            imagenDetalle: 'img/descripcion/3asclepsiadetalle.jpeg',
            Caracteristica1: 'No es autóctona de Argentina. Especie asilvestrada en la región, nativa de América tropical. Nutricia de las orugas de la mariposa Monarca del sur. Puede llegar a crecer hasta unos 70 cm de altura. Hojas opuestas, lanceoladas. Flores en forma de umbelas, con colores naranja y amarillo. Fruto en forma de folículo con semillas con pelos sedosos. Es ideal para cultivar en balcones, terrazas, jardines y parques. Tiene valor ornamental.',
            caracteristica2: 'Esta planta es hospedera de la oruga de las mariposas “Monarca” (Danaus erippus) y "Reina rojiza" (Danaus eresimus plexaure). Sus flores son polinizadas principalmente por abejas y sus semillas no solo son el alimento de aves granívoras, si no que también poseen un filamento que se dispersa con el viento y es utilizado por los pájaros para mullir el interior de sus nidos. Su mata es muy ornamental y tiene un largo período de floración. Se adapta bien a suelos arenosos, soporta heladas y contiene látex. ',
            precio: 1250,
        },

        {
            id: 4,
            nombre: 'Modiolastrum malvifolium (Malva Rastrera)',
            imagen: 'img/fotos catalogo/4.Modiolastrum malvifolium.jpg',
            imagenDetalle: 'img/descripcion/4malvadetalle.jpeg ',
            Caracteristica1: 'Hojas alternas. Flores solitarias, anaranjadas. Fruto en forma de Esquizocarpo.Es planta nutricia de las orugas de la mariposa Dama manchada. Es polinizada por insectos.',
            caracteristica2: 'Es una herbácea rastrera de pocos requerimientos y floración prolongada. Su parte aérea suele desaparecer en invierno para rebrotar rápidamente en primavera. Funciona bien en macetas, pero ideal para canteros y borduras.',
            precio: 1100,
        },

        {
            id: 5,
            nombre: 'Senna corymbosa (Sen de Campo)',
            imagen: 'img/fotos catalogo/5.senna.jpg',
            imagenDetalle: 'img/descripcion/5sendetalle.jpeg ',
            Caracteristica1: 'Árbol que puede alcanzar los 4 metros de altura. Posee hojas alternas, paripinnadas. Flores: en racimos apicales, con pétalos amarillos. Fruto: legumbre subcilíndrica. Ideal para cultivar en jardines, parques, plazas y veredas. También se adapta a grandes maceteros, lo que la hace indicada para cultivar en terrazas. Es planta nutricia de las mariposas Limoncito (Eurema deva), azufrada común (Phoebis sennae marcellina) y blanquita (Eurema albula sinoe). Sus hojas también son alimento del Celestino (Thraupis sayaca). La planta suele ser atacada por la larva de la avispa cierra',
            caracteristica2: 'Se recomienda no ubicarlo en lugares de paso ya que su polinizador es el abejorro. Sus frutos color dorado resultan ornamentales en el invierno, cuando se caen las hojas. Es una especie de amplia distribución natural en la Argentina.',
            precio: 1700,

        },

        {
            id: 6,
            nombre: 'Verbesina subcordata (Mirasolito)',
            imagen: 'img/fotos catalogo/6.Verbesina subcordata.jpg',
            imagenDetalle: 'img/descripcion/6verbesinadetalle.jpeg ',
            Caracteristica1: 'Es un subarbusto. Hojas alternas, lanceoladas. Flores marginales, amarillas. Semillas en forma de aquenios, alados en el margen. Es polinizada por diferentes insectos y en especial mariposas.',
            caracteristica2: 'Es una planta melífera que atrae a numerosas especies de abejas, abejorros, moscas y mariposas para su polinización. Sus semillas son alimento de aves granívoras y la abundancia de insectos atrae a aves insectívoras.',
            precio: 2100,
        },

        {
            id: 7,
            nombre: 'Pasiflora caerulea (Mburucuyá)',
            imagen: 'img/fotos catalogo/7.Pasiflora caerulea.jpg',
            imagenDetalle: 'img/descripcion/7mburucuyadetalle.jpeg',
            Caracteristica1: 'Sus flores son polinizadas por abejorros del género Xylocopa y de sus frutos se alimentan las aves frugívoras. Esta especie es hospedera de las mariposas “Espejito” (Dione vanillae), "Juno" (Dione juno), "Julia" (Dryas julia alcionea), "Almendra común" (Heliconius eratus), "Hortensia" (Euptoieta hortensia) y "Moneta" (Dione moneta moneta), entre otras. ',
            caracteristica2: ' Es una trepadora de vistosas flores y frutos comestibles. Es ideal para cercos y alambrados, pero se debe evitar su uso en lugares de mucho tránsito.',
            precio: 900,
        },

        {
            id: 8,
            nombre: 'Cardiospermum grandiflorum (Globito Cipó)',
            imagen: 'img/fotos catalogo/8.Cardiospermum grandiflorum.jpg',
            imagenDetalle: 'img/descripcion/8globitodetalle.jpeg ',
            Caracteristica1: 'Esta especie es hospedera de la mariposa "Frotadora-Oscura común" (Calycopis caulonia). Sus flores son polinizadas por moscas, abejas, mariposas y avispas, que sirven de alimento para las aves insectívoras.',
            caracteristica2: 'Es una trepadora con llamativos frutos globosos. Esta especie es ideal para cubrir pérgolas o alambrados',
            precio: 1300,
        }]

    let carrito = [];

    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    //Estructura del carrito

    function renderizarProductos() {
        catalogoDeProductos.forEach((producto) => {

            let content = document.createElement('div');
            content.classList.add('card', 'col-sm-4');

            let contentCardBody = document.createElement('div');
            contentCardBody.classList.add('card-body');

            let contentTitle = document.createElement('h5');
            contentTitle.classList.add('card-title');
            contentTitle.textContent = producto.nombre;

            let contentImagen = document.createElement('img');
            contentImagen.classList.add('img-fluid');
            contentImagen.setAttribute('src', producto.imagen);

            let contentPrecio = document.createElement('p');
            contentPrecio.classList.add('card-text', 'text');
            contentPrecio.textContent = `${divisa} ${producto.precio}`;

            //boton para agregar al carrito

            const contentBotonCarrito = document.createElement('button');
            contentBotonCarrito.classList.add('btn', 'btn-danger');
            contentBotonCarrito.textContent = 'Agregar al Carrito';
            contentBotonCarrito.setAttribute('marcador', producto.id);
            contentBotonCarrito.addEventListener('click', agregarProductoAlCarrito);

            //boton para el detalle de los productos

            const miBotonDetalle = document.createElement('button');
            miBotonDetalle.classList.add('btn', 'btn-success', 'mx-auto');
            miBotonDetalle.textContent = '+ Detalle';
            miBotonDetalle.setAttribute('data-producto-id', producto.id);
            miBotonDetalle.addEventListener('click', mostrarDetalleProducto);


            contentCardBody.appendChild(contentImagen);
            contentCardBody.appendChild(contentTitle);
            contentCardBody.appendChild(contentPrecio);
            contentCardBody.appendChild(contentBotonCarrito);
            contentCardBody.appendChild(miBotonDetalle);
            content.appendChild(contentCardBody);
            DOMitems.appendChild(content);

        });
    }

    //ventana que muestra el detalle del producto

    function mostrarDetalleProducto(evento) {
        const productoId = evento.target.getAttribute('data-producto-id');
        window.location.href = `detalleProducto.html?id=${productoId}`;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const productoId = parseInt(urlParams.get('id'));

    // Buscar el producto con el ID en el catálogo
    const productoDetalle = catalogoDeProductos.find((producto) => {
        return producto.id === productoId;
    });

    if (productoDetalle) {
        // Mostrar los detalles en la página
        document.querySelector('#nombre').textContent = productoDetalle.nombre;
        document.querySelector('#imagen').src = productoDetalle.imagenDetalle;
        document.querySelector('#descripcion').textContent = productoDetalle.Caracteristica1;
        document.querySelector('#caracteristica2').textContent = `Tener en cuenta: ${productoDetalle.caracteristica2}`;
        document.querySelector('#precio').textContent = `${divisa} ${productoDetalle.precio}`;

    } else {
        console.log('Producto no encontrado.');
    }
 
    const botonesAgregar = document.querySelectorAll('.btn-danger');
    botonesAgregar.forEach((boton) => {
        boton.style.fontSize = '0.9rem';
        boton.style.marginTop = '10px'; 
    });

  
    const botonesBorrar = document.querySelectorAll('.btn-danger.mx-5');
    botonesBorrar.forEach((boton) => {
        boton.style.marginLeft = '0'; 
    });

   
    const precios = document.querySelectorAll('.card-text.text');
    precios.forEach((precio) => {
        precio.style.fontSize = '0.9rem';
    });


    //sumar producto al carrito:
    function agregarProductoAlCarrito(evento) {
        carrito.push(parseInt(evento.target.getAttribute('marcador')));
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }

    //ver los productos que se agregan al carrito:

    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((producto) => {
            const miItem = catalogoDeProductos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(producto);
            });
          
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === producto ? total += 1 : total;
            }, 0);
          
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} : ${divisa} ${miItem[0].precio}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.producto = producto;
            miBoton.addEventListener('click', borrarItemCarrito);

            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        DOMtotal.textContent = calcularTotal();
    }

    //borrar elemento del Carrito

    function borrarItemCarrito(evento) {
        const productoId = parseInt(evento.target.dataset.producto);
        carrito = carrito.filter((carritoId) => {
            return carritoId !== productoId;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }

    //calcular el precio total:
    function calcularTotal() {
        return carrito.reduce((total, productoId) => {
            const miItem = catalogoDeProductos.find((itemBaseDatos) => {
                return itemBaseDatos.id === productoId;
            });
            return total + miItem.precio;
        }, 0).toFixed(2);
    }

    // Vaciar el carrito 
    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();
    }

    //localStorage

    function guardarCarritoEnLocalStorage() {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage() {
        if (miLocalStorage.getItem('carrito') !== null) {
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    DOMbotonVaciar.addEventListener('click', vaciarCarrito);


    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();

});

// fetch / json -- uso de fotos de la Api de pixabay --

let thumbnails = document.getElementById('thumbnailImages');

let url = 'https://pixabay.com/api/?key=21719173-f62a37d59a040ade40aa59656&q=butterflies+flowers+&image_type=photo&pretty=true';
fetch(url)
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((datosFotos) => {
        console.log(datosFotos.hits[0].pageURL);
        datosFotos.hits.forEach((foto, index) => {
            // fotos pequeñas
            let thumbnail = document.createElement('img');
            thumbnail.src = foto.previewURL;
            thumbnail.alt = foto.tags;
            thumbnail.classList.add('thumbnail', 'mx-1');

            // eventos
            thumbnail.addEventListener('mouseenter', () => {
                thumbnail.style.transform = 'scale(1.1)';
            });

            thumbnail.addEventListener('mouseleave', () => {
                thumbnail.style.transform = 'scale(1)';
            });

            thumbnails.appendChild(thumbnail);
        });
    })
    .catch((error) => {
        console.log('Tenemos un error ' + error + ' !!!');
    });










































































































































