let catalog =[

    {
        _id:"1234",
        title:"comic Book",
        price:50.00,
        category:"drawing",
        image:"comics.jpg",
        type:"book",
    },
    {
        _id:"1235",
        title:"Page ink",
        price:30.00,
        category:"physical drawing",
        image:"pencilDrawing.png",
        type:"single",
    },
    {
        _id:"1236",
        title:"Digital Cover",
        price:40.00,
        category:"digital drawing",
        image:"concept.png",
        type:"single",
    },
    {
        _id:"1237",
        title:"Animation",
        price:140.00,
        category:"digital animation",
        image:"lobster.png",
        type:"single",
    },
    {
        _id:"1238",
        title:"Concept Art",
        price:30.00,
        category:"Digital",
        image:"concept2.png",
        type:"single",
    },
    {
        _id:"1239",
        title:"Logo Design",
        price:40.00,
        category:"digital drawing",
        image:"skull.png",
        type:"single",
    },
    {
        _id:"1240",
        title:"Graphic Tees",
        price:30.00,
        category:"Clothing",
        image:"tShirt.png",
        type:"single",
    },
    {
        _id:"1241",
        title:"Graphic Tees",
        price:30.00,
        category:"Clothing",
        image:"tShirt.png",
        type:"single",
    }
];

class DataService {

    getProducts () {
        return catalog;

        //to do : get catalog from server
    }

}

export default DataService;