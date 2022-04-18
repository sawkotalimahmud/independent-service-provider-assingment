import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-red-500">Error: {error?.message}</p>
      </div>
    );
  }

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);

    console.log(email, password);
  };

  if (user) {
    navigate("/servicedetail");
  }

  const navigateSingUp = (event) => {
    navigate("/signup");
  };

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const passwordReset = async()=>{
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
          alert('Sent email');
  }

  return (
    <div>
      <div>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                {" "}
                <Link
                  to="/signup"
                  onClick={navigateSingUp}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Don't Have An Account? Sing Up Here
                </Link>
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
              action="#"
              method="POST"
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    ref={emailRef}
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    ref={passwordRef}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a onClick={passwordReset}
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
                >
                  Sign in
                </button>
                {errorElement}
                <SocialLogin></SocialLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
