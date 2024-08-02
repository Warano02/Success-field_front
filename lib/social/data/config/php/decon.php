<?php
session_start();
if (isset($_GET["deconn"])) {
echo true;
session_destroy();
}