function recupererActivite(domaine, elmToAppend)
{
	 //Tableau listant toutes les champs activité récupérés de la servlet
	 var activiteTable = [];
	 //Chemin en dur pour aller chercher le dossier image
	 var cheminImage = "../../img/";
	 
	 //A déplacer
	 //var arraySizeImages = buildArraySizeImages();
	 
	 $.ajax({
	        url: '../../RecupererActivite',
	        async: false,
	        type: 'GET',
	        data:{
	        	domaine: domaine
	        },
	        success: function (data) {
	        	for(var i=0; i<data.length; i++){
	        	
	        		var activite = [];
	        		var jsonActivite = data[i];
	        		
	        		activite['nomActivite'] = jsonActivite.nomActivite;
	        		activite['description'] = jsonActivite.Description;
	        		activite['nomLieu'] = jsonActivite.nomLieu;
	        		activite['adresse'] = jsonActivite.adresse;
	        		activite['ville'] = jsonActivite.ville;
	        		activite['codePostal'] = jsonActivite.codePostal;
	        		activite['siteWeb'] = jsonActivite.siteWeb;
	        		activite['telephone'] = jsonActivite.telephone;
	        		activite['email'] = jsonActivite.email;
	        		activite['domaine'] = jsonActivite.domaine;
	        		activite['lienPhoto'] = jsonActivite.lienPhoto;
	        		activite['importance'] = jsonActivite.importance;
	        		activiteTable.push(activite);		
	        	}
	        	afficherHtmlActivite(elmToAppend, activiteTable, cheminImage/*, arraySizeImages*/);
	        },
	        error: function (data) {
	        	alert("Un problème est survenu, veuillez réessayer ultérieurement.");
	        }
	    });	
}
	

function afficherHtmlActivite(elmToAppend, activiteTable, cheminImage/*, arraySizeImages*/){	
	$.each(activiteTable,function(key,value){			
		var stringNomActivite = "";
		if(value['nomActivite'] != ""){
			stringNomActivite = value['nomActivite'];
		}
		
		var stringDescription = "";
		if(value['Description'] != ""){
			stringDescription = "<p class='text-justify'>"+value['description']+"</p>";
		}
				
		var stringNomLieu = "";
		if(value['nomLieu'] != ""){
			stringNomLieu = "Lieu : " + value['nomLieu'];
		}
		
		var stringAdresse = "";
		if(value['adresse'] != ""){
			stringAdresse = ";&nbsp;&nbsp;&nbsp;&nbsp;Adresse : " + value['adresse'];
		}
		
		var stringCodePostal = "";
		if(value['codePostal'] != ""){
			stringCodePostal = " " + value['codePostal'];
		}
		
		var stringVille = "";
		if(value['ville'] != ""){
			stringVille = " " + value['ville'];
		}
		
		var stringSiteWeb = "";
		if(value['siteWeb'] != ""){
			stringSiteWeb = "<a class='btn btn-md btn-theme' href=" + value['siteWeb'] + " target='blank'>Site internet</a>";
		}
		
		var stringTelephone = "";
		if(value['telephone'] != ""){
			stringTelephone = "Informations au : " + value['telephone'] + ",";
		}
		
		var stringEmail = "";
		if(value['email'] != ""){
			stringEmail = " Contact par mail : " + value['email'];
		}
		
		var stringLienPhoto = "";
		if(value['lienPhoto'] != ""){
			stringLienPhoto = "<img src='" + cheminImage + value['lienPhoto'] + "' width='50%' height='50%' style='max-heigth: 100px; max-width: 100px;' alt='Image activite'/>";
			/*stringLienPhoto = "<img src='"+cheminImage+value['lienPhoto']+"' width='"+arraySizeImages['SNCF']['width']+"' height='"+arraySizeImages['SNCF']['height']+"' alt='image'/></td></tr>";*/
		}
		
		var stringImportance ="";
		if(value['importance'] != "")
		{
			stringImportance = value['importance'];
		}
		
		var stringDivActivite = 			
			"<div class='col-lg-6 col-md-6 col-sm-6 mb'>"
				+ "<div class='product-panel-2 pn' style='padding: 5px;'>"
					+"<h2>" + stringNomActivite + "</h2>"
					+"<p class='text-justify'>" + stringNomLieu + stringAdresse + stringCodePostal + stringVille + "</p>"
					+"<p class='text-justify'>" + stringTelephone + stringEmail + "</p>"
					+"<div class='col-lg-6 col-md-6 col-sm-6 centered'>" + stringSiteWeb + "</div>"
					+"<div class='col-lg-6 col-md-6 col-sm-6 centered'>" + stringLienPhoto + "</div>"
					+"<p class='text-justify'>" + stringDescription + "</p>"				
				+"</div>"
			+"</div>";
		
		elmToAppend.append(stringDivActivite);
	});
}

/*
//Gere la taille des images
function buildArraySizeImages(){
	 var arraySizeImages = [];
	 var arraySizes = [];
	 
	 arraySizes["width"] = 100;
	 arraySizes["height"] = 60;
	 
	 arraySizeImages["SNCF"] = arraySizes;
	 
	 return arraySizeImages;
}*/
