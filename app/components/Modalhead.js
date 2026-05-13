// 'use client';

// import HighlightOffIcon from '@mui/icons-material/HighlightOff';


// export default function Modalhead({type,closehandler,signhandler}){





//     return (
//         <div className="modalblur" onClick={closehandler}>
//             <div className="modal" onClick={(e) => e.stopPropagation()}>
//                 <HighlightOffIcon onClick={closehandler} className='close'  />
//                 {type =='sign'? <Sign/> : type == 'log' ? <Log signhandler={signhandler}/>: '' }
//             </div>
//         </div>
//     )
// }

// function Log ({signhandler}){



//     return (
//         <div className="log">
//             <h3>Log in</h3>
//             <form action="">
//                 <input type="email" placeholder='Enter your Email' required/>
//                 <div className="passcase">
//                 <input type="password" placeholder='Enter your Password'  required/>
//                 <p>Do you forget your Password ? <span> Click Here</span></p>
//                 </div>
//                 <button type="button">Log in</button>
//                 <div className='create'>you don't have an account ,<span onClick={signhandler}>Create One</span></div>
//             </form>
//         </div>
//     )
// }

// function Sign (){



//     return (
//         <div className="sign">
//             <h3>Sign Up</h3>
//             <form action="">
//                 <input type="text" placeholder='Enter your User Name'/>
//                 <input type="email" placeholder='Enter your Email' required/>

//                 <input type="password" placeholder='Enter your Password'  required/>
//                 <input type="password" placeholder='Confirm your Password'  required/>

//                 <button type="button" >Create</button>
//             </form>
//         </div>
//     )
// }


'use client'

import { useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { useAuth } from '../context/authContext'

const API = process.env.NEXT_PUBLIC_API_URL

export default function Modalhead({ type, closehandler, signhandler }) {
    return (
        <div className="modalblur" onClick={closehandler}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <HighlightOffIcon onClick={closehandler} className='close' />
                {type == 'sign' ? <Sign closehandler={closehandler} /> : 
                type == 'log' ? <Log signhandler={signhandler} closehandler={closehandler} /> : ''}
            </div>
        </div>
    )
}

function Log({ signhandler, closehandler }) {

    const { saveAuth } = useAuth()
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleLogin() {
        if (!phone || !password) {
            setError('Please fill all fields')
            return
        }
        setLoading(true)
        setError('')
        try {
            const res = await fetch(`${API}/api/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, password })
            })
            const data = await res.json()

            if (data.status === 'success') {
                saveAuth(data.data.user, data.data.token) // ✅ حفظ الـ token
                closehandler()
            } else {
                setError(data.message || 'Login failed')
            }
        } catch (err) {
            setError('Something went wrong')
        }
        setLoading(false)
    }

    return (
        <div className="log">
            <h3>Log in</h3>
            {error && <p style={{ color: 'red', fontSize: '13px' }}>{error}</p>}
            <form action="">
                <input
                    type="text"
                    placeholder='Enter your Phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <div className="passcase">
                    <input
                        type="password"
                        placeholder='Enter your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleLogin} disabled={loading}>
                    {loading ? 'Loading...' : 'Log in'}
                </button>
                <div className='create'>
                    you don't have an account, <span onClick={signhandler}>Create One</span>
                </div>
            </form>
        </div>
    )
}

function Sign({ closehandler }) {

    const { saveAuth } = useAuth()
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        password: '',
        confirmPassword: '',
        userLocation: { city: '', commune: '' }
    })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleRegister() {
        if (!formData.fullName || !formData.phone || !formData.password) {
            setError('Please fill all fields')
            return
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            return
        }
        setLoading(true)
        setError('')
        try {
            const res = await fetch(`${API}/api/users/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    phone: formData.phone,
                    password: formData.password,
                    userLocation: formData.userLocation
                })
            })
            const data = await res.json()

            if (data.status === 'success') {
                saveAuth(data.data.user, data.data.token) // ✅
                closehandler()
            } else {
                setError(data.message || 'Registration failed')
            }
        } catch (err) {
            setError('Something went wrong')
        }
        setLoading(false)
    }

    return (
        <div className="sign">
            <h3>Sign Up</h3>
            {error && <p style={{ color: 'red', fontSize: '13px' }}>{error}</p>}
            <form action="">
                <input
                    type="text"
                    placeholder='Full name'
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
                <input
                    type="text"
                    placeholder='Phone'
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <input
                    type="password"
                    placeholder='Confirm password'
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
                <input
                    type="text"
                    placeholder='City'
                    value={formData.userLocation.city}
                    onChange={(e) => setFormData({
                        ...formData,
                        userLocation: { ...formData.userLocation, city: e.target.value }
                    })}
                />
                <input
                    type="text"
                    placeholder='Commune'
                    value={formData.userLocation.commune}
                    onChange={(e) => setFormData({
                        ...formData,
                        userLocation: { ...formData.userLocation, commune: e.target.value }
                    })}
                />
                <button type="button" onClick={handleRegister} disabled={loading}>
                    {loading ? 'Loading...' : 'Create'}
                </button>
            </form>
        </div>
    )
}