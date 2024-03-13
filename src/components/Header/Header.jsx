import logo from '../../assets/profile.png'
const Header = () => {
    return (
        <nav className='container mx-auto '>
            <div className='flex justify-between py-3 items-center'>
                <h3 className='text-3xl font-semibold'>Knowledge Cafe</h3>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <hr />
        </nav>
    );
};

export default Header;