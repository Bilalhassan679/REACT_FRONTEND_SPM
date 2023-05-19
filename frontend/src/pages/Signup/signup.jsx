import React from "react";
import { documentTitle } from "../../utils/title";
import logo from "/microsoft_logo.svg";
import SimpleText from "../../components/SimpleText";
import CredentialTextInput from "../../components/CredentialTextInput";
import { RxQuestionMarkCircled } from "react-icons/rx";
const Signup = () => {
  // page title
  documentTitle("Create an account");

  return (
    <>
      <div className="flex items-center justify-center  h-screen w-full  shadow-2xl bg-gray-300	bg-gradient-to-l from-blue-300 via-pink-300">
        <div className="bg-white rounded-sm w-1/3 h-80 ">
          <div className="p-10">
            <img src={logo} />
            <div className="mt-2">
              <SimpleText className={"mt-2"} name={"Create account"} />
              <CredentialTextInput
                className={"mt-4 w-full "}
                placeholder={"someone@example.com"}
              />
              <p className="text-sm pt-3 text-blue-600 hover:underline">
                Use a phone number instead
              </p>
              <p className="flex gap-2 items-center  text-blue-600 text-sm pt-3 hover:underline">
                Get a new email address
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

export default Signup;
