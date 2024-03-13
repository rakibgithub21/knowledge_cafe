import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";
import Time from "../components/Time/Time";
import Bookmarked from "../components/Bookmarked/Bookmarked";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
                toast.warn('You Select this before!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    
                });
                return bookMarked
            }
            else {
                const newProduct = [...bookMarked, product];
                setBookMarked(newProduct)
            }
        }
        else {
            toast.warn('You can select only 2 items at a time!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
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
            <ToastContainer />
        </div>
    );
};

export default Main;