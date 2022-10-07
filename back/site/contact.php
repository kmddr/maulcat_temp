<?php
  if($_POST["message"]) {
    mail("komodolies@gmail.com", "Here is the subject line",
    
    $_POST["insert your message here"], "From: an@email.address");
  }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maulcat | Home</title>
  </head>
  <body>
    <style>
      body {
        background: black;
        color: white;
        width: 875px;
        margin: 0 auto;
        font-family: Helvetica, Arial, sans-serif;
        
        letter-spacing: -0.3px;
      }
      .grid-unit {
        width: 280px;
        height: 350px;
      }
      .grid-unit img {
        max-width: 100%;
      }
      .grid-unit p {
        margin: 0;
        float: left;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(3, min-content);
        justify-content: space-between;
        align-content: space-evenly;
        align-items: center;
      }
      .condensed {
        letter-spacing: -1px;
      }
      .doublecondensed {
        letter-spacing: -1.9px;
      }
      .head {
        margin: 32px 0;
      }
      .upper {
        position: relative;
        margin: 16px 0;
      }
      .upper img {
        height: 100px;
        margin-right: 16px;
      }
      .upper .type {
        position: absolute;
        height: 80px;
        bottom: 0px;
      }
      .links {
        grid-template-columns: repeat(5, min-content);
      }
      .links a {
        color: gray;
        text-decoration: none;
        margin-bottom: 8px;
      }
      .links a:hover {
        font-weight: bold;
        color: white !important;
      }
      .active {
        color: white !important;
      }
      .goto {
        width: 280px;
        height: 280px;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        opacity: 0;
        color: white;
        transition: 0.3s;
      }
      .goto:hover {
        opacity: 1;
      }
      .inner {
        width: 280px;
        height: 280px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .inner img {
        width: 80px;
        height: min-content;
      }
      .inner span {
        position: absolute;
        bottom: 16px;
        left: 16px;
      }
      a {
        color: white;
      }
    </style>
    <div class="head">
      <div class="upper">
        <img src="logo.png" alt="Maulcat logo">
        <img class="type" src="type.png" alt="Maulcat Records">
      </div>
      <div class="lower">
        <div class="grid links">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="artists.html">Artists</a>
          <a href="feed.html">Feed</a>
          <a class="active" href="contact.html">Contact</a>
        </div>
        <hr>
      </div>
      <h1>Contact us</h1>
      <p>
        For <strong>general inquiries</strong>: please email us at <a href="mailto:contact@maulcat.us">contact@maulcat.us</a>.<br>
        For <strong>demos or submissions</strong>: please use the form below:
      </p>
      <form method="post" action="contact.php">
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <input type="submit">
      </form>
    </div>
  </body>
</html>