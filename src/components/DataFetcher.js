import React, {useEffect, useState} from "react";
import axios from "axios";

const DataFetcher = () => {
    const [userData, setUserData] = useState("");

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then(response =>{
            setTimeout(() => {
                setUserData(response.data.products);
                console.log(userData);
            }, 1000)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            { userData !== ""
            ? <div>
                <h1> Data Fetched From API </h1>
                <p className="userData"> {'{'} </p>
                <p className="products"> "products": {'['} </p>
                {
                    userData.map(item => (
                        <div>
                            <p className="item"> {'{'} </p>
                                <p className="attribute"> "id" : {item.id} </p>
                                <p className="attribute"> "title" : {item.title} </p>
                                <p className="attribute"> "description" : {item.description} </p>
                                <p className="attribute"> "price" : {item.price} </p>
                                <p className="attribute"> "discountPercentage" : {item.discountPercentage} </p>
                                <p className="attribute"> "rating" : {item.rating} </p>
                                <p className="attribute"> "stock" : {item.stock} </p>
                                <p className="attribute"> "brand" : {item.brand} </p>
                                <p className="attribute"> "category" : {item.category} </p>
                                <p className="attribute"> "thumbnail" : {item.thumbnail} </p>
                                <p className="attribute"> "images" : {'['} </p>
                                    {
                                        item.images.map(image => (
                                            <p className="image"> {image} </p>
                                        ))
                                    }
                                <p className="attribute"> {']'} </p>
                            <p className="item"> {'},'} </p>
                        </div>
                    )) 
                }
                <p className="products"> {']'} </p>
                <p className="userData"> {'}'} </p>
            </div>
            : <p className="loading"> Loading... </p> }
        </div>
    )
}

export default DataFetcher;