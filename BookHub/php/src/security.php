<?php
require_once 'db.php';

<

// security.php
function validate_input($input) {
  $input = trim($input);
  $input = htmlspecialchars($input);
  return $input;
}

<php?>
