import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

export const EmailForm = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_b7y91og', 'template_1ok6hgu', form.current, '-YgP2YtVTWqqPlnIq')
            .then((result) => {
                console.log(result.text);
                console.log("message sent!")
            }, (error) => {
                console.log(error.text);
                console.log("error sending message, try again!")
            });
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Mensaje enviado con éxito!",
            showConfirmButton: false,
            timer: 1500
        });
    };

    return <div className="container mt-5 md:mt-6 max-w-md mx-auto bg-white rounded-xl  overflow-hidden md:max-w-2xl">
        <h2 id="contacto" className="text-center block mt-5 text-5xl leading-tight font-medium text-gray hover:underline cursor-pointer">Contacto</h2>
        <form ref={form} onSubmit={sendEmail} className="justify-center mt-3 row g-3 ">
            <div className="text-center col-md-8">
                {/* <label className="form-label">Nombre</label> */}
                <input type="text" className="form-control " placeholder='Ingresa tu nombre' name='user_name' required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>

            <div className="text-center col-md-8">
                {/* <label htmlFor="validationServerUsername" className="form-label">Email</label> */}
                <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend3">@</span>
                    <input type="text" className="form-control " placeholder='Ingresa tu email' name='user_email' id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                    <div id="validationServerUsernameFeedback" className="invalid-feedback text-center">
                        Complete email.
                    </div>
                </div>
            </div>
            <div className="text-center col-md-8 align-items-center gap-2">
                <textarea name='message' className='form-control' placeholder='Escriba su mensaje' required ></textarea>
                <button className="my-4 px-4 py-1 text-sm  font-semibold rounded-full border border-pink-300 hover:text-white hover:bg-pink-300 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 " type="submit">Enviar</button>
            </div>


        </form>
        {/* <form ref={form} onSubmit={sendEmail}>
            <input name='user_email' type="email" placeholder='Email' required />
            <></>
            <textarea name='message' placeholder='Write message...' required ></textarea>
            <button type="submit">Send Message</button>
        </form> */}
    </div>
}