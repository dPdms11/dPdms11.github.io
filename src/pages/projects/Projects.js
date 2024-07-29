function Projects() {
    return (
        <div className='sm:flex'>
            <div className='sm:w-1/2 sm:px-3'>
                <a href='https://github.com/dPdms11/photo_editor' target='_blank' rel='noreferrer'><u>Photo Editor</u></a>
                <div className='text-sm sm:text-base'>
                    <p className='py-1'>a photo editing web application that allows users to upload, edit, and download images with various CSS filters.</p>
                    <img src='images/photoeditor.jpg' alt='PhotoEditor' className='pb-2'/>
                    <p><em>Backend:</em> Django</p>
                    <p><em>Frontend:</em> Vanilla JS, IndexedDB</p>
                    <p className='pb-2'><em>Version Control:</em> Git/GitHub</p>
                    {/* <Link to='/projects/photoeditor'><u>Learn more</u> -&gt;</Link> */}
                </div>
            </div>
            <div className='sm:w-1/2 py-5 sm:py-0 sm:px-3'>
                <a href='https://github.com/dPdms11/notes_app' target='_blank' rel='noreferrer'><u>Notes App</u></a>
                <div className='text-sm sm:text-base'>
                    <p className='py-1'>a comprehensive notes application with full CRUD (Create, Read, Update, Delete) functionality.</p>
                    <img src='images/notes.png' alt='Notes' className='pb-2'/>
                    <p><em>Backend:</em> Flask/SQLite</p>
                    <p className='pb-2'><em>Frontend:</em> Vanilla JS</p>
                    {/* <Link to='/projects/notes'><u>Learn more</u> -&gt;</Link> */}
                </div>
            </div>
        </div>
    )
}

export default Projects;