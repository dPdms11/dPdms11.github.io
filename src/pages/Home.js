import Typewriter from '../components/Typewriter';

function Home() {
    return (
        <>
            <div className='flex items-center sm:items-start flex-col w-3/4 sm:w-1/2 space-y-4'>
                <Typewriter text="hello, i'm Grace"/>
                <img src='images/grace.png' alt='me' className='max-h-[50rem]'/>
            </div>
            <p className='text-center sm:w-1/2 pt-10 p-5'>i'm a passionate and self-taught software developer with a strong foundation in web development.
                i love tackling complex problems and am always eager to learn new technologies!
            </p>
        </>
    )
}

export default Home;