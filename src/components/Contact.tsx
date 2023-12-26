import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SecondaryTitle from './shareds/SecondaryTitle';
import axios from 'axios';
import Swal from 'sweetalert2';
export default function Contact({
    handleContactformClose,
    showEmailForm,
    texts,
}: {
    handleContactformClose: () => void;
    showEmailForm: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    texts: any;
}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
        setDisable(true);
        axios
            .post('https://portfolio-api-ten-sage.vercel.app/sendmail', {
                html: `
                <body>
                  <p>Querido Alexis,</p>
                
                  <p>Espero que estés bien. Soy ${data.name}, ${data.email}. 
                
                  <p>${data.subject}</p>
                </body>`,
            })
            .then(function (response) {
                // handle success
                console.log(response);
                Swal.fire({
                    position: 'top-end',
                    icon: undefined,
                    title: 'Thanks i will get in contact with you!',
                    showConfirmButton: false,
                    timer: 1500, // Tiempo en milisegundos antes de cerrar automáticamente
                    timerProgressBar: true,
                });
                reset({ name: '', email: '', subject: '' });
                handleContactformClose();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'An Error ocurred',
                    showConfirmButton: false,
                    timer: 1500, // Tiempo en milisegundos antes de cerrar automáticamente
                    timerProgressBar: true,
                });
            })
            .finally(() => {
                setDisable(false);
            });
    };
    const [disable, setDisable] = useState(false);
    return (
        <section
            className={`main__contact ${
                showEmailForm && 'show'
            } bg-blue-500 w-full flex flex-col justify-center items-center p-4 sm:p-4 md:p-4 lg:p-16 xl:p-16`}
        >
            <div className="container">
                <i
                    className="fa-solid fa-circle-xmark fa-2xl close text-white hover:text-red-600 cursor-pointer"
                    onClick={() => {
                        handleContactformClose();
                    }}
                ></i>
                <SecondaryTitle
                    subtitle={texts.labels.contactTitle}
                    color="text-white"
                />

                <form
                    className="max-w-sm mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {texts.labels.contactFullName}
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Jon Doe"
                            {...register('name', { required: true })}
                        />
                        {errors.name && (
                            <span className="text-red-600">
                                <strong>This field is required</strong>
                            </span>
                        )}
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {texts.labels.contactEmail}
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="doe@.com"
                            {...register('email', { required: true })}
                        />
                        {errors.email && (
                            <span className="text-red-600">
                                <strong>This field is required</strong>
                            </span>
                        )}
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="text"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            {texts.labels.contactSubject}
                        </label>
                        <textarea
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register('subject', { required: true })}
                        ></textarea>
                        {errors.subject && (
                            <span className="text-red-600">
                                <strong>This field is required</strong>
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-green-500 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        disabled={disable}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
