<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        height: 100vh;
        width: 100vw;
        background: #170b33;
        position: absolute;
        transition: 0.45s;
      }
      .loading-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-70%, -60%);
        font-size: 60px;
        color: rgb(255, 255, 255);
        text-shadow: 1px -1px 20px rgb(138, 119, 119);
        font-family: Arial, Helvetica, sans-serif;
      }
      .number {
        width: 100%;
        text-align: center;
      }
      #bar {
        width: 300px;
        height: 12px;
        border: 1px solid white;
        box-shadow: 2px -1px 20px rgba(14, 228, 32, 0.644);
        border-radius: 5px;
      }
      #progress {
        background: white;
        width: 0;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <div class="loading" id="loading">
      <div class="loading-container">
        <div class="number"><span id="loadcount">0</span><span>%</span></div>
        <div id="bar">
          <div id="progress"></div>
        </div>
      </div>
    </div>
    <script>
      const loadindg = document.getElementById("loading");
      let progress = document.getElementById("progress");
      let count = 0;
      let loadcount = document.getElementById("loadcount");
      let loaded = false;
      const intervale = setInterval(() => {
        if (count < 101) {
          loadcount.textContent = count++;
          progress.style.width = count++ + "%";
        } else if (loaded) {
          loading.style.opacity = 0;
          clearInterval(intervale);
          setTimeout(() => {
            loading.style.display = "none";
          }, 450);
          window.location.href = "../php...html/admin/index.php";
        }
      }, 200);
      window.addEventListener("load", () => {
        loaded = true;
      });
    </script>
  </body>
</html>
