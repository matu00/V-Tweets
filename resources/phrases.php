<?php
session_start();
function data()
{
    $conexion=mysqli_connect('localhost', 'root', '', "m-experience");
    if ($_POST['phrase']==1) {
        $rand=rand(1, 2);
    }
    if ($_POST['phrase']==2) {
        $rand=$_SESSION['id'];
    }
    $query="SELECT * FROM phrases WHERE id_phrases LIKE  $rand";
    $resultado=mysqli_query($conexion, $query);
    $fila=mysqli_fetch_row($resultado);
    if ($_POST['phrase']==1) {
        $id = $rand;
        $_SESSION['id'] = $id;
        return $fila[1];
    }
    if ($_POST['phrase']==2) {
        return $fila[2];
    }
}
echo data();
