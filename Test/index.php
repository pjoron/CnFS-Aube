<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <link rel="stylesheet" href="css/accueil/main.css">
</head>


<body>

    <h1 id="title">Voici nos thématiques : </h1>

    <div id="carte"></div>

    <?php
    echo "hello", "world";
    ?>

    
    <script>
      fetch('js/data.json')
        .then(function(response) {
          console.log("Données chargées");
          return response.json();
        })
        .then(function(dataLoaded) {
          let table = "";
          dataLoaded.forEach((element) => {
            table += `
              <div class="card_container" onclick="window.location='${element.titre.toLowerCase()}'">
                <div class="card">
                  <div class="img_card" style="background:${element.color}">
                    <img src="${element.img}" alt="${element.titre}">
                  </div>
                  <div class="title_card">
                    ${element.titre}
                  </div>
                  <div class="description_card">
                    ${element.description}
                  </div>
                </div>
    
                <div class="composants_card" style="background:${element.color}" >
                  <div class="info_card">
                    <p>Nombre d'ateliers : ${element.nombres_ateliers}</p>
                  </div>
                </div>
              </div>`;
          });
          document.getElementById("carte").innerHTML = table;
        });
    </script>



</body>

</html>