<?php
  require_once 'database.php';
  require_once 'getData.php';
  require_once 'addData.php';

  ini_set('display_errors', 1);
  error_reporting(E_ALL);

  $db = dbConnect();

  if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['request'])) {
      if ($_GET['request'] == 'channels') {
        echo json_encode(dbGetChannel($db));
      }
      if ($_GET['request'] == 'messages' && isset($_GET['channel'])) {
        echo json_encode(dbGetMessages($db, $_GET['channel']));
      }
    }
  } elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    error_log(json_encode($_POST));
    if (isset($_GET['request']) && isset($_POST['channel_id']) && isset($_POST['message'])) {
      $res = addMessage($db, $_POST['message'], "etudiant0", intval($_POST['channel_id']));
      echo json_encode(array('success' => $res));
    }
  }


