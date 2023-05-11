<?php

  function addMessage($conn, $message, $user_login, $channel_id) {
    try {
      $statement = $conn->prepare("INSERT INTO messages (message, userlogin, channelid) VALUES (:message, :userlogin, :channelid)");
      $statement->execute([
        "message" => $message,
        "userlogin" => $user_login,
        "channelid" => $channel_id
      ]);
    } catch (PDOException $e) {
      error_log("[" . basename(__FILE__) . "][" . __LINE__ . "] ". 'Request error: ' . $e->getMessage());
      return false;
    }
    return true;
  }
