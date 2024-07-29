import Typewriter from '../components/Typewriter';

function About() {
    return (
        <div className='text-sm sm:text-base'>
            <div className='text-center pb-2'>
                <Typewriter text='about me'/>
            </div>
            <div className='pb-10 text-center'>
                <p className='pb-2'>i graduated from Northeastern University with my bachelor's degree in mechanical engineering with a minor in business administration.
                    i have been captivated by programming since my first college class, in which i designed a tic-tac-toe game using Matlab.
                    as most novice projects go, i spent countless hours in the library, getting frustrated at the computer while knowing, deep down, it was only doing exactly what i told it to.
                </p>
                <p>    
                    the idea that anyone with a computer and a bit of creativity (and, let's be honest, some willpower) can create extraordinary things through programming is what inspired me to pursue software engineering full-time.
                    ultimately, my goal is to use my skills to help others and continue learning in this dynamic and challenging field.
                </p>
            </div>
            <div>
                <p><u>skills:</u></p>
                <ul className='list-disc px-4'>
                    <li>python</li>
                    <li>javascript</li>
                    <li>typescript</li>
                    <li>react</li>
                    <li>django</li>
                    <li>flask</li>
                    <li>mySQL</li>
                    <li>indexedDB</li>
                    <li>html</li>
                    <li>css</li>
                    <li>tailwind css</li>
                </ul>
            </div>
        </div>
    )
}

export default About;