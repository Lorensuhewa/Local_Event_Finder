import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      console.log(data);
      dispatch(signInSuccess(data));
      navigate('/userPage');
    } catch (error) {
      console.log('could not login with google', error);
    }
  };

  return (

    <button 
      type='button' 
      onClick={handleGoogleClick} 
      className=' text-black p-3 border border-black rounded-lg uppercase hover:opacity-80 disabled:opacity-90 flex items-center justify-center'
      style={{ width: '100%' }} // Ensu
    >
      <img src={'google.png'} alt="Google Icon" className='h-7 w-15 rounded-full mr-3' />
      <span>Continue with Google</span>
    </button>
  )
}

