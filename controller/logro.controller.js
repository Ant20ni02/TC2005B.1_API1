//const mysql = require('mysql');
const conexion = require('../helpers/mysql-config');


module.exports.getLogros = (req,res) =>{
    const sql = `SELECT * FROM logro`;
        conexion.query(sql,(error,results,fields) =>{
            if(error)
                res.send(error);
            res.json(results);
        })
}

module.exports.getLogro = (req,res) =>{
    const sql = `SELECT * FROM logro WHERE idLogro=?`;
        conexion.query(sql,[req.params.id],(error,results,fields) =>{
            if(error)
                res.send(error);

            res.json(results);
        })
}

module.exports.insertLogro = (req,res)=>{
    const body = req.body;
    const sql = `INSERT INTO logro(id,nombre,descripcion) VALUES(?,?)`

    conexion.query(sql, [body.nombre, body.descripcion], (error, results, fields)=>{
        if(error)
            res.send(error);

        res.json(results);
    })
}

module.exports.updateLogro =(req,res)=>{
    const body = req.body;
    const sql = `UPDATE logro SET nombre=?, descripcion=? WHERE idLogro = ? `;

    conexion.query(sql, [body.nombre, body.descripcion, body.id], (error, results, fields)=>{
        if(error)
            res.send(error);

        res.json(results);
    })
}

module.exports.deleteLogro = (req,res)=>{
    const sql = `DELETE FROM logro WHERE idLogro=?`

    conexion.query(sql, [req.params.id], (error, results, fields)=>{
        if(error)
            res.send(error);

        res.json(results);
    })
}



