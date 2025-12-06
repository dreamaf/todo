<?php

$filename = 'tasks.txt';
if (!file_exists($filename)) {
    echo json_encode([]); 
    exit;
}

$tasks_list = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

echo json_encode($tasks_list);

