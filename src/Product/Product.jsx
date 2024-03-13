import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";


const Product = ({ product, addToBookmark }) => {
    // console.log(product);
    const { cover, title, author_img, hashtags, author, reading_time, posted_date } = product;

    return (
        <div className='space-y-5 mb-10'>
            <img className='w-full rounded-xl' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center gap-2'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold '>{author}</h3>
                        <p className='text-[#11111199] font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex  items-center gap-2'>
                    <h3 className='text-[#11111199] text-xl font-semibold'>{reading_time} min read</h3>
                    <button onClick={() => addToBookmark(product)}><FaBookmark className='text-purple-500 text-xl' /></button>
                </div>
            </div>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <div className='flex gap-3 text-[#11111199] font-medium text-xl'>
                {hashtags.map((hash, idx) => <p key={idx}>#{hash}</p>)}
            </div>
            <button  className='text-[#6047EC] text-xl font-medium underline'>Mark as read</button>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.object,
    addToBookmark: PropTypes.func,
};
export default Product;

