    var subjectObject = {
    "Motos": {
      "Electrique": ["manuelle"],
      "Essence": ["manuelle"] 
    },
    "Citadine": {
      "Electrique": ["Manuelle"],
      "hybride": ["Manuelle"],
      "Essence": ["Manuelle"],
      "Diesel":  ["Manuelle"]
    },
    "Compact": {
      "hybride": ["Manuelle"],
      "Essence": ["Manuelle"],
      "Diesel":  ["Manuelle"]
    },
    "Berline": {
      "hybride": ["Automatique"],
      "Essence": ["Automatique"],
      "Diesel":  ["Automatique"]
    },
    "Utilitaire": {
      "Diesel": ["Manuelle"]
    },
    "Engin de Chantier": {
      "Essence": ["Manuelle"],
      "Diesel":  ["Manuelle"]
    },
    "Camion": {
      "Diesel": ["Automatique"]
      
    }
  }
  window.onload = function() {
    var type_du_véhicule = document.getElementById("tv");
    var carburant = document.getElementById("Carburant");
    var boite_à_vitessel = document.getElementById("bv");
    for (var x in subjectObject) {
      type_du_véhicule.options[type_du_véhicule.options.length] = new Option(x, x);
    }
    type_du_véhicule.onchange = function() {
      //empty bvs- and Carburants- dropdowns
      boite_à_vitessel.length = 1;
      carburant.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        carburant.options[carburant.options.length] = new Option(y, y);
      }
    }
    carburant.onchange = function() {
      //empty bvs dropdown
      boite_à_vitessel.length = 1;
      //display correct values
      var z = subjectObject[type_du_véhicule.value][this.value];
      for (var i = 0; i < z.length; i++) {
        boite_à_vitessel.options[boite_à_vitessel.options.length] = new Option(z[i], z[i]);
      }
    }
  }
  function Calcule()
  {
    var total=0;
    var nbrjour=document.getElementById("nbrjours").value;
    var typevehicule=document.getElementById("tv").value;
    var carburant=document.getElementById("Carburant").value;
    var bv=document.getElementById("bv").value;
  switch(typevehicule)
  {
    case "Motos":
      {
      if(carburant=="Essence")
      {
      total=nbrjour*1.14*10;
      break;
      }
      else if(carburant=="Electrique")
      {
        total=nbrjour*1.05*10;
        break;
      }
      else
      {
        document.getElementById("Erreur").innerHTML = "Erreur de saisie essayer une aytre fois";document.getElementById("res").innerHTML = "";
        break;
      }
    }
      case "Citadine" :
      {
        if(carburant=="Electrique")
      {
      total=nbrjour*1.05*12;
      break;
      }
        else if (carburant=="hybride")
        {
          total=nbrjour*1.09*12;
      break;
        }
        else if (carburant=="Essence")
        {
          total=nbrjour*1.14*12;
      break;
        }
        else if (carburant=="Diesel")
        {
          total=nbrjour*1.21*12;
      break;
        }
        else
      {
        document.getElementById("Erreur").innerHTML = "Erreur de saisie essayer une aytre fois";document.getElementById("res").innerHTML = "";
        break;
      }
      }
  
      case "Compact" :
      {
    
       if (carburant=="hybride")
        {
          total=nbrjour*1.09*14;
      break;
        }
        else if (carburant=="Essence")
        {
          total=nbrjour*1.14*14;
      break;
        }
        else  if (carburant=="Diesel")
        {
          total=nbrjour*1.21*14;
      break;
        }
        else
      {
        document.getElementById("Erreur").innerHTML = "Erreur de saisie essayer une aytre fois";document.getElementById("res").innerHTML = "";
        break;
      }
      }
  
      case "Berline" :
      {
    
       if (carburant=="hybride")
        {
          total=nbrjour*1.28*20;
      break;
        }
        else if (carburant=="Essence")
        {
          total=nbrjour*1.33*20;
      break;
        }
        else if (carburant=="Diesel")
        {
          total=nbrjour*1.4*20;
      break;
        }
        else
      {
        document.getElementById("Erreur").innerHTML = "Erreur de saisie essayer une aytre fois";document.getElementById("res").innerHTML = "";
        break;
      }
      }
      case "Utilitaire" :
      {
    
       if (carburant=="Diesel") 
        {
          total=nbrjour*1.21*16;
      break;
        }
        else
      {
        document.getElementById("Erreur").innerHTML = "Erreur de saisie essayer une aytre fois";document.getElementById("res").innerHTML = "";
        break;
      }
      }
      case "Engin de Chantier" :
      {
    
       if (carburant=="Essence")
        {
          total=nbrjour*1.14*900;
      break;
        }
        else if (carburant=="Diesel")
        {
          total=nbrjour*1.21*900;
      break;
        }
        else
      {
        document.getElementById("Erreur").innerHTML = "Erreur de saisie essayer une aytre fois";document.getElementById("res").innerHTML = "";
        break;
      }
      }
      case "Camion" :
      {
 
        if (carburant=="Diesel")
        {  total=nbrjour*1.21*250;
      break;
        }
        else
      {
        document.getElementById("Erreur").innerHTML = "Erreur de saisie essayer une aytre fois";document.getElementById("res").innerHTML = "";
        break;
      }
      }
      default :  document.getElementById("Erreur").innerHTML = "Erreur de saisie essayer une aytre fois";document.getElementById("res").innerHTML = "";
      }
  
  if(total>0)
  {
  document.getElementById("Erreur").innerHTML = "";
  document.getElementById("res").innerHTML = "Reservation passe avec succes !! le total :"+(Math.round(total * 100) / 100) +"$";
  }
  }
  