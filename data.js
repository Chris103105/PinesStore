// ==========================================
// CONFIGURACIÓN PRINCIPAL
// ==========================================
const numeroWhatsApp = "50369755464 "; // Reemplaza esto con tu número real
const categorias = ['Todos', 'Snoopy', 'Hello Kitty', 'Gumball', 'Hollow Knight', 'Ajolotes', 'Pines de Plástico','Zelda','Rick y Morty']; // Agrega más categorías según sea necesario

// ==========================================
// INVENTARIO DE PINES (Base de datos)
// ==========================================
const pines = [
    // --- Categoria: SNOOPY  ---
    { 
        id: 1, name: 'Snoopy Diseño 1', category: 'Snoopy', price: 2.75, bestSeller: true,
        desc: 'El clásico beagle en esmalte duro.', 
        fullDesc: 'Pin metálico de Snoopy con detalles precisos. Perfecto para tu colección o chaqueta.', 
        material: 'Metal y esmalte', size: '3.0 cm x 2.0 cm', 
        imageUrls: [
            './img/Snoopy1.png' // Cambiar por foto real
        ]
    },

  { 
        id: 2, name: 'Snoopy Diseño 2', category: 'Snoopy', price: 2.75, bestSeller: true,
        desc: 'El clásico beagle en esmalte duro.', 
        fullDesc: 'Pin metálico de Snoopy con detalles precisos. Perfecto para tu colección o chaqueta.', 
        material: 'Metal y esmalte', size: '3.2 cm x 2.0 cm', 
        imageUrls: [
            './img/SNP3.jpeg' // Cambiar por foto real
        ]
    },


      { 
        id: 3, name: 'Snoopy Diseño 3', category: 'Snoopy', price: 2.75, bestSeller: true,
        desc: 'El clásico beagle en esmalte duro.', 
        fullDesc: 'Pin metálico de Snoopy con detalles precisos. Perfecto para tu colección o chaqueta.', 
        material: 'Metal y esmalte', size: '3.2 cm x 2.8 cm', 
        imageUrls: [
            './img/SNP1.jpeg' // Cambiar por foto real
        ]
    },

      { 
        id: 4, name: 'Snoopy Diseño 4', category: 'Snoopy', price: 2.75, bestSeller: true,
        desc: 'El clásico beagle en esmalte duro.', 
        fullDesc: 'Pin metálico de Snoopy con detalles precisos. Perfecto para tu colección o chaqueta.', 
        material: 'Metal y esmalte', size: '3.5 cm x 2.0 cm', 
        imageUrls: [
            './img/SNP4.jpeg' // Cambiar por foto real
        ]
    },

      { 
        id: 5, name: 'Snoopy Diseño 5', category: 'Snoopy', price: 2.75, bestSeller: true,
        desc: 'El clásico beagle en esmalte duro.', 
        fullDesc: 'Pin metálico de Snoopy con detalles precisos. Perfecto para tu colección o chaqueta.', 
        material: 'Metal y esmalte', size: '3.3 cm x 2.6 cm', 
        imageUrls: [
            './img/GB7.jpeg' // Cambiar por foto real
        ]
    },


      { 
        id: 6, name: 'Snoopy Diseño 6', category: 'Snoopy', price: 2.75, bestSeller: true,
        desc: 'El clásico beagle en esmalte duro.', 
        fullDesc: 'Pin metálico de Snoopy con detalles precisos. Perfecto para tu colección o chaqueta.', 
        material: 'Metal y esmalte', size: '3.2 cm x 2.0 cm', 
        imageUrls: [
            './img/Snopy 2.png' // Cambiar por foto real
        ]
    },

      { 
        id: 7, name: 'Snoopy Diseño 7', category: 'Snoopy', price: 2.75, bestSeller: true,
        desc: 'El clásico beagle en esmalte duro.', 
        fullDesc: 'Pin metálico de Snoopy con detalles precisos. Perfecto para tu colección o chaqueta.', 
        material: 'Metal y esmalte', size: '3.0 cm x 3.0 cm', 
        imageUrls: [
            './img/SNP2.jpeg' // Cambiar por foto real
        ]
    },

      { 
        id: 8, name: 'Snoopy Diseño 8', category: 'Snoopy', price: 2.75, bestSeller: true,
        desc: 'El clásico beagle en esmalte duro.', 
        fullDesc: 'Pin metálico de Snoopy con detalles precisos. Perfecto para tu colección o chaqueta.', 
        material: 'Metal y esmalte', size: '3.0 cm x 2.3 cm', 
        imageUrls: [
            './img/Gb8.jpeg' // Cambiar por foto real
        ]
    },

      { 
        id: 9, name: 'Snoopy Diseño 9', category: 'Snoopy', price: 2.75, bestSeller: true,
        desc: 'El clásico beagle en esmalte duro.', 
        fullDesc: 'Pin metálico de Snoopy con detalles precisos. Perfecto para tu colección o chaqueta.', 
        material: 'Metal y esmalte', size: '3.2 cm x 2.0 cm', 
        imageUrls: [
            './img/SNP10.jpeg' // Cambiar por foto real
        ]
    },
       { 
        id: 35, name: 'Snoopy Diseño 9', category: 'Snoopy', price: 2.75, bestSeller: true,
        desc: 'El clásico beagle en esmalte duro.', 
        fullDesc: 'Pin metálico de Snoopy con detalles precisos. Perfecto para tu colección o chaqueta.', 
        material: 'Metal y esmalte', size: '3.2 cm x 2.4 cm', 
        imageUrls: [
            './img/SNP9.png' // Cambiar por foto real
        ]
    },
  

  // --- Categoría: Rick y Morty  ---
    { 
        id: 36, name: 'Rick  ', category: 'Rick y Morty', price: 2.75, bestSeller: false,
        desc: 'Pertenece a Rick con una cara  coleccionismo.', 
        fullDesc: 'Un diseño   bordes metálicos  para coleccionismo y fans del anime.', 
        material: 'Metal y esmalte', size: '3.2 cm x 2.6 cm', 
        imageUrls: [
            './img/RICK1.png' // Cambiar por foto real
        ]
    },

    { 
        id: 37, name: 'Rick  ', category: 'Rick y Morty', price: 2.75, bestSeller: false,
        desc: 'Pertenece a Rick , una franquicia muy querida por fans  el anime y el coleccionismo.', 
        fullDesc: 'Un diseño   bordes metálicos  para coleccionismo y fans del anime.', 
        material: 'Metal y esmalte', size: '3.5 cm x 3.0 cm', 
        imageUrls: [
            './img/RICK2.png' // Cambiar por foto real
        ]
    },

    { 
        id: 38, name: 'Rick  ', category: 'Rick y Morty', price: 2.75, bestSeller: false,
        desc: 'Pertenece a Rick , una franquicia muy querida por fans  el anime y el coleccionismo.', 
        fullDesc: 'Un diseño   bordes metálicos  para coleccionismo y fans del anime.', 
        material: 'Metal y esmalte', size: '3.5 cm x 3.0 cm', 
        imageUrls: [
            './img/RICK3.png' // Cambiar por foto real
        ]
    },
 





    // --- Categoría: AJOLOTES  ---
    { 
        id: 10, name: 'Ajolote ', category: 'Ajolotes', price: 2.50, bestSeller: false,
        desc: 'Tierno ajolote con acabado brillante.', 
        fullDesc: 'Un diseño  con colores vibrantes y bordes metálicos . ', 
        material: 'Metal y esmalte', size: '3.0 cm x 2.8 cm', 
        imageUrls: [
            './img/ANR1.jpeg' // Cambiar por foto real
        ]
    },
      // --- Categoría: AJOLOTES  ---
    { 
        id: 11, name: 'Ajolote ', category: 'Ajolotes', price: 2.50, bestSeller: false,
        desc: 'Tierno ajolote con acabado brillante.', 
        fullDesc: 'Un diseño  con colores vibrantes y bordes metálicos pulidos.', 
        material: 'Metal y esmalte', size: '2.8 cm x 2.7 cm', 
        imageUrls: [
            './img/ANR2.jpeg' // Cambiar por foto real
        ]
    },
  { 
        id: 12, name: 'Ajolote ', category: 'Ajolotes', price: 2.50, bestSeller: false,
        desc: 'Tierno ajolote con acabado brillante.', 
        fullDesc: 'Un diseño  con colores vibrantes y bordes metálicos pulidos.', 
        material: 'Metal y esmalte', size: '2.6 cm x 2.5 cm', 
        imageUrls: [
            './img/ANR3.jpeg' // Cambiar por foto real
        ]
    },
     { 
        id: 13, name: 'Ajolote ', category: 'Ajolotes', price: 2.50, bestSeller: false,
        desc: 'Tierno ajolote con acabado brillante.', 
        fullDesc: 'Un diseño  con colores vibrantes y bordes metálicos pulidos. ', 
        material: 'Metal y esmalte', size: '2.5 cm x 2.9 cm', 
        imageUrls: [
            './img/ANR4.jpeg' // Cambiar por foto real
        ]
    },


    

    // --- CATEGORÍA: HOLLOW KNIGHT (METAL) (Tienes 1 en total) ---
    
      { 
        id: 15, name: 'The Knight (Metal)', category: 'Hollow Knight', price: 3.75, bestSeller: true,
        desc: 'Detalles metálicos finamente pulidos.', 
        fullDesc: 'Exclusiva pieza metálica  artículo de colección duradero y elegante.', 
        material: 'Metal y esmalte ', size: '5.2 cm x 2.8 cm', 
        imageUrls: [
            './img/Holl2.jpeg'
        ]
    },

     { 
        id: 16, name: 'Silksong Hornet (Metal)', category: 'Hollow Knight', price: 3.50, bestSeller: true,
        desc: 'Detalles metálicos finamente pulidos.', 
        fullDesc: ' pieza metálica del videojuego Hollow Knight.', 
        material: 'Metal y esmalte premium', size: '5.0 cm x 2.4 cm', 
        imageUrls: [
            'https://i.etsystatic.com/15508601/r/il/2034d5/2755048279/il_1080xN.2755048279_jwyy.jpg'
        ]
    },
      { 
        id: 17, name: 'The Knight (Metal)', category: 'Hollow Knight', price: 3.50, bestSeller: true,
        desc: 'Detalles metálicos finamente pulidos.', 
        fullDesc: ' pieza metálica artículo de colección  elegante.', 
        material: 'Metal y esmalte ', size: '4.0 cm x 3.5 cm', 
        imageUrls: [
            'https://i.etsystatic.com/51832931/r/il/5ef6c6/6397434803/il_fullxfull.6397434803_42tb.jpg'
        ]
    },
     { 
        id: 33, name: 'The Knight ', category: 'Hollow Knight', price: 2.75, bestSeller: false,
        desc: 'Versión ligera del personaje clásico.', 
        fullDesc: 'Toda la esencia de Hollow Knight .', 
        material: 'Metal y esmalte', size: '3.5 cm x 2.8 cm', 
        imageUrls: [
            './img/Holl1.jpg' // Cambiar por foto real
        ]
    },






    // --- CATEGORÍA: GUMBALL (Tienes 9 en total) ---
    { 
        id: 18, name: 'Gumball Watterson', category: 'Gumball', price: 2.75, bestSeller: false,
        desc: 'Pin colorido de la popular serie animada.', 
        fullDesc: 'Dale un toque divertido y pop a tu outfit. Acabados de alta calidad que capturan a la perfección la esencia del personaje.', 
        material: 'Metal y esmalte', size: '3.0 cm x 2.8 cm', 
        imageUrls: [
            './img/GB1.jpeg'
        ]
    },
    { 
        id: 19, name: 'Gumball Wattersongumball y darwin', category: 'Gumball', price: 2.75, bestSeller: false,
        desc: 'Pin colorido de la popular serie animada.', 
        fullDesc: ' Acabados de alta calidad que capturan a la perfección la esencia de los  personajes con doble broche para mejor agarre.', 
        material: 'Metal y esmalte', size: '3.5 cm x 3.4 cm', 
        imageUrls: [
            './img/GB2.jpeg'
        ]
    },
    { 
        id: 20, name: 'Gumball Wattersongumball y darwin', category: 'Gumball', price: 2.75, bestSeller: false,
        desc: 'Pin colorido de la popular serie animada.', 
        fullDesc: 'Pin divertido  de alta calidad .', 
        material: 'Metal y esmalte', size: '3.0 cm x 2.0 cm', 
        imageUrls: [
            './img/GB3.jpeg'
        ]
    },
    { 
        id: 21, name: 'Anaís Watterson', category: 'Gumball', price: 2.75, bestSeller: false,
        desc: 'Pin popular serie animada.', 
        fullDesc: ' Acabados de alta calidad que capturan a la perfección la esencia del personaje.', 
        material: 'Metal y esmalte', size: '2.5 cm x 3.0 cm', 
        imageUrls: [
            './img/GB4.jpeg'
        ]
    },
    { 
        id: 22, name: 'Darwin Watterson', category: 'Gumball', price: 2.75, bestSeller: false,
        desc: 'Pin colorido de la popular serie animada.', 
        fullDesc: 'Dale un toque divertido  a tu outfit.', 
        material: 'Metal y esmalte', size: '2.5 cm x 3.1 cm', 
        imageUrls: [
            './img/GB5.jpeg'
        ]
    },
    { 
        id: 23, name: 'Gumball Wattersongumball y darwin', category: 'Gumball', price: 2.75, bestSeller: false,
        desc: 'Pin colorido de la popular serie animada.', 
        fullDesc: 'Dale un toque divertido y pop a tu outfit. Acabados de alta calidad que capturan a la perfección la esencia del personaje.', 
        material: 'Metal y esmalte', size: '3.0 cm x 2.5 cm', 
        imageUrls: [
            './img/GB6.jpeg'
        ]
    },
   





    // --- CATEGORÍA: HELLO KITTY ---
    { 
        id: 24, name: 'Hello Kitty ', category: 'Hello Kitty', price: 2.75, bestSeller: true,
        desc: 'Pin  con acabado brillante.', 
        fullDesc: 'Detallado pin de Hello Kitty con  Sus colores vibrantes y bordes metálicos pulidos la hacen resaltar elegantemente .', 
        material: 'Metal pulido y esmalte suave', size: '2.8 cm x 2.2 cm', 
        imageUrls: [
            './img/HK1.jpeg' // Recuerda crear la carpeta hello-kitty y poner tu foto ahí
        ]
    },
    { 
        id: 25, name: 'Hello Kitty ', category: 'Hello Kitty', price: 2.75, bestSeller: true,
        desc: 'Pin  con acabado brillante.', 
        fullDesc: 'Detallado pin de Hello Kitty con Sus colores vibrantes y bordes metálicos pulidos la hacen resaltar elegantemente .', 
        material: 'Metal pulido y esmalte suave', size: '3.1 cm x 2.2 cm', 
        imageUrls: [
            './img/HK2.jpeg' // Recuerda crear la carpeta hello-kitty y poner tu foto ahí
        ]
    },
    { 
        id: 26, name: 'Hello Kitty ', category: 'Hello Kitty', price: 2.75, bestSeller: true,
        desc: 'Pin  con acabado brillante.', 
        fullDesc: 'Detallado pin de Hello Kitty con Sus colores vibrantes y bordes metálicos pulidos la hacen resaltar elegantemente .', 
        material: 'Metal pulido y esmalte suave', size: '2.8 cm x 2.2 cm', 
        imageUrls: [
            './img/HK3.jpeg' // Recuerda crear la carpeta hello-kitty y poner tu foto ahí
        ]
    },
    { 
        id: 27, name: 'Hello Kitty ', category: 'Hello Kitty', price: 2.75, bestSeller: true,
        desc: 'Pin  con acabado brillante.', 
        fullDesc: 'Detallado pin de Hello Kitty con Sus colores vibrantes y bordes metálicos pulidos la hacen resaltar elegantemente .', 
        material: 'Metal pulido y esmalte suave', size: '2.8 cm x 2.2 cm', 
        imageUrls: [
            './img/HK4.jpeg' // Recuerda crear la carpeta hello-kitty y poner tu foto ahí
        ]
    },
    { 
        id: 28, name: 'Hello Kitty ', category: 'Hello Kitty', price: 2.75, bestSeller: true,
        desc: 'Pin  con acabado brillante.', 
        fullDesc: 'Detallado pin de Hello Kitty con Sus colores vibrantes y bordes metálicos pulidos la hacen resaltar elegantemente .', 
        material: 'Metal pulido y esmalte suave', size: '2.8 cm x 2.0 cm', 
        imageUrls: [
            './img/HK5.jpeg' // Recuerda crear la carpeta hello-kitty y poner tu foto ahí
        ]
    },
    { 
        id: 29, name: 'Hello Kitty Premium', category: 'Hello Kitty', price: 2.75, bestSeller: true,
        desc: 'Pin  con acabado brillante.', 
        fullDesc: 'Detallado pin de Hello Kitty con Sus colores vibrantes y bordes metálicos pulidos la hacen resaltar elegantemente .', 
        material: 'Metal pulido y esmalte suave', size: '2.8 cm x 2.6 cm', 
        imageUrls: [
            './img/HK6.jpeg' // Recuerda crear la carpeta hello-kitty y poner tu foto ahí
        ]
    },
    { 
        id: 30, name: 'Hello Kitty Premium', category: 'Hello Kitty', price: 2.75, bestSeller: true,
        desc: 'Pin  con acabado brillante.', 
        fullDesc: 'Detallado pin de Hello Kitty con Sus colores vibrantes y bordes metálicos pulidos la hacen resaltar elegantemente .', 
        material: 'Metal pulido y esmalte suave', size: '2.5 cm x 2.8 cm', 
        imageUrls: [
            './img/HK7.jpeg' // Recuerda crear la carpeta hello-kitty y poner tu foto ahí
        ]
    },

    // --- CATEGORÍA: PINES DE PLÁSTICO ---
    
    // PIZZA STEVE (Tienes 4 en total)
    { 
        id: 31, name: 'Pizza Steve', category: 'Pines de Plástico', price: 3.50, bestSeller: false,
        desc: 'Diseño ligero en acrílico/plástico.', 
        fullDesc: 'Divertido pin de Pizza Steve fabricado en plástico resistente. Súper ligero, ideal para mochilas sin añadir peso extra.', 
        material: 'Plástico / Acrílico', size: '3.5 cm x 2.0 cm', 
        imageUrls: [
            'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80&w=500&h=500' // Cambiar por foto real
        ]
    },

    // FLORES (Tienes 4 en total)
    { 
        id: 32, name: 'Flor de Primavera', category: 'Pines de Plástico', price: 3.00, bestSeller: false,
        desc: 'Pin plástico con motivos florales.', 
        fullDesc: 'Hermoso diseño botánico en material ligero. Cuenta con cierre de seguridad en la parte trasera.', 
        material: 'Plástico', size: '2.5 cm x 2.5 cm', 
        imageUrls: [
            'https://images.unsplash.com/photo-1596568359539-78150db60b09?auto=format&fit=crop&q=80&w=500&h=500' // Cambiar por foto real
        ]
    },

    // Zelda  (Tienes 1 en total)
    { 
        id: 34, name: 'Zelda', category: 'Zelda', price: 3.00, bestSeller: false,
        desc: 'Pin de Zelda con diseño detallado.', 
        fullDesc: 'Un pin inspirado en el personaje de Zelda, con un diseño detallado y colores vibrantes.', 
        material: 'Metal', size: '3.2 cm x 2.5 cm', 
        imageUrls: [
            'https://nizestore.com/cdn/shop/files/broche-pin-escudo-zelda-con-espada-the-legend-of-zelda-901461.jpg?v=1731406066&width=1946' // Cambiar por foto real
        ]
    }
    
];
