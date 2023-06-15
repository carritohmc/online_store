import axios from "axios";

let catalog =[

    {
        "_id":"1234",
        "title":"comic Book",
        "price":50.00,
        "category":"physical drawing",
        "image":"comics.jpg",
        "type":"book",
    },
    {
        "_id":"1235",
        "title":"Page ink",
        "price":30.00,
        "category":"physical drawing",
        "image":"pencilDrawing.png",
        "type":"single",
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
        category:"animation",
        image:"lobster.png",
        type:"single",
    },
    {
        _id:"1238",
        title:"Concept Art",
        price:30.00,
        category:"Digital drawing",
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
        title:"Custom Shoes",
        price:60.00,
        category:"Clothing",
        image:"shoes.png",
        type:"single",
    }
];

class DataService {

    serverUrl ="http://127.0.0.1:5000";

   async getProducts () {
       // return catalog;

       //axios to get data from server
     const results = await axios.get(this.serverUrl + "/api/products");
     return results.data;
    }

    async getCategories (){
        const results = await axios.get(this.serverUrl + "/api/reports/categories");
        return results.data;

    }

    async getCoupons (){
        const results = await axios.get(this.serverUrl + "/api/coupons");
        return results.data;

    }

    async saveProduct(product){

        const response = await axios.post(this.serverUrl + "/api/products", product);
        return response.data; 
    }


}

export default DataService;