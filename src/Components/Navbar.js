import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="h-[50px] w-full bg-white-900 border flex">
            <div className="left-container flex w-50%">
                <img 
                className="h-[44px] ml-[30px]"
                src="https://thewasserstoff.com/images/logo-top.png"
                alt="thewasserstoff-icon"
                />
                <h1 className="h-[50px] ml-[2px] mt-[10px]">WASSERSTOFF</h1>

                <div className="flex mt-[9px] ml-[72px] w-430 relative">
                    <input
                        className="bg-gray-200 h-[28px] w-[460px] rounded-lg pl-3 pr-10" // Adjusted width of input
                        style={{
                            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvVqNgAJxG-4iH9xEgNJMXui2fbzcKkDEhg&usqp=CAU')",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 7px center", // Positioned the background image to the right and vertically centered
                            backgroundSize: "24px 24px",
                            paddingRight: "40px" // Adjusted padding-right to accommodate the search icon
                        }}
                        placeholder="Search..."
                        value={''}
                    />
                </div>


            </div>
            <div className="right-container w-50% ml-[100px] mt-[10px]">
                <ul className='flex'>
                    <li className='mr-9'>
                        <Link to='/statics'>Statistics</Link>
                    </li>
                    <li className='mr-9'>
                       <Link to='/overview'>Overview</Link>
                    </li>
                    <li className='mr-9'>
                       <Link to='/dashboard'>Dashboard</Link>
                    </li>
                    <li className='mr-9'>
                       <Link to='/analytics'>Analytics</Link>
                    </li>
                    <li className='ml-12 mt-[-1px]'>
                        <img 
                        className='h-[26px] w-[26px]'
                        src='https://www.svgrepo.com/show/381886/user-profile-person.svg'
                        alt='user-profile-icon'
                        />
                    </li>
                    <li className='ml-4 mt-[-1px]'>
                        <img 
                        className='h-[26px] w-[26px]'
                        src='https://cdn-icons-png.flaticon.com/128/54/54878.png'
                        alt='overview-icon'
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar;