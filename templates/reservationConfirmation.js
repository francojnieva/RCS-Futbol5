const transporter = require('../helpers/nodemailer')

const reservationConfirmation = async (email, date, courtNumber) => {
    try {
        const info = await transporter.sendMail({
            from: `"RCS-Fútbol5" <${process.env.GMAIL_USER_NODEMAILER}>`,
            to: email,
            subject: "Reserva exitosa",
            html: `
            <main style="text-align: center; font-family: 'Poppins', sans-serif;">
                <div style="padding: 2rem 0; background-color: #45B649;"></div>
                <h1 style="font-family: 'Poppins', sans-serif;">¡Tu reserva en RCS-Fútbol5! ⚽</h1>
                <p style="font-family: 'Poppins', sans-serif, font-weight: 600;">N° de cancha: ${courtNumber}</p>
                <p style="font-family: 'Poppins', sans-serif, font-weight: 600;">Fecha y hora: ${date}</p>
                <p style="font-family: 'Poppins', sans-serif;">Saludos<br/>El equipo de RCS-Fútbol5 ⚽😉</p>
                <div style="padding: 2rem 0; background-color: #45B649;"></div>
            </main>`,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = reservationConfirmation