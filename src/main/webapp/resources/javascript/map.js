function homePageBoxes(postcode){
	if(postcode == null || postcode.length == 0 || typeof postcode === 'undefined')
	{
		$('#bluebox').toggle();
		$('#titlebox').toggle();
	}	
}

function createMap(postcode){
	
    if (postcode == null || postcode.length == 0 || typeof postcode === 'undefined') {
    	
    	// --------------- to do -----------------------------
		// need to remove if statement on removal of uk map
		// ----------------------------------------------------
    }
	else {	
		// ----------------------------------------------------
		// check to see if postcode details are required
		// ----------------------------------------------------
		 
		
		if (typeof $.getUrlVar('pcSearch') === 'undefined' ) {
			
			OA_pcode_details(postcode);
		}
		else{
			if($.getUrlVar('levelname') === 'WD' ) {
			  WD_areaDetails();
			}
			
			if($.getUrlVar('levelname') === 'LAD' ) {
			  LA_areaDetails();
			}
			
			if($.getUrlVar('levelname') === 'GOR' ) {
			  GOR_areaDetails();
			}
			
			if($.getUrlVar('levelname') === 'CTRY' ) {
			  CTRY_areaDetails();
			}
		}	
	}	 
}

function WD_areaDetails(){
	
   var areaId, envelope, markerEnvelope, LA, GOR, CTRY, WD, levelname;
   var WD_extcode, LA_extcode, GOR_extcode, CTRY_extcode, childarealist, childname;  
  
   WD              = $.getUrlVar('areaname');   
   LA              = $.getUrlVar('ln');
   GOR             = $.getUrlVar('gn');
   CTRY            = $.getUrlVar('cn');
   WD_extcode      = $.getUrlVar('areacode');
   LA_extcode      = $.getUrlVar('lc');
   GOR_extcode     = $.getUrlVar('gc');
   CTRY_extcode    = $.getUrlVar('cc');
   markerEnvelope  = $.getUrlVar('markerenvelope');
   levelname       = $.getUrlVar('levelname');
   childname       = $.getUrlVar('childname');
   childarealist   = "E00115782,E00115783,E00115784,E00115788,E00115787,E00115786,E00115781,E00115776,E00115782,E00115778,E00115793,E00115785,E00115780,E00115775,E00115779,E00115777,E00115796,E00115794,E00115795,E00115792,E00115791,E00115790,E00115789";
  	   
   jsonFile1 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/code/" + WD_extcode + "/" + "leveltypeid/14/hierarchyid/30";   
   jsonFile2 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/area/"; 

   $(document).ready(function(){
      $.getJSON(jsonFile1, function(res1){
	     areaId = res1['ns2:SearchAreaByCodeResponseElement'].AreaFallsWithins.AreaFallsWithin.Area.AreaId;	
	     $.getJSON(jsonFile2 + areaId,function(res2){
	    	envelope = res2['ns2:GetAreaDetailResponseElement'].AreaDetail.Envelope;	    
	    		    	
	    	details = envelope + ":" + WD + ":" + "WD12NM" + ":" + "WD/WD_DEC_2012_GB_BGC" + ":" + markerEnvelope + ":" + "WD" + ":" + "WD12CD" + ":" +
		              WD + ":" + LA + ":" + GOR + ":" + CTRY + ":" + WD_extcode + ":" + LA_extcode + ":" + GOR_extcode + ":" + CTRY_extcode + ":"  + 
		              childarealist + ":" + "" + ":" + "OA11CD" + ":" + "OA/OA_2011_EW_BGC_V2" + ":" + childname;		    
	    	
	    	$("#Tabs").toggle(); //display tabs for data content
				
 			//Call createTable for OA
 			createTable( WD_extcode, levelname);
 			createReligion( WD_extcode, levelname);	
 			getData( WD_extcode, levelname, WD, 'popSexGeog');
			getData( WD_extcode, levelname, WD, 'ageGeog');
			getData( WD_extcode, levelname, WD, 'popTime');
			getData( WD_extcode, levelname, WD, 'relGeog');
			getData( WD_extcode, levelname, WD, 'relAgeGeog');
			getData( WD_extcode, levelname, WD, 'relSexGeog');	
	    	
	        //call highlight map
			if (typeof childname === 'undefined') {					
			   highlightMap(details, postcode);
			}
			// call hover map
			else {			   
			   hoverMap(details, postcode);
			}    	
	    });	//jsonfile1	
	  });//jsonFile2	
   // });//jsonFile3	    
   });//ready
}

function LA_areaDetails(){	
	
   var areaId, envelope, markerEnvelope, LA, GOR, CTRY, levelname; 
   var LA_extcode, GOR_extcode, CTRY_extcode, childarealist, childname;
   
   LA              = $.getUrlVar('areaname');
   GOR             = $.getUrlVar('gn');
   CTRY            = $.getUrlVar('cn');
   LA_extcode      = $.getUrlVar('areacode');
   GOR_extcode     = $.getUrlVar('gc');
   CTRY_extcode    = $.getUrlVar('cc');
   markerEnvelope  = $.getUrlVar('markerenvelope');
   levelname       = $.getUrlVar('levelname');
   childname       = $.getUrlVar('childname');
	
   jsonFile1 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/code/" + LA_extcode + "/" + "leveltypeid/13/hierarchyid/26";
   jsonFile2 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/area/";
   jsonFile3 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/areachildlist/code/" + LA_extcode + "/hierarchyid/30";
   
   $(document).ready(function(){
      $.getJSON(jsonFile1, function(res1){
	     areaId = res1['ns2:SearchAreaByCodeResponseElement'].AreaFallsWithins.AreaFallsWithin.Area.AreaId;		     
	     $.getJSON(jsonFile2 + areaId,function(res2){
	    	envelope = res2['ns2:GetAreaDetailResponseElement'].AreaDetail.Envelope;
	    	$.getJSON(jsonFile3,function(res3){
			   childarealist = res3['extcode'];	
			  
	    	details = envelope + ":" + LA + ":" + "LAD11NM" + ":" + "LAD/LAD_DEC_2011_GB_BGC" + ":" + markerEnvelope + ":" + "LAD" + ":" + "LAD11CD" + ":" +
	    	          " " + ":" + LA + ":" + GOR + ":" + CTRY + ":" + " "  + ":" + LA_extcode + ":" + GOR_extcode + ":" + CTRY_extcode  + ":" +
		              childarealist + ":" + "WD12NM" + ":" + "WD12CD" + ":" + "WD/WD_DEC_2012_GB_BGC" + ":" + childname;
	    	
	    	$("#Tabs").toggle(); //display tabs for data content
			
 			//Call createTable for OA
 			createTable(LA_extcode, levelname);
 			createReligion(LA_extcode, levelname);
 			getData(LA_extcode, levelname, LA, 'popSexGeog');
			getData(LA_extcode, levelname, LA, 'ageGeog');
			getData(LA_extcode, levelname, LA, 'popTime');
			getData(LA_extcode, levelname, LA, 'relGeog');
			getData(LA_extcode, levelname, LA, 'relAgeGeog');
			getData(LA_extcode, levelname, LA, 'relSexGeog');
	    	
	    	//call highlight map
			if (typeof childname === 'undefined') {					
			   highlightMap(details, postcode);
			}
			// call hover map
			else {			   
			   hoverMap(details, postcode);
			} 
	    });	//jsonfile3
	  });//jsonFile2
    });//jsonFile1     
  });//ready
}	

function GOR_areaDetails(){
	
	var areaId, envelope, markerEnvelope, GOR, CTRY, levelname; 
    var GOR_extcode, CTRY_extcode, childname, childarealist;
    
    GOR             = $.getUrlVar('areaname');
    CTRY            = $.getUrlVar('cn');
    GOR_extcode     = $.getUrlVar('areacode');
    CTRY_extcode    = $.getUrlVar('cc');
    markerEnvelope  = $.getUrlVar('markerenvelope');
    levelname       = $.getUrlVar('levelname');
    childname       = $.getUrlVar('childname');    
	alert("gorextcode" + GOR_extcode);
   jsonFile1 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/code/" + GOR_extcode + "/" + "leveltypeid/11/hierarchyid/26";
   jsonFile2 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/area/";
  // jsonFile3 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/areachildlist/code/" + GOR_extcode + "/hierarchyid/26";
   
   $(document).ready(function(){
      $.getJSON(jsonFile1, function(res1){
	     areaId = res1['ns2:SearchAreaByCodeResponseElement'].AreaFallsWithins.AreaFallsWithin.Area.AreaId;	    
	     $.getJSON(jsonFile2 + areaId,function(res2){
	    	envelope = res2['ns2:GetAreaDetailResponseElement'].AreaDetail.Envelope;
	    	//$.getJSON(jsonFile3,function(res3){
			//   childarealist = res3['extcode'];	
				  
	    	details = envelope + ":" + GOR + ":" + "GOR10NM" + ":" + "GOR/GOR_DEC_2010_EN_BGC" + ":" + markerEnvelope + ":" + "GOR" + ":" + "GOR10CD" + ":" +
	                  " " + ":" + " " + ":" + GOR + ":" + CTRY + ":" + " "  + ":" + " " + ":" + GOR_extcode + ":" + CTRY_extcode + ":" +
                      childarealist + ":" + "LAD11NM" + ":" + "LAD11CD" + ":" + "LAD/LAD_DEC_2011_GB_BGC" + ":" + childname;	    	
	    	
	    	$("#Tabs").toggle(); //display tabs for data content
			
 			//Call createTable for OA
 			createTable(GOR_extcode, levelname);
 			createReligion(GOR_extcode, levelname);
 		    getData(GOR_extcode, levelname, GOR, 'popSexGeog');
			getData(GOR_extcode, levelname, GOR, 'ageGeog');
			getData(GOR_extcode, levelname, GOR, 'popTime');
			getData(GOR_extcode, levelname, GOR, 'relGeog');
			getData(GOR_extcode, levelname, GOR, 'relAgeGeog');
			getData(GOR_extcode, levelname, GOR, 'relSexGeog');
	    	
	    	//call highlight map
			if (typeof childname === 'undefined') {				
			   highlightMap(details, postcode);
			}
			// call hover map
			else {				
			   hoverMap(details, postcode);
			}  	    	
	    });	//jsonfile1	
	  });//jsonFile2
   // });//jsonFile3     
   });//ready
}	

function CTRY_areaDetails(){
	alert("in ctry");
	var areaId, envelope, markerEnvelope, CTRY, levelname; 
    var CTRY_extcode, childname, childarealist;
    
    CTRY            = $.getUrlVar('areaname');
    CTRY_extcode    = $.getUrlVar('areacode');
    markerEnvelope  = $.getUrlVar('markerenvelope');
    levelname       = $.getUrlVar('levelname');
    childname       = $.getUrlVar('childname');
    childarealist   = "E12000001,E12000002,E12000003,E12000004,E12000005,E12000006,E12000007,E12000008,E12000009";
	
   jsonFile1 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/code/" + CTRY_extcode + "/" + "leveltypeid/10/hierarchyid/26";
   jsonFile2 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/area/";
   $(document).ready(function(){
      $.getJSON(jsonFile1, function(res1){
	     areaId = res1['ns2:SearchAreaByCodeResponseElement'].AreaFallsWithins.AreaFallsWithin.Area.AreaId;	    
	     $.getJSON(jsonFile2 + areaId,function(res2){
	    	envelope = res2['ns2:GetAreaDetailResponseElement'].AreaDetail.Envelope; 
	    	details = envelope + ":" + CTRY + ":" + "CTRY11NM" + ":" + "CTRY/CTRY_DEC_2011_GB_BGC" + ":" + markerEnvelope + ":" + "CTRY" + ":" + "CTRY11CD" + ":" +
	                  " " + ":" + " " + ":" + " " + ":" + CTRY + ":" + " "  + ":" + " " + ":" + " "  + ":" + CTRY_extcode + ":" +
	                  childarealist + ":" + "GOR10NM" + ":" + "GOR10CD" + ":" + "GOR/GOR_DEC_2010_EN_BGC" + ":" + childname;	
	    	
	    	$("#Tabs").toggle(); //display tabs for data content
			
 			//Call createTable for OA
 			createTable(CTRY_extcode, levelname);
 			createReligion(CTRY_extcode, levelname);
 			getData(CTRY_extcode, levelname, CTRY, 'popSexGeog');
			getData(CTRY_extcode, levelname, CTRY, 'ageGeog');
			getData(CTRY_extcode, levelname, CTRY, 'popTime');
			getData(CTRY_extcode, levelname, CTRY, 'relGeog');
			getData(CTRY_extcode, levelname, CTRY, 'relAgeGeog');
			getData(CTRY_extcode, levelname, CTRY, 'relSexGeog');
	    	
			//call highlight map
			if (typeof childname === 'undefined') {				
			   highlightMap(details, postcode);
			}
			// call hover map
			else {	
				alert("hovermapcall");
			   hoverMap(details, postcode);
			}  	    	
	    });	//jsonfile1	
	  });//jsonFile2		    
   });//ready
}

// populate area details
// OA details
function  OA_pcode_details(postcode) {	
	var levelname;
	levelname = $.getUrlVar('levelname');
	
	jsonFile1 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/postcode/" + postcode.toLowerCase() + "/hierarchyid/26";
	jsonFile2 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/postcode/" + postcode.toLowerCase() + "/hierarchyid/30";			
	jsonFile3 = "http://onslocalos-glassfishtest.rhcloud.com/resource-web/rs/onslocal/area/";	
	jsonFile4 = "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find?text=" + postcode.toLowerCase() +
	            "&outFields=geometry&sourceCountry=GBR&outSR=27700&f=json&maxLocations=1&bbox=";
	var areaId, envelope, extCode, markerEnvelope, OA, LA, GOR, CTRY, WD, OA_AreaId, LA_AreaId, GOR_AreaId,  CTRY_AreaId;
	var WD_AreaId, WD_extcode, LA_extcode, GOR_extcode, CTRY_extcode, CTRY_Welsh, CTRY_Welsh_Areaid;
	 
	$(document).ready(function(){
	  $.getJSON(jsonFile1, function(res1){
		// ----------------------------------------------------  
		// Get OA postcode details
		// ----------------------------------------------------  
		OA_AreaId          = res1['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[0].Area.AreaId;
	    OA                 = res1['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[0].Area.Name;
	    LA                 = res1['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[0].FallsWithin.Area.Name;  
	    LA_AreaId          = res1['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[0].FallsWithin.Area.AreaId; 
	    GOR                = res1['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[4].Area.Name;
	    GOR_AreaId         = res1['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[4].Area.AreaId;
	    CTRY_Welsh         = res1['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[4].Area.Name;
	    CTRY_Welsh_AreaId  = res1['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[4].Area.AreaId;
	    CTRY               = res1['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[5].Area.Name;
	    CTRY_AreaId        = res1['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[5].Area.AreaId;
	   	    
	    $.getJSON(jsonFile2, function(res2){
	      WD        = res2['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[0].Area.Name;	
	      WD_AreaId  = res2['ns2:FindAreasResponseElement'].AreaFallsWithins.AreaFallsWithin[0].Area.AreaId;
	      
	      $.getJSON(jsonFile3 + OA_AreaId,function(res3){	        	
	 	    envelope    = res3['ns2:GetAreaDetailResponseElement'].AreaDetail.Envelope; 
	 	    //extcode     = res3['ns2:GetAreaDetailResponseElement'].AreaDetail.ExtCode; 
	 	    $.getJSON(jsonFile3 + WD_AreaId,function(res3){	
	 	    	WD_extcode     = res3['ns2:GetAreaDetailResponseElement'].AreaDetail.ExtCode; 
	 	    	$.getJSON(jsonFile3 + LA_AreaId,function(res3){	
	 	    		LA_extcode     = res3['ns2:GetAreaDetailResponseElement'].AreaDetail.ExtCode; 
	 	    		$.getJSON(jsonFile3 + GOR_AreaId,function(res3){	
	 	    			GOR_extcode     = res3['ns2:GetAreaDetailResponseElement'].AreaDetail.ExtCode; 
		 	    		$.getJSON(jsonFile3 +  CTRY_AreaId,function(res3){	
		 	    			CTRY_extcode     = res3['ns2:GetAreaDetailResponseElement'].AreaDetail.ExtCode;
		 	    			$.getJSON(jsonFile3 +  CTRY_Welsh_AreaId,function(res3){	
			 	    			CTRY_Welsh_extcode     = res3['ns2:GetAreaDetailResponseElement'].AreaDetail.ExtCode;
	 	    	
	 	                    $.getJSON(jsonFile4 + envelope, function(res4){	     	    	
	 	                      markerEnvelope    = res4.locations[0].feature.geometry.x + ":" + res4.locations[0].feature.geometry.y; 
	 	                      
	 	                      if(CTRY_Welsh === "Wales"){
	 	                    	 details = envelope + ":" + OA + ":" + " " + ":" + "OA/OA_2011_EW_BGC_V2" + ":" + markerEnvelope + ":" + "OA" + ":" + "OA11CD" + ":" +
							       WD + ":" + LA + ":" + GOR + ":" + CTRY_Welsh  + ":" + WD_extcode + ":" + LA_extcode + ":" +  " "  + ":" + CTRY_Welsh_extcode;	 	       
	 	                      }
	 	                      else{
	 	                    	details = envelope + ":" + OA + ":" + " " + ":" + "OA/OA_2011_EW_BGC_V2" + ":" + markerEnvelope + ":" + "OA" + ":" + "OA11CD" + ":" +
							       WD + ":" + LA + ":" + GOR + ":" + CTRY + ":" + WD_extcode + ":" + LA_extcode + ":" + GOR_extcode + ":" + CTRY_extcode;	 	              
	 	                     }      
			 	              
	 	                     $("#Tabs").toggle(); //display tabs for data content
	 	    				
	 	       			     //Call createTable for OA
	 	       			     createTable(OA, levelname);
	 	       			     createReligion(OA, levelname);	
		 	       			 getData(OA, levelname, OA, 'popSexGeog');
		 	    			 getData(OA, levelname, OA, 'ageGeog');
		 	    			 getData(OA, levelname, OA, 'popTime');
		 	    			 getData(OA, levelname, OA, 'relGeog');
		 	    			 getData(OA, levelname, OA, 'relAgeGeog');
		 	    			 getData(OA, levelname, OA, 'relSexGeog');
	 	                      
	 	                     highlightMap(details,postcode);
	 	                     
	 	                   }); 
		 	    		}); 			 	    		
			 	     }); 
		 	      });
	 	       });	
	 	    }); // jsonFile4
	      }); // jsonFile3	   
	    }); // jsonFile2	      	   
	  }); // jsonFile1		     	   
	}); // ready
}	

function  OA_details() {
	var OA_details;
	
	// = 	$.getUrlVar('xmin') + ":" + $.getUrlVar('ymin') + ":" + $.getUrlVar('xmax') + ":" + $.getUrlVar('xmax') + ":" +
	//	$.getUrlVar('areaname') + ":" +
	//	" " + ":" +
	//	"OA/OA_2011_EW_BGC_V2" + ":" +
	//	$.getUrlVar('markerenvelope') + ":" +
	//	"OA" + ":" +
	//	"OA11CD";
//} 
////	   
//	return OA_details;
}	    	
	

//Read a user input postcode and strip of plus signs,
// convert to uppercase and reformat if necessary
function  postcode_reformat(postcode) {
   // strip + sign from postcode string & convert to uppercase
   postcode                     = postcode.replace(/\+/g, '');
   
   var upperCasePostCode        = postcode.toUpperCase();    	
   var regPostcode              = /^([a-zA-Z]){1}([0-9][0-9]|[0-9]|[a-zA-Z][0-9][a-zA-Z]|[a-zA-Z][0-9][0-9]|[a-zA-Z][0-9]){1}([ ])([0-9][a-zA-z][a-zA-z]){1}$/;
 
   if(regPostcode.test(upperCasePostCode) == false)	
   {	
	   var re                   = /^([A-Z]{1,2}[\dA-Z]{1,2})[ ]?(\d[A-Z]{2})$/i; // case insensitive 	
	   var tempPostCode         = upperCasePostCode.match(re);
	   var reformatPostcode     = tempPostCode[1] + " " + tempPostCode[2];
	   return reformatPostcode;
   }
   else {
	 // postcode formatted correctly
	 return upperCasePostCode;
   }	    	
}

$.extend({
	  getUrlVars: function(){
	    var vars = [], hash;
	    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	    hashes = decodeURI(window.location.href).replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
	    });
	    
	    for(var i = 0; i < hashes.length; i++)
	    {
	      hash = hashes[i].split('=');
	      vars.push(hash[0]);
	      vars[hash[0]] = hash[1];
	    }
	    return vars;
	  },
	  getUrlVar: function(name){
	    return $.getUrlVars()[name];
	  }	  
  });
