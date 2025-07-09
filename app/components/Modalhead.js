'use client';

import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export default function Modalhead({type,closehandler}){





    return (
        <div className="modalblur" onClick={closehandler}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <HighlightOffIcon onClick={closehandler} className='close'  />
                {type =='sign'? <Sign/> : type == 'log' ? <Log/>: '' }
            </div>
        </div>
    )
}

function Log (){



    return (
        <div className="log">
            <h3>Log in</h3>
            <form action="">
                <input type="email" placeholder='Enter your Email' required/>
                <div className="passcase">
                <input type="password" placeholder='Enter your Password'  required/>
                <p>Do you forget your Password ? <span> Click Here</span></p>
                </div>
                <button type="button">Log in</button>
                <div className='create'>you don't have an account ,<span>Create One</span></div>
            </form>
        </div>
    )
}

function Sign (){



    return (
        <div className="sign">
            <h3>Sign Up</h3>
            <form action="">
                <input type="text" placeholder='Enter your User Name'/>
                <input type="email" placeholder='Enter your Email' required/>

                <input type="password" placeholder='Enter your Password'  required/>
                <input type="password" placeholder='Confirm your Password'  required/>

                <button type="button">Create</button>
            </form>
        </div>
    )
}


