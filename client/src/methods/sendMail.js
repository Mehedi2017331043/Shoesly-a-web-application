import emailjs from 'emailjs-com';

export default function sendMail(email, rand) {
    const templateParams = {
        email: email,
        message: rand
    };

    emailjs.send("service_y5zf826" ,"template_60qg0cm", templateParams, "WRM0gXk4uxa_hVuMT")
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });

}
