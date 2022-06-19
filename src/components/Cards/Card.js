import React from "react";
import Product1 from './p1.jpg';
import Product2 from './p2.jpg';
import Product3 from './p3.jpg';
import "./Card.css";

const Card = () => {
 const items = [
    {
        id: 1,
        Img: Product1 ,
        title: "T-shirts",
        discription: "Lorem ipsum dolor sit amet laborum.",
        price: "Rs. 2000",
    },
    {
        id: 2,
        Img: Product2 ,     
        title: "Sneakers",
        discription: "Lorem ipsum dolor sit amet laborum.",
        price: "Rs. 2000",
    },
    {
        id: 3,
        Img: Product3 ,     
        title: "Denim Jeans",
        discription: "Lorem ipsum dolor sit amet laborum.",
        price: "Rs. 2000 ",
    },
]

return(
    <div>
        <div className="content" id="products">
            <h3>Products</h3>
            <div className="product">
            {items.map((item) => (
                <div className="box" key={item.id}>
                    <img src={item.Img} alt="img" className="img"/>
                    <div className="discription">
                        <h6 className="text">{item.title}</h6>
                        <p className="text">{item.discription}</p>
                        <p className="text">{item.price}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
);
}

export default Card;