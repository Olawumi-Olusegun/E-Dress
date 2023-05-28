import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut  } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { githubLogo, googleLogo } from './../../assets'
import { addUser, removeUser, userInfo } from '../../redux/productSlice/productSlice'
import { toast } from 'react-toastify';

const Login = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = useSelector(userInfo)

    const handleGoogleLogin = (event) => {
        event.preventDefault()

        signInWithPopup(auth, provider)
                .then(result => {
            const user = result.user;
            // console.log(user)
            const userData = {
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL
            }

            dispatch(addUser(userData));
            setTimeout(() => {
                navigate('/')
            }, 1500);

        }).catch((error) => {
            console.log(error)
        })

    }

    const handleSignOut  = (event) => {
        event.preventDefault()
        signOut(auth)
        .then(() => {
            dispatch(removeUser())
            toast.success("Log Out Successfully")
        })
        .catch(error => {
            console.log(error)
        })
    }



    return (
        <>
            <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
                <div  className='w-full flex items-center justify-center gap-10'>
                    {
                        !user ? <>
                            <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-600 '>
                                <img src={googleLogo} alt="google-logo" className='w-8' />
                                <span className='text-sm text-gray-900'>Sign in with Google</span>
                            </div>
                        </>
                        : null
                    }
                    {
                        user ? <>
                            <button onClick={handleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'> Sign Out</button>
                        </>
                        : null
                    }
                    
                </div>

                
                <div className='w-full flex items-center justify-center gap-10'>
                    <div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 cursor-pointer duration-600 '>
                        <img src={githubLogo} alt="github-logo" className='w-8' />
                        <span className='text-sm text-gray-900'>Sign in with Github</span>
                    </div>
                    {/* <button className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300'> Sign Out</button> */}
                </div>
            </div>
        </>
    
    );
}

export default Login