import PropTypes from 'prop-types';

const Booked = ({ book }) => {
    console.log(book);
    return (
        <div className="text-xl font-semibold bg-white p-5 rounded-lg my-3">
            <h3>{ book.title}</h3>
        </div>
    );
};

Booked.propTypes = {
    book: PropTypes.object,
};

export default Booked;