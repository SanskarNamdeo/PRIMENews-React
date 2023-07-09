import React from 'react'
import loading from './loading.gif'

const Spinner = ()=> {
        return (
            <div className="text-center">
                <img className="my-3" src={loading} style={{width: '60px', height: '60px'}} alt="loading" />
            </div>
        )
}

export default Spinner 