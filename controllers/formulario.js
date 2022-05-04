const pool = require('../db/config');
const nodemailer = require('nodemailer');

const formularioConsultas = async(req, res) => {
    const response = await pool.query('SELECT * from formulario');
    res.status(200).json(response.rows);
    /* console.log(response.rows);
    res.send('MENSAJES'); */
}

const formularioConsultasPhone = async(req, res) => {
    const phone = req.params.telefono;
    const response = await pool.query('SELECT * from formulario WHERE telefono = $1', [phone]);
    res.status(200).json(response.rows);
}

const formulariomensajes = async(req, res) => {
    const { nombre, email, telefono, fecha_ingreso, fecha_salida, mensaje } = req.body;

    const response = await pool.query('INSERT INTO formulario (nombre, email, telefono, fecha_ingreso, fecha_salida, mensaje) VALUES ($1, $2, $3, $4, $5, $6)', [nombre, email, telefono, fecha_ingreso, fecha_salida, mensaje]);
    /* console.log(response);
    res.send('mensaje enviado'); */
    /* res.json({
        message: 'Mensaje enviado exitosamente',
        body: {
            user: { nombre, email, telefono, fecha_ingreso, fecha_salida, mensaje }
        }
    }) */

    async function main() {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "ser2016munoz@gmail.com",
                pass: "mwlsgphiljaccajb",
            }
        });
        let info = await transporter.sendMail({
            from: `${nombre} <${email}>`,
            to: "ser2004munoz@yahoo.com.ar",
            subject: "SanCleResidenicas",
            html: `La nueva consulta es: <br>
                                Nombre: ${nombre} <br>
                                Email: ${email} <br>
                                Teléfono: ${telefono} <br>
                                Fecha de ingreso: ${fecha_ingreso} <br>
                                Fecha de salida: ${fecha_salida} <br>
                                Mensaje: ${mensaje} <br>`
        });

    }
    main().catch(console.error);
}

const formularioConsultasUpdate = async(req, res) => {
    const id = req.params.id;
    const { telefono } = req.body;
    const response = await pool.query('UPDATE formulario SET telefono = $1 WHERE id_form = $2', [telefono, id]);
    res.send('Consulta actualizada');
}

const formularioConsultasDelete = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE from formulario WHERE id_form = $1', [id]);
    res.json(`Consulta ${id} eliminada exitosamente`);
}


module.exports = {
    formularioConsultas,
    formularioConsultasPhone,
    formulariomensajes,
    formularioConsultasUpdate,
    formularioConsultasDelete
}