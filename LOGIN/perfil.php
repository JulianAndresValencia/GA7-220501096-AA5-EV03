<?php

session_start();


if (!isset($_SESSION['loggedin'])) {

    header('Location: index.html');
    exit;
}


$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'srca';

// conexion a la base de datos
/*Conectar a api*/
$conexion = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

if (mysqli_connect_error()) {

    // si se encuentra error en la conexión

    exit('Fallo en la conexión de MySQL:' . mysqli_connect_error());
}

$stmt = $conexion->prepare('SELECT nombre, clave, telefono FROM usuario WHERE id_usuario = ?');
// Aquí debo volver a la api para traer los datos del usuario.

$stmt->bind_param('i', $_SESSION['id_usuario']);
$stmt->execute();
$stmt->bind_result($nombre,$password, $email);
$stmt->fetch();
$stmt->close();


?>

