function getData(extcode, levelname, areaname, tableType){


	if(levelname == null)
		{levelname = "OA"}

	var geogParam;
	var tableHead;
	var tableBody;
	var tableRow1;
	var tableRow2;
	var tableRow3;
	var tableRow4;
	var tableRow5;

	var extCodeList;
	var OA
	var laCode
	var laName
	var parliconCode
	var parliconName
	var wardCode
	var wardName
	var regionCode
	var regionName
	var nationalCode
	var nationalName
	var countyCode
	var countyName
	
	
	
	if(extcode == "E00115783" || extcode == "E05004528" || extcode == "E07000087" || extcode == "E12000008" || extcode == "E92000001")
	{
		
		OA = "E00115783"
		laCode = "E07000087"
		laName = "Fareham"
		parliconCode = "E14000699"
		parliconName = "Fareham"
		wardCode = "E05004528"
		wardName = "Titchfield"
		regionCode = "E12000008"
		regionName = "South East"
		nationalCode = "E92000001"
		nationalName = "England"
		countyCode = "E10000014"
		countyName = "Hampshire"
		healthName = "South Central"
	}	
	
	
	
	if(extcode == "E00116582" || extcode == "E05004574" || extcode == "E07000090" || extcode == "E12000008" || extcode == "E92000001")
	{
		
		OA = "E00116582"
		laCode = "E07000090"
		laName = "Havant"
		parliconCode = "E14000736"
		parliconName = "Havant"
		wardCode = "E05004574"
		wardName = "Hayling West"
		regionCode = "E12000008"
		regionName = "South East"
		nationalCode = "E92000001"
		nationalName = "England"
		countyCode = "E10000014"
		countyName = "Hampshire"
		healthName = "South Central"
	}	
 	
	
	if(extcode == "W00008440" || extcode == "W05000837" || extcode == "W06000022" || extcode == "W92000004" || extcode == "W92000004")
	{
		
		OA = "W00008440"
		laCode = "W06000022"
		laName = "Newport"
		parliconCode = "W07000056"
		parliconName = "Newport West"
		wardCode = "W05000837"
		wardName = "Caerleon"
		regionCode = "W92000004"
		regionName = "Wales"
		nationalCode = "W92000004"
		nationalName = "Wales"
		countyCode = "w06000022"
		countyName = "Newport"
		healthName = "Wales"
	}	


	//start to create table
	

	if (tableType == "popSexGeog")
	{
		
		tableHead = "<table><span class='tabletitle'>Population by sex and geography (2013)</span><thead><tr><th data-priority='persist'></th>";
		tableBody = "<tbody>";

				//tableHead = tableHead + "<th data-priority='persist'>"+levelname+"<br>("+areaname+")</th>";
				
				tableRow1 = "<tr><td>Total</td>"
				tableRow2 = "<tr><td>Males</td>"
				tableRow3 = "<tr><td>Females</td>"
				
				var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+OA+"&dm/CL_0000671=CI_0005558&jsontype=json-stat&totals=false&diff=2013";
			
				$.getJSON(URL, function(result)
					{
					
					    if(levelname =="OA")
					    	{
					    tableHead = tableHead + "<th data-priority='persist'>Output Area<br>("+OA+")</th>";
					    all = result["SAPEDE 2013"].value[0] ;
						male = result["SAPEDE 2013"].value[1] ;
						female = result["SAPEDE 2013"].value[2];
						tableRow1 = tableRow1 + "<td>"+all+"</td>";
						tableRow2 = tableRow2 + "<td>"+male+"</td>";
						tableRow3 = tableRow3 + "<td>"+female+"</td>";
					    	}
						
						var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011WARDH&dm/2011WARDH="+wardCode+"&dm/CL_0000671=CI_0005558&jsontype=json-stat&totals=false&diff=2013";
				
						$.getJSON(URL, function(result)
								{
								
								if(levelname == "WD" || levelname =="OA")
						    	{
									tableHead = tableHead + "<th data-priority='persist'>Ward<br>("+wardName+")</th><th data-priority='persist'>Westminster<br>parliamentary<br>constituency<br>("+parliconName+")</th>";
									all = result["SAPEDE 2013"].value[0] ;
									male = result["SAPEDE 2013"].value[1] ;
									female = result["SAPEDE 2013"].value[2];
									tableRow1 = tableRow1 + "<td>"+all+"</td><td>Not Available</td>";
									tableRow2 = tableRow2 + "<td>"+male+"</td><td>Not Available</td>";
									tableRow3 = tableRow3 + "<td>"+female+"</td><td>Not Available</td>";
						    	}
								
								var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+laCode+"&dm/CL_0000671=CI_0005558&jsontype=json-stat&totals=false&diff=2013";
						
								$.getJSON(URL, function(result)
										{
										
									if(levelname == "LAD" || levelname == "WD" || levelname =="OA")
							    	{
										tableHead = tableHead + "<th data-priority='persist'>Local<br>authority<br>("+laName+")</th><th data-priority='persist'>Health<br>authority<br>("+healthName+")</th>";
										all = result["SAPEDE 2013"].value[0] ;
										male = result["SAPEDE 2013"].value[1] ;
										female = result["SAPEDE 2013"].value[2];
										tableRow1 = tableRow1 + "<td>"+all+"</td><td>Not Available</td>";
										tableRow2 = tableRow2 + "<td>"+male+"</td><td>Not Available</td>";
										tableRow3 = tableRow3 + "<td>"+female+"</td><td>Not Available</td>";
							    	}
											
									var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+regionCode+"&dm/CL_0000671=CI_0005558&jsontype=json-stat&totals=false&diff=2013";
									
									$.getJSON(URL, function(result)
											{
											
										if(levelname == "GOR" || levelname == "LAD" || levelname == "WD" || levelname =="OA")
								    	{
											tableHead = tableHead + "<th data-priority='persist'>Region<br>("+regionName+")</th>";
											all = result["SAPEDE 2013"].value[0] ;
											male = result["SAPEDE 2013"].value[1] ;
											female = result["SAPEDE 2013"].value[2];
											tableRow1 = tableRow1 + "<td>"+all+"</td>";
											tableRow2 = tableRow2 + "<td>"+male+"</td>";
											tableRow3 = tableRow3 + "<td>"+female+"</td>";
								    	}
												
										var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+nationalCode+"&dm/CL_0000671=CI_0005558&jsontype=json-stat&totals=false&diff=2013";
										
										$.getJSON(URL, function(result)
												{
												
											if(levelname == "CTRY" || levelname == "GOR" || levelname == "LAD" || levelname == "WD" || levelname =="OA")
									    	{
												tableHead = tableHead + "<th data-priority='persist'>National<br>("+nationalName+")</th>";
												all = result["SAPEDE 2013"].value[0] ;
												male = result["SAPEDE 2013"].value[1] ;
												female = result["SAPEDE 2013"].value[2];
												tableRow1 = tableRow1 + "<td>"+all+"</td>";
												tableRow2 = tableRow2 + "<td>"+male+"</td>";
												tableRow3 = tableRow3 + "<td>"+female+"</td>";
									    	}
													
													
													tableRow1 = tableRow1 + "</tr>";
													tableRow2 = tableRow2 + "</tr>";
													tableRow3 = tableRow3 + "</tr>";
													var tableRows = tableRow1 + tableRow2 + tableRow3;

													completeTable(tableHead, tableBody, tableRows, tableType); 				
												});				
											});	 				
										});			
								});	
	
					});	
				
				
				

	}
	
	if (tableType == "ageGeog")
	{
				
				tableHead = "<table><span class='tabletitle'>Age by geography (2013)</span><thead><tr><th data-priority='persist'></th>";
				tableBody = "<tbody>";

				
				tableRow1 = "<tr><td>Under 1</td>";
				tableRow2 = "<tr><td>1</td>";
				tableRow3 = "<tr><td>2</td>";
				tableRow4 = "<tr><td>3</td>";
				tableRow5 = "<tr><td>4</td>";
				
				
				var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+OA+"&dm/CL_0000670=CI_0005569&jsontype=json-stat&totals=false&diff=2013"
			
				$.getJSON(URL, function(result)
					{
					
					    if(levelname =="OA")
					    	{
					    tableHead = tableHead + "<th data-priority='persist'>Output Area<br>("+OA+")</th>";
					    under1 = result["SAPEDE 2013"].value[1] ;
						one = result["SAPEDE 2013"].value[2] ;
						two = result["SAPEDE 2013"].value[3] ;
						three = result["SAPEDE 2013"].value[4] ;
						four = result["SAPEDE 2013"].value[5] ;
						tableRow1 = tableRow1 + "<td>"+under1+"</td>";
						tableRow2 = tableRow2 + "<td>"+one+"</td>";
						tableRow3 = tableRow3 + "<td>"+two+"</td>";
						tableRow4 = tableRow4 + "<td>"+three+"</td>";
						tableRow5 = tableRow5 + "<td>"+four+"</td>";
					    	}
						
						var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011WARDH&dm/2011WARDH="+wardCode+"&dm/CL_0000670=CI_0005569&jsontype=json-stat&totals=false&diff=2013"
				
						$.getJSON(URL, function(result)
								{
								
								if(levelname == "WD" || levelname =="OA")
						    	{
									tableHead = tableHead + "<th data-priority='persist'>Ward<br>("+wardName+")</th><th data-priority='persist'>Westminster<br>parliamentary<br>constituency<br>("+parliconName+")</th>";
									under1 = result["SAPEDE 2013"].value[1] ;
									one = result["SAPEDE 2013"].value[2] ;
									two = result["SAPEDE 2013"].value[3] ;
									three = result["SAPEDE 2013"].value[4] ;
									four = result["SAPEDE 2013"].value[5] ;
									tableRow1 = tableRow1 + "<td>"+under1+"</td><td>Not Available</td>";
									tableRow2 = tableRow2 + "<td>"+one+"</td><td>Not Available</td>";
									tableRow3 = tableRow3 + "<td>"+two+"</td><td>Not Available</td>";
									tableRow4 = tableRow4 + "<td>"+three+"</td><td>Not Available</td>";
									tableRow5 = tableRow5 + "<td>"+four+"</td><td>Not Available</td>";
						    	}
								
								var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+laCode+"&dm/CL_0000670=CI_0005569&jsontype=json-stat&totals=false&diff=2013"
						
								$.getJSON(URL, function(result)
										{
										
									if(levelname == "LAD" || levelname == "WD" || levelname =="OA")
							    	{
										tableHead = tableHead + "<th data-priority='persist'>Local<br>authority<br>("+laName+")</th><th data-priority='persist'>Health<br>authority<br>("+healthName+")</th>";
										under1 = result["SAPEDE 2013"].value[1] ;
										one = result["SAPEDE 2013"].value[2] ;
										two = result["SAPEDE 2013"].value[3] ;
										three = result["SAPEDE 2013"].value[4] ;
										four = result["SAPEDE 2013"].value[5] ;
										tableRow1 = tableRow1 + "<td>"+under1+"</td><td>Not Available</td>";
									tableRow2 = tableRow2 + "<td>"+one+"</td><td>Not Available</td>";
									tableRow3 = tableRow3 + "<td>"+two+"</td><td>Not Available</td>";
									tableRow4 = tableRow4 + "<td>"+three+"</td><td>Not Available</td>";
									tableRow5 = tableRow5 + "<td>"+four+"</td><td>Not Available</td>";
							    	}
											
									var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+regionCode+"&dm/CL_0000670=CI_0005569&jsontype=json-stat&totals=false&diff=2013"
									
									$.getJSON(URL, function(result)
											{
											
										if(levelname == "GOR" || levelname == "LAD" || levelname == "WD" || levelname =="OA")
								    	{
											tableHead = tableHead + "<th data-priority='persist'>Region<br>("+regionName+")</th>";
											under1 = result["SAPEDE 2013"].value[1] ;
											one = result["SAPEDE 2013"].value[2] ;
											two = result["SAPEDE 2013"].value[3] ;
											three = result["SAPEDE 2013"].value[4] ;
											four = result["SAPEDE 2013"].value[5] ;
											tableRow1 = tableRow1 + "<td>"+under1+"</td>";
											tableRow2 = tableRow2 + "<td>"+one+"</td>";
											tableRow3 = tableRow3 + "<td>"+two+"</td>";
											tableRow4 = tableRow4 + "<td>"+three+"</td>";
											tableRow5 = tableRow5 + "<td>"+four+"</td>";
								    	}
												
										var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+nationalCode+"&dm/CL_0000670=CI_0005569&jsontype=json-stat&totals=false&diff=2013"
										
										$.getJSON(URL, function(result)
												{
												
											if(levelname == "CTRY" || levelname == "GOR" || levelname == "LAD" || levelname == "WD" || levelname =="OA")
									    	{
												tableHead = tableHead + "<th data-priority='persist'>National<br>("+nationalName+")</th>";
												under1 = result["SAPEDE 2013"].value[1] ;
												one = result["SAPEDE 2013"].value[2] ;
												two = result["SAPEDE 2013"].value[3] ;
												three = result["SAPEDE 2013"].value[4] ;
												four = result["SAPEDE 2013"].value[5] ;
												tableRow1 = tableRow1 + "<td>"+under1+"</td>";
												tableRow2 = tableRow2 + "<td>"+one+"</td>";
												tableRow3 = tableRow3 + "<td>"+two+"</td>";
												tableRow4 = tableRow4 + "<td>"+three+"</td>";
												tableRow5 = tableRow5 + "<td>"+four+"</td>";
									    	}
													
													
													tableRow1 = tableRow1 + "</tr>";
													tableRow2 = tableRow2 + "</tr>";
													tableRow3 = tableRow3 + "</tr>";
													tableRow4 = tableRow4 + "</tr>";
													tableRow5 = tableRow5 + "</tr>";
													var tableRows = tableRow1 + tableRow2 + tableRow3 + tableRow4 + tableRow5;

													completeTable(tableHead, tableBody, tableRows, tableType); 				
												});				
											});	 				
										});			
								});	
	
					});	
				
				
				

	}

	if (tableType == "popTime")
	{
		
		tableHead = "<table><span class='tabletitle'>Population over time (time series, 2013)</span><thead><tr><th data-priority='persist'></th>";
		tableBody = "<tbody>";
				
				tableRow1 = "<tr><td>2013</td>";

				
				var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+OA+"&dm/CL_0000670=CI_0005569&dm/CL_0000671=CI_0005558&jsontype=json-stat&totals=false&diff=2013"
			
				$.getJSON(URL, function(result)
					{
					
					    if(levelname =="OA")
					    	{
					    tableHead = tableHead + "<th data-priority='persist'>Output Area<br>("+OA+")</th>";
					    under1 = result["SAPEDE 2013"].value[0] ;
	
						tableRow1 = tableRow1 + "<td>"+under1+"</td>";
					
					    	}
						
						var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011WARDH&dm/2011WARDH="+wardCode+"&dm/CL_0000670=CI_0005569&dm/CL_0000671=CI_0005558&jsontype=json-stat&totals=false&diff=2013"
				
						$.getJSON(URL, function(result)
								{
								
								if(levelname == "WD" || levelname =="OA")
						    	{
									tableHead = tableHead + "<th data-priority='persist'>Ward<br>("+wardName+")</th><th data-priority='persist'>Westminster<br>parliamentary<br>constituency<br>("+parliconName+")</th>";
									under1 = result["SAPEDE 2013"].value[0] ;
									
									tableRow1 = tableRow1 + "<td>"+under1+"</td><td>Not Available</td>";
								
						    	}
								
								var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+laCode+"&dm/CL_0000670=CI_0005569&dm/CL_0000671=CI_0005558&jsontype=json-stat&totals=false&diff=2013"
						
								$.getJSON(URL, function(result)
										{
										
									if(levelname == "LAD" || levelname == "WD" || levelname =="OA")
							    	{
										tableHead = tableHead + "<th data-priority='persist'>Local<br>authority<br>("+laName+")</th><th data-priority='persist'>Health<br>authority<br>("+healthName+")</th>";
										under1 = result["SAPEDE 2013"].value[0] ;
										
										tableRow1 = tableRow1 + "<td>"+under1+"</td><td>Not Available</td>";
									
							    	}
											
									var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+regionCode+"&dm/CL_0000670=CI_0005569&dm/CL_0000671=CI_0005558&jsontype=json-stat&totals=false&diff=2013"
									
									$.getJSON(URL, function(result)
											{
											
										if(levelname == "GOR" || levelname == "LAD" || levelname == "WD" || levelname =="OA")
								    	{
											tableHead = tableHead + "<th data-priority='persist'>Region<br>("+regionName+")</th>";
											under1 = result["SAPEDE 2013"].value[0] ;
											
											tableRow1 = tableRow1 + "<td>"+under1+"</td>";
											
								    	}
												
										var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/SAPEDE.json?context=Social&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+nationalCode+"&dm/CL_0000670=CI_0005569&dm/CL_0000671=CI_0005558&jsontype=json-stat&totals=false&diff=2013"
										
										$.getJSON(URL, function(result)
												{
												
											if(levelname == "CTRY" || levelname == "GOR" || levelname == "LAD" || levelname == "WD" || levelname =="OA")
									    	{
												tableHead = tableHead + "<th data-priority='persist'>National<br>("+nationalName+")</th>";
												under1 = result["SAPEDE 2013"].value[0] ;
										
												tableRow1 = tableRow1 + "<td>"+under1+"</td>";
												
									    	}
													
													
													
													tableRow1 = tableRow1 + "</tr>";
													var tableRows = tableRow1;
								
													completeTable(tableHead, tableBody, tableRows, tableType); 				
												});				
											});	 				
										});			
								});	
	
					});	
				
				
				

	}
	
	if (tableType == "relGeog")
	{
		tableHead = "<table><span class='tabletitle'>Religion by geography (2013)</span><thead><tr><th data-priority='persist'></th>";
		tableBody = "<tbody>";

				//tableHead = tableHead + "<th data-priority='persist'>"+levelname+"<br>("+areaname+")</th>";
				
				tableRow1 = "<tr><td>Total</td>"
				tableRow2 = "<tr><td>Christian</td>"
				tableRow3 = "<tr><td>Muslim</td>"
				
				var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/LC2107EW.json?context=Census&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+OA+"&jsontype=json-stat&totals=false&dm/CL_0000035=CI_0000121&dm/CL_0000163=CI_0001887";
			
				$.getJSON(URL, function(result)
					{
					
					    if(levelname =="OA")
					    	{
					    tableHead = tableHead + "<th data-priority='persist'>Output Area<br>("+OA+")</th>";
					    all = result["LC2107EW"].value[0] ;
						christian = result["LC2107EW"].value[1] ;
						muslim = result["LC2107EW"].value[5];
						tableRow1 = tableRow1 + "<td>"+all+"</td>";
						tableRow2 = tableRow2 + "<td>"+christian+"</td>";
						tableRow3 = tableRow3 + "<td>"+muslim+"</td>";
					    	}
						
						var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/LC2107EW.json?context=Census&apikey=l4iaoeZCum&geog=2011WARDH&dm/2011WARDH="+wardCode+"&jsontype=json-stat&totals=false&dm/CL_0000035=CI_0000121&dm/CL_0000163=CI_0001887";
				
						$.getJSON(URL, function(result)
								{
								
								if(levelname == "WD" || levelname =="OA")
						    	{
									tableHead = tableHead + "<th data-priority='persist'>Ward<br>("+wardName+")</th><th data-priority='persist'>Westminster<br>parliamentary<br>constituency<br>("+parliconName+")</th>";
									all = result["LC2107EW"].value[0] ;
									christian = result["LC2107EW"].value[1] ;
									muslim = result["LC2107EW"].value[5];
									tableRow1 = tableRow1 + "<td>"+all+"</td><td>Not Available</td>";
									tableRow2 = tableRow2 + "<td>"+christian+"</td><td>Not Available</td>";
									tableRow3 = tableRow3 + "<td>"+muslim+"</td><td>Not Available</td>";
						    	}
								
								var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/LC2107EW.json?context=Census&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+laCode+"&jsontype=json-stat&totals=false&dm/CL_0000035=CI_0000121&dm/CL_0000163=CI_0001887";
						
					
								$.getJSON(URL, function(result)
										{
										
									if(levelname == "LAD" || levelname == "WD" || levelname =="OA")
							    	{
										tableHead = tableHead + "<th data-priority='persist'>Local<br>authority<br>("+laName+")</th><th data-priority='persist'>Health<br>authority<br>("+healthName+")</th>";
										all = result["LC2107EW"].value[0] ;
										christian = result["LC2107EW"].value[1] ;
										muslim = result["LC2107EW"].value[5];
										tableRow1 = tableRow1 + "<td>"+all+"</td><td>Not Available</td>";
										tableRow2 = tableRow2 + "<td>"+christian+"</td><td>Not Available</td>";
										tableRow3 = tableRow3 + "<td>"+muslim+"</td><td>Not Available</td>";
							    	}
											
									var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/LC2107EW.json?context=Census&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+regionCode+"&jsontype=json-stat&totals=false&dm/CL_0000035=CI_0000121&dm/CL_0000163=CI_0001887";
									
									$.getJSON(URL, function(result)
											{
											
										if(levelname == "GOR" || levelname == "LAD" || levelname == "WD" || levelname =="OA")
								    	{
											tableHead = tableHead + "<th data-priority='persist'>Region<br>("+regionName+")</th>";
											all = result["LC2107EW"].value[0] ;
											christian = result["LC2107EW"].value[1] ;
											muslim = result["LC2107EW"].value[5];
											tableRow1 = tableRow1 + "<td>"+all+"</td>";
											tableRow2 = tableRow2 + "<td>"+christian+"</td>";
											tableRow3 = tableRow3 + "<td>"+muslim+"</td>";
								    	}
												
										var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/LC2107EW.json?context=Census&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+nationalCode+"&jsontype=json-stat&totals=false&dm/CL_0000035=CI_0000121&dm/CL_0000163=CI_0001887";
										
										$.getJSON(URL, function(result)
												{
												
											if(levelname == "CTRY" || levelname == "GOR" || levelname == "LAD" || levelname == "WD" || levelname =="OA")
									    	{
												tableHead = tableHead + "<th data-priority='persist'>National<br>("+nationalName+")</th>";
												all = result["LC2107EW"].value[0] ;
												christian = result["LC2107EW"].value[1] ;
												muslim = result["LC2107EW"].value[5];
												tableRow1 = tableRow1 + "<td>"+all+"</td>";
												tableRow2 = tableRow2 + "<td>"+christian+"</td>";
												tableRow3 = tableRow3 + "<td>"+muslim+"</td>";
									    	}
													
													
													
													tableRow1 = tableRow1 + "</tr>";
													tableRow2 = tableRow2 + "</tr>";
													tableRow3 = tableRow3 + "</tr>";
													var tableRows = tableRow1 + tableRow2 + tableRow3;
													completeTable(tableHead, tableBody, tableRows, tableType); 				
												});				
											});	 				
										});			
								});	
	
					});	
				
				
				

	}
	
	
	
	if (tableType == "relAgeGeog")
	{
		tableHead = "<table><span class='tabletitle'>Religion by age and geography (2013)</span><thead><tr><th data-priority='persist'></th><th data-priority='persist'></th>";
		tableBody = "<tbody>";

				//tableHead = tableHead + "<th data-priority='persist'>"+levelname+"<br>("+areaname+")</th>";
				
				tableRow1 = "<tr><th style='border-top:1px solid black;' rowspan='3'><font size='2'>Christian</font></th><td>0-15</td>"
				tableRow2 = "<tr><td>16-24</td>"
				tableRow3 = "<tr><td>25-34</td>"
				
				var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/LC2107EW.json?context=Census&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+OA+"&jsontype=json-stat&totals=false&dm/CL_0000006=CI_0000070&dm/CL_0000035=CI_0000121";
						
				$.getJSON(URL, function(result)
					{
					
						
					    if(levelname =="OA")
					    	{
					    tableHead = tableHead + "<th data-priority='persist'>Output Area<br>("+OA+")</th>";
					    groupOne = result["LC2107EW"].value[1] ;
						groupTwo = result["LC2107EW"].value[2] ;
						groupThree = result["LC2107EW"].value[3];
						tableRow1 = tableRow1 + "<td>"+groupOne+"</td>";
						tableRow2 = tableRow2 + "<td>"+groupTwo+"</td>";
						tableRow3 = tableRow3 + "<td>"+groupThree+"</td>";
					    	}
						
						var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/LC2107EW.json?context=Census&apikey=l4iaoeZCum&geog=2011WARDH&dm/2011WARDH="+wardCode+"&jsontype=json-stat&totals=false&dm/CL_0000006=CI_0000070&dm/CL_0000035=CI_0000121";
				
						$.getJSON(URL, function(result)
								{
								
								if(levelname == "WD" || levelname =="OA")
						    	{
									tableHead = tableHead + "<th data-priority='persist'>Ward<br>("+wardName+")</th><th data-priority='persist'>Westminster<br>parliamentary<br>constituency<br>("+parliconName+")</th>";
									groupOne = result["LC2107EW"].value[1] ;
									groupTwo = result["LC2107EW"].value[2] ;
									groupThree = result["LC2107EW"].value[3];
									tableRow1 = tableRow1 + "<td>"+groupOne+"</td><td>Not Available</td>";
									tableRow2 = tableRow2 + "<td>"+groupTwo+"</td><td>Not Available</td>";
									tableRow3 = tableRow3 + "<td>"+groupThree+"</td><td>Not Available</td>";
						    	}
								
								var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/LC2107EW.json?context=Census&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+laCode+"&jsontype=json-stat&totals=false&dm/CL_0000006=CI_0000070&dm/CL_0000035=CI_0000121";
						
								$.getJSON(URL, function(result)
										{
										
									if(levelname == "LAD" || levelname == "WD" || levelname =="OA")
							    	{
										tableHead = tableHead + "<th data-priority='persist'>Local<br>authority<br>("+laName+")</th><th data-priority='persist'>Health<br>authority<br>("+healthName+")</th>";
										groupOne = result["LC2107EW"].value[1];
										groupTwo = result["LC2107EW"].value[2];
										groupThree = result["LC2107EW"].value[3];
										tableRow1 = tableRow1 + "<td>"+groupOne+"</td><td>Not Available</td>";
										tableRow2 = tableRow2 + "<td>"+groupTwo+"</td><td>Not Available</td>";
										tableRow3 = tableRow3 + "<td>"+groupThree+"</td><td>Not Available</td>";
							    	}
											
									var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/LC2107EW.json?context=Census&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+regionCode+"&jsontype=json-stat&totals=false&dm/CL_0000006=CI_0000070&dm/CL_0000035=CI_0000121";
									
									$.getJSON(URL, function(result)
											{
											
										if(levelname == "GOR" || levelname == "LAD" || levelname == "WD" || levelname =="OA")
								    	{
											tableHead = tableHead + "<th data-priority='persist'>Region<br>("+regionName+")</th>";
											groupOne = result["LC2107EW"].value[1] ;
											groupTwo = result["LC2107EW"].value[2] ;
											groupThree = result["LC2107EW"].value[3];
											tableRow1 = tableRow1 + "<td>"+groupOne+"</td>";
											tableRow2 = tableRow2 + "<td>"+groupTwo+"</td>";
											tableRow3 = tableRow3 + "<td>"+groupThree+"</td>";
								    	}
												
										var URL  = "http://data.ons.gov.uk/ons/api/data/dataset/LC2107EW.json?context=Census&apikey=l4iaoeZCum&geog=2011STATH&dm/2011STATH="+nationalCode+"&jsontype=json-stat&totals=false&dm/CL_0000006=CI_0000070&dm/CL_0000035=CI_0000121";
										
										$.getJSON(URL, function(result)
												{
												
											if(levelname == "CTRY" || levelname == "GOR" || levelname == "LAD" || levelname == "WD" || levelname =="OA")
									    	{
												tableHead = tableHead + "<th data-priority='persist'>National<br>("+nationalName+")</th>";
												groupOne = result["LC2107EW"].value[1] ;
												groupTwo = result["LC2107EW"].value[2] ;
												groupThree = result["LC2107EW"].value[3];
												tableRow1 = tableRow1 + "<td>"+groupOne+"</td>";
												tableRow2 = tableRow2 + "<td>"+groupTwo+"</td>";
												tableRow3 = tableRow3 + "<td>"+groupThree+"</td>";
									    	}
													
													
													
													tableRow1 = tableRow1 + "</tr>";
													tableRow2 = tableRow2 + "</tr>";
													tableRow3 = tableRow3 + "</tr>";
													
													var tableRows = tableRow1 + tableRow2 + tableRow3;								
													completeTable(tableHead, tableBody, tableRows, tableType); 				
												});				
											});	 				
										});			
								});	
	
					});	
				
				
				

	}
	

}

function completeTable(tableHead, tableBody, tableRows, tableType){
	$(document).ready(function(){
		//add data array to correct table
		//complete the HTML
		tableHead = tableHead + "</tr></thead>";
		tableBody = tableBody + tableRows + "</tbody></table>"

		var completeTable = tableHead + tableBody
		//send contents to "popSexGeog" table area
		if (tableType == "popSexGeog")
		{
			$('#popSexGeog').append(completeTable);
		}
		else if (tableType == "ageGeog")
		{
			$('#ageGeog').append(completeTable);
		}
		else if (tableType == "popTime")
		{
			$('#popTime').append(completeTable);
		}
		else if (tableType == "relGeog")
		{
			$('#relGeog').append(completeTable);
		}
		else if (tableType == "relAgeGeog")
		{
			$('#relAgeGeog').append(completeTable);
		}
	});
}


