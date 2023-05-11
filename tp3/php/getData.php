<?php
  function dbGetChannel($db) {
    try {
      $statement = $db->prepare("SELECT * FROM channels");
      $statement->execute();
    } catch (PDOException $e) {
      error_log("[" . basename(__FILE__) . "][" . __LINE__ . "] ". 'Request error: ' . $e->getMessage());
      return false;
    }
    return $statement->fetchAll(PDO::FETCH_ASSOC);
  }

  function dbGetMessages($db, $channelid) {
    try {
      $statement = $db->prepare("SELECT m.message, m.channelid, u.nickname FROM messages m JOIN users u on u.login = m.userlogin WHERE m.channelid = :channelid ORDER BY timestamp");
      $statement->execute([
        'channelid' => $channelid
      ]);
    } catch (PDOException $e) {
      error_log("[" . basename(__FILE__) . "][" . __LINE__ . "] ". 'Request error: ' . $e->getMessage());
      return false;
    }
    return $statement->fetchAll(PDO::FETCH_ASSOC);
  }