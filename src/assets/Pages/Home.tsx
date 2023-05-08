import * as React from 'react';
import { useNavigate } from 'react-router';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <div className='w-screen'>
                <div className='flex justify-center bg-red-400'>pass</div>
                <div className='flex justify-center'>
                    <button onClick={() => navigate("/PNF")}>Click Here to switch pages!</button>
                </div>
            </div>
        </div>

    )
}

export default Home;
