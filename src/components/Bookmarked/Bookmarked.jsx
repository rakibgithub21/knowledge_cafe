import Booked from "../Book/Booked";
import PropTypes from 'prop-types';

const Bookmarked = ({ bookMarked }) => {
    console.log(bookMarked);
    return (
        <div className="bg-[#1111110d] my-3 p-7 rounded-xl">
            <h3 className="text-2xl font-bold">Bookmarked Blogs :{bookMarked.length} </h3>
            <div>
                {
                    bookMarked.map((book,idx) => <Booked
                        key={idx}
                        book={book}
                    ></Booked>)
                }
            </div>
        </div>
    );
};

Bookmarked.propTypes = {
    bookMarked: PropTypes.array,
};

export default Bookmarked;