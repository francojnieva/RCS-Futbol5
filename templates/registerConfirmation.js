const transporter = require('../helpers/nodemailer')

const registerConfirmation = async (email, username) => {
    try {
        const info = await transporter.sendMail({
            from: `"RCS-Fútbol5" <${process.env.GMAIL_USER_NODEMAILER}>`,
            to: email,
            subject: "Registro de cuenta exitoso",
            html: `
            <main style="text-align: center; font-family: 'Poppins', sans-serif;">
                <div style="padding: 2rem 0; background-color: #45B649;"></div>
                <h1 style="font-family: 'Poppins', sans-serif;">¡Bienvenido/a a RCS-Fútbol5! 🙌</h1>
                <h2 style="font-family: 'Poppins', sans-serif;">Hola ${username},</h2>
                <p style="font-family: 'Poppins', sans-serif;">Estamos emocionados de que te hayas unido a nuestra comunidad. A partir de ahora, podrás reservar fácilmente tus canchas y organizar partidos con amigos/as.</p>
                <p style="font-family: 'Poppins', sans-serif;">Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos. ¡Estamos aquí para ayudarte en lo que necesites!</p>
                <p style="font-family: 'Poppins', sans-serif;">Saludos<br/>El equipo de RCS-Fútbol5 ⚽😉</p>
                <div style="padding: 2rem 0; background-color: #45B649;"></div>
            </main>`,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = registerConfirmation