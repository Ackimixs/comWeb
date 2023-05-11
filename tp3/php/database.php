<?php
    require_once 'constante.php';

    function dbConnect() {
        $dsn = 'pgsql:dbname=' . DB_NAME . ';host='. DB_SERVER . ';port=' . DB_PORT;
        $user = DB_USER;
        $password = DB_PASSWORD;
        try {
            return new PDO($dsn, $user, $password);
        } catch (PDOException $e) {
            error_log("[" . basename(__FILE__) . "][" . __LINE__ . "] ". 'Connexion échouée : ' . $e->getMessage());
            return false;
        }
    }