import React from 'react';

function ErrorMsj() {

    return (
        <div className="flex items-center bg-transparent">
            <div className="w-400 h-400">
                <img className="w-full object-cover rounded-full" src="./beer.png" alt="beer of Rick" />
            </div>

            <p>Ups!! Mejor intenta con otro nombre!!</p>
        </div>
    )
}

export default ErrorMsj;