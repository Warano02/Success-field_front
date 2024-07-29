<?php
session_start();
if (!isset($_SESSION['yetedi'])) {
    header("location:../../../php...html/users/login/index.php?href=monoshop");
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chargement</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: url('../img/bgd.jpg');
            background-size: contain;
            background-repeat: 4;
        }

        .box {
            position: relative;
            width: 200px;
            height: 200px;
            transform-style: preserve-3d;
            animation: calvino 20s linear infinite;
        }

        @keyframes calvino {
            0% {
                transform: perspective(1000px) rotateX(0deg) rotateY(35deg);
            }

            100% {
                transform: perspective(1000px) rotateX(360deg) rotateY(35deg);
            }
        }

        .box span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform-origin: center;
            transform-style: preserve-3d;
            transform: rotateX(calc(var(--i) * 45deg)) translateZ(300px);
        }

        .box span img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>

<body>
    <div class="box" id="box">

    </div>
</body>
<script>
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../config/php/produit.php?propriete=Pour_warano', true)
    xhr.onloadend = () => {
        const result = JSON.parse(xhr.responseText)
        result.forEach(img => {
            document.getElementById('box').insertAdjacentHTML('beforeend', `
                <span style="--i:${result.indexOf(img)};"><img src="${img.src}"></span>
        `)
        });
        let i = 0
        let t = setInterval(() => {
            if (i == 5) {
                window.location.href = "./admin/"
                clearInterval(t)
            } else {
                i++
            }

        }, 100);

    }
    xhr.send()
</script>

</html>