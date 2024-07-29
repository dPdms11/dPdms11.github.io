function Hobbies() {
    return (
        <div className='sm:flex sm:flex-row sm:justify-evenly'>
            <div className='sm:w-1/3 p-3'>
                <p className='text-center'>Traveling</p>
                <img src='images/philippines.png' alt='philippines' />
            </div>
            <div className='sm:w-1/3 p-3'>
                <p className='text-center'>Baking</p>
                <img src='images/macaron.png' alt='macaron' />
            </div>
            <div className='sm:w-1/3 p-3'>
                <p className='text-center'>Golfing</p>
                <img src='images/golfrange.png' alt='golf range' />
            </div>
        </div>
    )
}

export default Hobbies;