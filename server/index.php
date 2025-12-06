<?php

$filename = 'tasks.txt';
$file = fopen($filename, 'a');

if (isset($_POST["task_text"]) && !empty($_POST["task_text"])) {
    $taskText = htmlspecialchars($_POST["task_text"]); 
   
    fputs($file, $taskText . "\n"); 
    echo "OK";
} else {
    echo "Error: No text provided";
}

fclose($file);

