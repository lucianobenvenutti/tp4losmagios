const sillas = [
    {
        "id": 1,
        "name": "Victoria",
        "image": "data:image/jpeg;base64,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",
        "type": "Clasica",
        "info": "Cerveza rubia"
    },
    {
        "id": 2,
        "name": "Poker",
        "image": "https://d2j6dbq0eux0bg.cloudfront.net/images/79909753/3248405084.jpg",
        "type": "Clasica",
        "info": "Clasica fuerte"
    },
    {
        "id": 3,
        "name": "Cristal",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD22XL7DSnnr3z_QGwP75bvqh9-RpPaq8MFA&usqp=CAU",
        "type": "Clasica",
        "info": "Blonde suave"
    },
    {
        "id": 4,
        "name": "Black spirits",
        "image": "https://i.pinimg.com/236x/03/8b/3b/038b3b2f95e63c70097b73c57ebdaea9.jpg",
        "type": "Clasica",
        "info": "Ipa negra"
    },
    {
        "id": 5,
        "name": "Brahma",
        "image": "https://vinosdealtascumbres.com/wp-content/uploads/2022/05/Cerveza-Brahma-Botella-710ml.jpg",
        "type": "Artesanal",
        "info": "Fuerte aromatica"
    },
    {
        "id": 6,
        "name": "Salta",
        "image": "https://vinosdealtascumbres.com/wp-content/uploads/2021/10/Cerveza_Salta_Negra.jpg",
        "type": "Artesanal",
        "info": "Light"
    },
    {
        "id": 7,
        "name": "Cusqueña",
        "image": "https://asbperu.com/wp-content/uploads/2022/10/Cerveza-Cuzquena-Trigo-620ML.jpg",
        "type": "Artesanal",
        "info": "Honey"
    },
    {
        "id": 8,
        "name": "Budweiser",
        "image": "https://www.drogueriasviva.com/images/products/7702004110565.jpg",
        "type": "Artesanal",
        "info": "Indian pale ale"
    },
    {
        "id": 9,
        "name": "Clausthaler",
        "image": "https://inspiravinoteca.com/web/image/product.template/7732/image_512/Cerveza%20Clausthaler%20Sin%20Alcohol%20Botella?unique=5efd7d6",
        "type": "Importada",
        "info": "Mexican"
    },
    {
        "id": 10,
        "name": "Patagonia",
        "image": "https://mauimarket.com.ar/wp-content/uploads/2020/05/amber-1.jpg",
        "type": "Importada",
        "info": "Rusa"
    },


    {
        "id": 11,
        "name": "Cusqueña",
        "image": "https://d3ugyf2ht6aenh.cloudfront.net/stores/082/352/products/ndice11-182273d0ede81aacb116470191638956-640-0.jpg",
        "type": "Importada",
        "info": "Alemana"
    },
    {
        "id": 12,
        "name": "Corona",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmXsKPyAlzNGoq7xIt8fq8YyRkPIsiNKrdA&usqp=CAU",
        "type": "Importada",
        "info": "Americana"
    },

]