import React from "react";
import Layout from "../../layout";
import { documentTitle } from "../../utils/title";
import logo from "/microsoft_logo.svg";
import SimpleText from "../../components/SimpleText";
import CredentialTextInput from "../../components/CredentialTextInput";
import { RxQuestionMarkCircled } from "react-icons/rx";
const Login = () => {
  // page title
  documentTitle("Login");

  return (
    <>
      <div className="flex items-center justify-center  h-screen w-full 	bg-gradient-to-l from-blue-300 via-pink-300">
        <div className="bg-white rounded-sm w-1/3 h-80 ">
          <div className="p-10">
            <img src={logo} />
            <div className="mt-2">
              <SimpleText className={"mt-2"} name={"Sign In"} />
              <CredentialTextInput
                className={"mt-3 w-full "}
                placeholder={"Email, phone, or Skype"}
              />
              <p className="text-sm pt-3">
                No account? &nbsp;
                <span className="text-blue-600" onClick={() => {}}>
                  Create one!
                </span>
              </p>
              <p className="flex gap-2 items-center text-blue-600 text-sm pt-3">
                Sign in with a have great fun{" "}
                <RxQuestionMarkCircled asize={15} />
              </p>
              <div className="flex justify-end">
                <button
                  className="text-white bg-blue-700 p-1 px-5 ml-auto"
                  onClick={() => {}}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
