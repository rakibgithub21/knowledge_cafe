import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import Time from "../components/Time/Time";
import Bookmarked from "../components/Bookmarked/Bookmarked";

const Main = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const [bookMarked, setBookMarked] = useState([])

    const addToBookmark = (product) => {
        if (bookMarked.length < 2) {
            if (bookMarked.includes(product)) {
                alert('You select this')
                return bookMarked
            }
            else {
                const newProduct = [...bookMarked, product];
                setBookMarked(newProduct)
            }
        }
        else {
            alert('Only select 2 items');
            return;

        }

    }
    // console.log(bookMarked);
    return (
        <div className="flex container mx-auto my-10 gap-5">
            <div className="w-2/3">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToBookmark={addToBookmark}
                    ></Product>)
                }
            </div>
            <div className="w-1/3">
                <Time></Time>
                <Bookmarked bookMarked={bookMarked}></Bookmarked>
            </div>
        </div>
    );
};

export default Main;