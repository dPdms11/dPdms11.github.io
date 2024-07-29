function NavBar() {
    return (
        <div className='flex justify-between items-center px-2.5 sm:px-5 py-4 sm:py-2 text-sm sm:text-base'>
            <a href='/'>grace hong</a>
            <div>
                <a href='/about' className='px-2 sm:px-5'>about</a>
                <a href='/projects' className='px-2 sm:px-5'>projects</a>
                <a href='/hobbies' className='px-2 sm:px-5'>hobbies</a>
            </div>
        </div>
    )
}

export default NavBar;