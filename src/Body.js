import Frame from './Frame';

const Body = () => {
    return (
        <>
        
        <div className='container'>
            <div className='row'>
                <p>Content.</p>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <p>Hola</p>
                </div>
                <div className='col-4'>
                    <div className='w-auto rounded bg-primary'>
                        <Frame />
                    </div>
                </div>
                <div className='col-4'>
                    <p>Hola</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Body;