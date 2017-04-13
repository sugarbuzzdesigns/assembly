<?php

$mailResult = false;
$mailResult = wp_mail( 'sugarbuzzdesigns@gmail.com', 'test if mail works', 'hurray' );
echo $mailResult;

 ?>