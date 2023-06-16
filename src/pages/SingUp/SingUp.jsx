import { useContext } from 'react';
import img1 from '../../assets/others/authentication.png';
import img2 from '../../assets/others/authentication2.png';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
const SingUp = () => {
    const { createUser } = useContext(AuthContext)
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your data has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .then(error => console.log(error))

    }
    return (
        <div className="min-h-screen  bg-cover bg-center bg-[100%] bg-no-repeat" style={{ backgroundImage: `url(${img1})` }}>
            <div className="flex items-center justify-center h-screen max-w-screen-lg mx-auto ">
                <div className="container mx-auto">
                    <div className="flex flex-wrap shadow-lg py-20" >
                        {/* Left Side (Image) */}
                        <div className="w-full md:w-1/2">
                            <img src={img2} alt="Login" className="w-full h-auto" />
                        </div>

                        {/* Right Side (Form) */}
                        <div className="w-full md:w-1/2 ">
                            <h1 className="text-5xl font-bold ps-3">Registration now!</h1>
                            <form onSubmit={handleSignUpSubmit} className="px-8 py-6">
                                <div className="mb-4">
                                    <label className="block mb-2 text-lg font-semibold text-gray-800" htmlFor="username">
                                        User Name
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        type="text"
                                        id="name"
                                        placeholder="Enter your Name"
                                        name='name'
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-lg font-semibold text-gray-800" htmlFor="useremail">
                                        User Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        type="email"
                                        id="email"
                                        placeholder="Enter your Email"
                                        name='email'
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-lg font-semibold text-gray-800" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        name='password'
                                    />
                                </div>
                                <button className="btn btn-success w-full" type='submit'>Sign Up</button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;