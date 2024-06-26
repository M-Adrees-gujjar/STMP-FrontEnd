import { useRef } from "react";

export default function SignUp() {

  const SignUpForm = useRef();

  function submitData(e) {
    e.preventDefault();
    let name = SignUpForm.current.children[0].children[1].firstChild.value;
    let email = SignUpForm.current.children[1].children[1].firstChild.value;
    let password = SignUpForm.current.children[2].children[1].firstChild.value;
    let confirm_password = SignUpForm.current.children[3].children[1].firstChild.value;
    console.log("Submited..........",name,email,password,confirm_password);

    if (password == confirm_password) {
      
    fetch('http://localhost:3000/tchSignUP', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          Name: name,
          Email: email,
          Password: password
      })
  })
      .then(res => res.json())
      .then(res => {
        console.log("res----form ------",res);
          if (res.token) {
              location.replace('/signIn');
          } else {
              alert("SomeThing Went Wrong");
          }
      });
    }else{
      alert("Password Should match with Confirm Password");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen py-2 lg:px-4 px-0 ">
      <div className="flex items-center justify-center h-5/6 lg:py-4 py-2 shadow-2xl shadow-slate-800 lg:w-1/3 w-full rounded-lg">
      <div className="max-w-md w-full p-6 bg-white rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-20 w-auto" src="https://res.cloudinary.com/dkzca4hyd/image/upload/v1717440991/00_logo_x3dtn2.png" alt="Your Company" />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up to Create Account</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={(e)=>submitData(e)} ref={SignUpForm}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
              <div className="mt-1">
                <input id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 ps-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email Address</label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 ps-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-1">
                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 ps-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="conf-password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              </div>
              <div className="mt-1">
                <input id="conf-password" name="conf-password" type="password" required className="block w-full rounded-md border-0 ps-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
            </div>
          </form>

          <p className="mt-2 text-center text-sm text-gray-500">
            If You are a member?
            <a href="./SignIn.jsx" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
