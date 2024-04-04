<?php
session_start(); 

// Se valida si se ha enviado información, con la función isset()
// si no hay datos muestra error y redireccionar
if (!isset($_POST['username'], $_POST['password'])) {
    header('Location: index.html');
} else {
    $user = $_POST['username'];
    $pass = $_POST['password'];
    
    $url = 'http://localhost:30001/api/user';

    // Datos que quieres enviar en la solicitud POST
    $data = array(
        'user' => $user,
        'pass' => $pass
    );

    // Configurar el contexto de la solicitud
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/json\r\n",
            'method'  => 'POST',
            'content' => json_encode($data)
        )
    );

    $context = stream_context_create($options);

    // Realizar la solicitud POST y obtener la respuesta
    $response = file_get_contents($url, false, $context);

    // Si necesitas manejar la respuesta, puedes decodificar el JSON
    $decodedResponse = json_decode($response);

    // Verifica si la decodificación fue exitosa antes de imprimir
        
    if ($decodedResponse !== null && $decodedResponse == "correcto") {
        session_regenerate_id();
        $_SESSION['loggedin'] = TRUE;
        $_SESSION['name'] = $_POST['username'];
        $_SESSION['id_usuario'] = 1;
        header('Location: inicio.php');
    } else {
        // usuario incorrecto o error en la respuesta
        echo'<script type="text/javascript">
            alert("Error en la autenticación");
            window.location.href="index.html";
            </script>';
        //header('Location: index.html');
        
    }
}