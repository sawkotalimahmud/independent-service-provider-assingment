import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorElement;
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-red-500">
          Error: {error?.message} {error1?.message}
        </p>
      </div>
    );
  }

  if (user || user1) {
    navigate("/serviceId");
  }

  return (
    <div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className="w-full mt-2
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
      >
        Sign in With Google
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="w-full mt-2
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
      >
        Sign in With Github
      </button>
    </div>
  );
};

export default SocialLogin;
