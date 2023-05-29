import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate('/netflix-clone');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full h-screen">
      <img
        className="w-full h-screen object-cover absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/e64d63de-40af-40b9-a3c0-f753aa45244f/BD-en-20220606-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <div className="bg-black/60 w-full h-screen fixed top-0 left-0"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white rounded">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold my-6">Sign Up</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                className="py-4 text-xl px-6 my-2 bg-[#333] rounded placeholder:text-[#8c8c8c] font-thin outline-none"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                className="py-4 text-xl px-6 my-2 bg-[#333] rounded placeholder:text-[#8c8c8c] font-thin outline-none"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button
                className="bg-red-600 py-3 my-6 text-xl rounded font-bold"
                type="submit"
              >
                Sign Up
              </button>
              <div className="flex justify-between items-center">
                <p className="text-[#b3b3b3]">
                  <input
                    type="checkbox"
                    className="mr-2 cursor-pointer text-xl"
                  />
                  Remember me
                </p>
                <p className="text-[#b3b3b3] hover:underline cursor-pointer">
                  Need help?
                </p>
              </div>
              <p className="text-[#b3b3b3] my-6">
                <span className="mx-2">
                  Already Subscribed to Netflix?
                </span>
                <Link to="/signin">
                  <span className="hover:underline cursor-pointer text-gray-200">
                    Sign In
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
