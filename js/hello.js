function hasADegree(){
	//alert("Has a Degree!");
	if(document.getElementById("Degree").checked == true)
	{document.getElementById("youArea").innerHTML = '<form>Degree: <input type="text" name="Degree" id="DegreeName"><br>'+'School: <input type="text" name="Name" id="School"></form><br>';FieldDegree = ""; FieldSchool = "";}
	else {document.getElementById("youArea").innerHTML = ""; FieldDegree = ""; FieldSchool = "";}
}

function hasExperience(){
	if(document.getElementById("Experience").checked == true)
{document.getElementById("youArea2").innerHTML = 'Company: <input type="text" name="Name" id="CompanyExperience"><br>'+ "Emphasize on " +
	'<select id="Emphasize"><option>Teamwork</option><option>Individual Performance</option><option>Situation Experience</option><option>Contacts/Relations</option></select>';
}else {document.getElementById("youArea2").innerHTML = "";}
	}

function hasAddress(){
	if(document.getElementById("Address").checked == true)
{document.getElementById("IndustryArea").innerHTML = 'Address line 1: <input type="text" name="Address1" id="Address1"><br>'+ "Address line 2: " +
	'<input type="text" name="Address2" id="Address2"><br>' + "Address line 3: " + '<input type="text" name="Address3" id="Address3"><br>';
}else {document.getElementById("IndustryArea").innerHTML = "";}
	}

function generateEmphasize(elemID,company) 
{
    		var stringout = ""
    		var randomChoice
    		switch (elemID) 
    		{
		    case "Teamwork":
		    if(randomChoice=Math.floor(Math.random()*11) <= 4)
		    	{		        stringout += "A constant throughout " + generate("mycareer") + " has been my passion for the design and delivery of team work. Comfortable and experienced giving both large and small-group projects, I have conducted hundreds of training seminars for diverse audiences across all organizational levels.";}
		    	else { 			stringout += "I am adept in building relationships, consensus and a shared sense of purpose. I am known for my ability to quickly establish trust with employees, mediate disputes and motivate others into action in order to achieve great teamwork.";}
		    break;
		    case "Individual Performance":
		    if(randomChoice=Math.floor(Math.random()*11) <= 4)
		    	{		        stringout += "In my position, I have earned a reputation for consistently exceeding company and customer expectations. My manager has asked me to return this month, but I yearn to gain additional field experience. I am impressed by " + company + "'s innovation and success, and I would very much like to be part of such a winning company.";}
		    	else {			stringout += "Known for excellent client-facing skills, I have participated in proposals and presentations that have landed six-figure contracts. I also excel in merging business and user needs into high-quality, cost-effective design solutions while keeping within budgetary constraints.";}
		    break;
		    case "Situation Experience":
		    if(randomChoice=Math.floor(Math.random()*11) <= 4)
		    	{  				stringout += "In my position, I have been responsible for a number of technical functions I would be glad to expose in details during an interview. Recently, my resposabilities were extanded and now include recruiting, interviewing, hiring and training new employees. A quick learner of complex concepts and legal issues, I am eager to broaden these competencies.";}
		   		else { 			stringout += "In my position, I direct phases of both the creative and technical elements of marketing initiatives and offer a history of proven results I would be glad to expose in details during an interview.";}
		    break;
		    case "Contacts/Relations":
 			if(randomChoice=Math.floor(Math.random()*11) <= 4)
		    	{  				stringout += "In my position, I have handled a considerable number of face-to-face interaction with peers in the community. Making the most of my time at meetings, both to educate attendees and bring colleagues together in settings that encouraged meaningful interactions. I have had the opportunity to considerably network with peers and professionals in the field. I am impressed by " + company + "'s innovation and success, and I would very much think such a winning company could benefit from my portfolio of contacts.";}
		   		else { 			stringout += "In my position, I have handled a considerable number of face-to-face interaction with peers in the community. Making the most of my time at meetings, both to educate attendees and bring colleagues together in settings that encouraged meaningful interactions. I have had the opportunity to considerably network with peers and professionals in the field. I am impressed by " + company + "'s innovation and success, and I would very much think such a winning company could benefit from my portfolio of contacts.";}

		    break;
			}

return stringout
}

function generate(elemID) 
{


    	do {
    		switch (elemID) 
    		{
		    case "Greetings": out = obj[Math.floor(Math.random() * obj.length)].Greetings;   break;
		    case "Thanks":	out = obj[Math.floor(Math.random() * obj.length)].Thanks;		    break;
		    case "LastWord":out = obj[Math.floor(Math.random() * obj.length)].LastWord;		    break;
		    case "Background":	out = obj[Math.floor(Math.random() * obj.length)].Background;		    break;
		    case "Talent":out = obj[Math.floor(Math.random() * obj.length)].Talent;		    break;
		    case "Skills": out = obj[Math.floor(Math.random() * obj.length)].Skills;		    break;
		    case "Talent2": out = obj[Math.floor(Math.random() * obj.length)].Talent2;		    break;
		    case "DutyFulfiller":	out = obj[Math.floor(Math.random() * obj.length)].DutyFulfiller;		    break;		    
		    case "Mechanic":	out = obj[Math.floor(Math.random() * obj.length)].Mechanic;		    break;		    
		    case "Nurturer":	out = obj[Math.floor(Math.random() * obj.length)].Nurturer;		    break;
		    case "Artist":	out = obj[Math.floor(Math.random() * obj.length)].Artist;		    break;		    
		    case "Protector":	out = obj[Math.floor(Math.random() * obj.length)].Protector;		    break;		    
		    case "Idealist":	out = obj[Math.floor(Math.random() * obj.length)].Idealist;		    break;
		    case "Scientist":	out = obj[Math.floor(Math.random() * obj.length)].Scientist;		    break;		    
		    case "Thinker":	out = obj[Math.floor(Math.random() * obj.length)].Thinker;		    break;		    
		    case "Doer":	out = obj[Math.floor(Math.random() * obj.length)].Doer;		    break;
		    case "Guardian":	out = obj[Math.floor(Math.random() * obj.length)].Guardian;		    break;		    
		    case "Performer":	out = obj[Math.floor(Math.random() * obj.length)].Performer;		    break;		    
		    case "Caregiver":	out = obj[Math.floor(Math.random() * obj.length)].Caregiver;		    break;
		    case "Inspirer":	out = obj[Math.floor(Math.random() * obj.length)].Inspirer;		    break;
		    case "Giver":	out = obj[Math.floor(Math.random() * obj.length)].Giver;		    break;		    
		    case "Visionary":	out = obj[Math.floor(Math.random() * obj.length)].Visionary;		    break;		    
		    case "Executive":	out = obj[Math.floor(Math.random() * obj.length)].Executive;		    break;
		    case "IDutyFulfiller":	out = obj[Math.floor(Math.random() * obj.length)].IDutyFulfiller;		    break;		    
		    case "IMechanic":	out = obj[Math.floor(Math.random() * obj.length)].IMechanic;		    break;		    
		    case "INurturer":	out = obj[Math.floor(Math.random() * obj.length)].INurturer;		    break;
		    case "IArtist":out = obj[Math.floor(Math.random() * obj.length)].IArtist;		    break;		    
		    case "IProtector":out = obj[Math.floor(Math.random() * obj.length)].IProtector;		    break;		    
		    case "IIdealist":out = obj[Math.floor(Math.random() * obj.length)].IIdealist;		    break;
		    case "IScientist":out = obj[Math.floor(Math.random() * obj.length)].IScientist;		    break;		    
		    case "IThinker":out = obj[Math.floor(Math.random() * obj.length)].IThinker;		    break;		    
		    case "IDoer":out = obj[Math.floor(Math.random() * obj.length)].IDoer;		    break;
		    case "IGuardian":out = obj[Math.floor(Math.random() * obj.length)].IGuardian;		    break;		    
		    case "IPerformer":out = obj[Math.floor(Math.random() * obj.length)].IPerformer;		    break;		    
		    case "ICaregiver":out = obj[Math.floor(Math.random() * obj.length)].ICaregiver;		    break;
		    case "IInspirer":out = obj[Math.floor(Math.random() * obj.length)].IInspirer;		    break;
		    case "IGiver":out = obj[Math.floor(Math.random() * obj.length)].IGiver;		    break;		    
		    case "IVisionary":out = obj[Math.floor(Math.random() * obj.length)].IVisionary;		    break;		    
		    case "IExecutive":out = obj[Math.floor(Math.random() * obj.length)].IExecutive;		    break;
		    case "HelpsMe":out = obj[Math.floor(Math.random() * obj.length)].HelpsMe;		    break;		    
		    case "Hardest":out = obj[Math.floor(Math.random() * obj.length)].Hardest;		    break;		    
		    case "Challenge":out = obj[Math.floor(Math.random() * obj.length)].Challenge;		    break;
		    case "Proud":out = obj[Math.floor(Math.random() * obj.length)].Proud;		    break;		    
		    case "Apply":out = obj[Math.floor(Math.random() * obj.length)].Apply;		    break;		    
		    case "Joining":out = obj[Math.floor(Math.random() * obj.length)].Joining;break;
		    case "Projects":out = obj[Math.floor(Math.random() * obj.length)].Projects;break;
		    case"AccountingandAuditingServices":out=obj[Math.floor(Math.random()*obj.length)].AccountingandAuditingServices;break;
			case"AdvertisingandPRServices":out=obj[Math.floor(Math.random()*obj.length)].AdvertisingandPRServices;break;
			case"AerospaceandDefense":out=obj[Math.floor(Math.random()*obj.length)].AerospaceandDefense;break;
			case"AgricultureForestryFishing":out=obj[Math.floor(Math.random()*obj.length)].AgricultureForestryFishing;break;
			case"ArchitecturalandDesignServices":out=obj[Math.floor(Math.random()*obj.length)].ArchitecturalandDesignServices;break;
			case"AutomotiveandPartsMfg":out=obj[Math.floor(Math.random()*obj.length)].AutomotiveandPartsMfg;break;
			case"AutomotiveSalesandRepairServices":out=obj[Math.floor(Math.random()*obj.length)].AutomotiveSalesandRepairServices;break;
			case"Banking":out=obj[Math.floor(Math.random()*obj.length)].Banking;break;
			case"BiotechnologyPharmaceuticals":out=obj[Math.floor(Math.random()*obj.length)].BiotechnologyPharmaceuticals;break;
			case"BroadcastingMusicandFilm":out=obj[Math.floor(Math.random()*obj.length)].BroadcastingMusicandFilm;break;
			case"BusinessServicesOther":out=obj[Math.floor(Math.random()*obj.length)].BusinessServicesOther;break;
			case"ChemicalsPetroChemicals":out=obj[Math.floor(Math.random()*obj.length)].ChemicalsPetroChemicals;break;
			case"ClothingandTextileManufacturing":out=obj[Math.floor(Math.random()*obj.length)].ClothingandTextileManufacturing;break;
			case"ComputerHardware":out=obj[Math.floor(Math.random()*obj.length)].ComputerHardware;break;
			case"ComputerSoftware":out=obj[Math.floor(Math.random()*obj.length)].ComputerSoftware;break;
			case"ComputerITServices":out=obj[Math.floor(Math.random()*obj.length)].ComputerITServices;break;
			case"ConstructionIndustrialFacilitiesandInfrastructure":out=obj[Math.floor(Math.random()*obj.length)].ConstructionIndustrialFacilitiesandInfrastructure;break;
			case"ConstructionResidentialCommercialOffice":out=obj[Math.floor(Math.random()*obj.length)].ConstructionResidentialampCommercialOffice;break;
			case"ConsumerPackagedGoodsManufacturing":out=obj[Math.floor(Math.random()*obj.length)].ConsumerPackagedGoodsManufacturing;break;
			case"Education":out=obj[Math.floor(Math.random()*obj.length)].Education;break;
			case"ElectronicsComponentsandSemiconductorMfg":out=obj[Math.floor(Math.random()*obj.length)].ElectronicsComponentsandSemiconductorMfg;break;
			case"EnergyandUtilities":out=obj[Math.floor(Math.random()*obj.length)].EnergyandUtilities;break;
			case"EngineeringServices":out=obj[Math.floor(Math.random()*obj.length)].EngineeringServices;break;
			case"EntertainmentVenuesandTheaters":out=obj[Math.floor(Math.random()*obj.length)].EntertainmentVenuesandTheaters;break;
			case"FinancialServices":out=obj[Math.floor(Math.random()*obj.length)].FinancialServices;break;
			case"FoodandBeverageProduction":out=obj[Math.floor(Math.random()*obj.length)].FoodandBeverageProduction;break;
			case"GovernmentandMilitary":out=obj[Math.floor(Math.random()*obj.length)].GovernmentandMilitary;break;
			case"HealthcareServices":out=obj[Math.floor(Math.random()*obj.length)].HealthcareServices;break;
			case"HotelsandLodging":out=obj[Math.floor(Math.random()*obj.length)].HotelsandLodging;break;
			case"Insurance":out=obj[Math.floor(Math.random()*obj.length)].Insurance;break;
			case"InternetServices":out=obj[Math.floor(Math.random()*obj.length)].InternetServices;break;
			case"LegalServices":out=obj[Math.floor(Math.random()*obj.length)].LegalServices;break;
			case"ManagementConsultingServices":out=obj[Math.floor(Math.random()*obj.length)].ManagementConsultingServices;break;
			case"ManufacturingOther":out=obj[Math.floor(Math.random()*obj.length)].ManufacturingOther;break;
			case"MarineMfgServices":out=obj[Math.floor(Math.random()*obj.length)].MarineMfgampServices;break;
			case"MedicalDevicesandSupplies":out=obj[Math.floor(Math.random()*obj.length)].MedicalDevicesandSupplies;break;
			case"MetalsandMinerals":out=obj[Math.floor(Math.random()*obj.length)].MetalsandMinerals;break;
			case"NonprofitCharitableOrganizations":out=obj[Math.floor(Math.random()*obj.length)].NonprofitCharitableOrganizations;break;
			case"OtherNotClassified":out=obj[Math.floor(Math.random()*obj.length)].OtherNotClassified;break;
			case"PerformingandFineArts":out=obj[Math.floor(Math.random()*obj.length)].PerformingandFineArts;break;
			case"PersonalandHouseholdServices":out=obj[Math.floor(Math.random()*obj.length)].PersonalandHouseholdServices;break;
			case"PrintingandPublishing":out=obj[Math.floor(Math.random()*obj.length)].PrintingandPublishing;break;
			case"RealEstatePropertyManagement":out=obj[Math.floor(Math.random()*obj.length)].RealEstatePropertyManagement;break;
			case"RentalServices":out=obj[Math.floor(Math.random()*obj.length)].RentalServices;break;
			case"RestaurantFoodServices":out=obj[Math.floor(Math.random()*obj.length)].RestaurantFoodServices;break;
			case"Retail":out=obj[Math.floor(Math.random()*obj.length)].Retail;break;
			case"SecurityandSurveillance":out=obj[Math.floor(Math.random()*obj.length)].SecurityandSurveillance;break;
			case"SportsandPhysicalRecreation":out=obj[Math.floor(Math.random()*obj.length)].SportsandPhysicalRecreation;break;
			case"StaffingEmploymentAgencies":out=obj[Math.floor(Math.random()*obj.length)].StaffingEmploymentAgencies;break;
			case"TelecommunicationsServices":out=obj[Math.floor(Math.random()*obj.length)].TelecommunicationsServices;break;
			case"TransportandStorageMaterials":out=obj[Math.floor(Math.random()*obj.length)].TransportandStorageMaterials;break;
			case"TravelTransportationandTourism":out=obj[Math.floor(Math.random()*obj.length)].TravelTransportationandTourism;break;
			case"WasteManagement":out=obj[Math.floor(Math.random()*obj.length)].WasteManagement;break;
			case"WholesaleTradeImportExport":out=obj[Math.floor(Math.random()*obj.length)].WholesaleTradeImportExport;break;
		    case"yourteam":out=obj[Math.floor(Math.random()*obj.length)].yourteam;break;
		    case"Ibelieve":out=obj[Math.floor(Math.random()*obj.length)].Ibelieve;break;
		    case"myexperience":out=obj[Math.floor(Math.random()*obj.length)].myexperience;break;
		    case"Ihaveenclosed":out=obj[Math.floor(Math.random()*obj.length)].Ihaveenclosed;break;
		    case"toprovideanoverviewofmycareerachievementsandqualifications":out=obj[Math.floor(Math.random()*obj.length)].toprovideanoverviewofmycareerachievementsandqualifications;break;
		    case"handle":out=obj[Math.floor(Math.random()*obj.length)].handle;break;
		    case"enrolled":out=obj[Math.floor(Math.random()*obj.length)].enrolled;break;
		    case"aspecial":out=obj[Math.floor(Math.random()*obj.length)].aspecial;break;	
		    case"After":out=obj[Math.floor(Math.random()*obj.length)].After;break;
		    case"completing":out=obj[Math.floor(Math.random()*obj.length)].completing;break;
		    case"degree":out=obj[Math.floor(Math.random()*obj.length)].degree;break;
		    case"development":out=obj[Math.floor(Math.random()*obj.length)].development;break;
		    case"program":out=obj[Math.floor(Math.random()*obj.length)].program;break;
		    case"enhance":out=obj[Math.floor(Math.random()*obj.length)].enhance;break;
		    case"credentials":out=obj[Math.floor(Math.random()*obj.length)].credentials;break;
		    case"field":out=obj[Math.floor(Math.random()*obj.length)].field;break;
		    case"continued":out=obj[Math.floor(Math.random()*obj.length)].continued;break;
		    case"success":out=obj[Math.floor(Math.random()*obj.length)].success;break;
		    case"inparticular":out=obj[Math.floor(Math.random()*obj.length)].inparticular;break;
		    case"learned":out=obj[Math.floor(Math.random()*obj.length)].learned;break;
		    case"alot":out=obj[Math.floor(Math.random()*obj.length)].alot;break;
			case"mycareer":out=obj[Math.floor(Math.random()*obj.length)].mycareer;break

		    default:out = obj[Math.floor(Math.random() * obj.length)].Doer;
			}
    		
	    } while (out=="");

return out
}

function writeCoverLetter(obj) {
	
	document.getElementById("demo").innerHTML = "";
	var out = "";
	
	var today = new Date();
	
	var FieldPersonality = document.getElementById("mySelect2").value; 
	var FieldName = document.getElementById("Name").value;
	var FieldEmail = document.getElementById("Email").value; 
	var FieldPhone = document.getElementById("Phone").value; 

	if (document.getElementById("mySelect").value != ""){var FieldSector = document.getElementById("mySelect").value; }
else{var FieldSector = "your field of activity"; }	
	if (document.getElementById("Company").value != ""){var FieldCompany = document.getElementById("Company").value;}
else{var FieldCompany = "your firm";}
	var FieldPosition = document.getElementById("Position").value;

if(document.getElementById("Degree").checked == true){
	FieldDegree = document.getElementById("DegreeName").value;
	FieldSchool = document.getElementById("School").value;} else {FieldDegree = "";
FieldSchool = "";}

if(document.getElementById("Experience").checked == true){
	FieldCompanyExperience = document.getElementById("CompanyExperience").value;
	FieldEmphasize = document.getElementById("Emphasize").value;} else {FieldCompanyExperience = "";
FieldEmphasize = "";}

if(document.getElementById("Address").checked == true){
	FieldAddress1 = document.getElementById("Address1").value;
	FieldAddress2 = document.getElementById("Address2").value;
	FieldAddress3 = document.getElementById("Address3").value;} else {FieldAddress1 = "";
FieldAddress2 = "";FieldAddress3 = "";}

//alert(FieldPersonality);

	out += '<h4>' + FieldName +  "<br>";
	out += FieldEmail + "<br>";
	out += FieldPhone + "</h4><br>";
out += dateOfToday() + ",<br><br>"; 

	if (FieldAddress1 != ""){out += FieldAddress1 + "<br>";} else{}
	if (FieldAddress2 != ""){out += FieldAddress2 + "<br>";} else{}
	if (FieldAddress3 != ""){out += FieldAddress3+ "<br>";} else{}
	out += "<br>";

if (document.getElementById("Position").value != ""){out += '<u>' + "Subject: Application for the "+ FieldPosition + " position at " + FieldCompany + "<br><br><br><br><br>" + '</u>'; }
	
      

      
      out += generate("Greetings") +","+ "<br><br>" ;
      out += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + generate("Background") + " " + FieldSector + ", " + generate("Talent") + " " + generate("Skills") + ", and " + generate("Talent2") + " could be of value to " + FieldCompany + ".";
      
      //alert(CleanUp(FieldSector));

     // out += "<br>";
   if (FieldDegree != ""){out += "&nbsp" + generate("After") + " " + generate("completing") + " my " + FieldDegree  + " " + generate("degree");} else{}
   if (FieldSchool!= ""){out +=" from " + FieldSchool  + ", I "+ generate("enrolled") +" in " + generate("aspecial")+ " " + generate("development") + " " + generate("program") + " to further "+generate("enhance")+" my " + generate("credentials") + " in the " + generate("field") +".";} 
   else {if (FieldDegree != "") {out+= ", I "+ generate("enrolled") +" in " + generate("aspecial")+ " " + generate("development") + " " + generate("program") + " to further "+generate("enhance")+" my " + generate("credentials") + " in the " + generate("field") +".";}} 
     //
      
      out += "&nbsp" + generate("Ibelieve") + " the " + generate("continued") + " " + generate("success")+ " of your company would benefit "+ generate("myexperience") +" " + generate("inparticular") + " in " +generate(CleanUp(FieldSector)) + " " + generate("Projects") + ".";
      out += " "+ generate("Ihaveenclosed") +" my résumé "+ generate("toprovideanoverviewofmycareerachievementsandqualifications") + ".<br><br>"; 



	if (FieldCompanyExperience != ""){out += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "I " + generate("learned") + " " + generate("alot") + " with my experience at " + FieldCompanyExperience + ". " + generateEmphasize(FieldEmphasize,FieldCompany) + "<br><br>";} else{}
   	
      out += "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + generate(FieldPersonality) + " is what " + generate("HelpsMe") + " "+generate("handle")+" the " + generate("Hardest") + " " + generate("Challenge") + ". " + generate("I" + FieldPersonality) + ". That is what I would be " + generate("Proud") + " to " + generate("Apply") + " when " + generate("Joining") + " "+ generate("yourteam") + ". " + "<br><br>"; 
      out += generate("Thanks") + ",<br>"; 
      out += generate("LastWord") +","+  "<br>"+ "<br><br><br>";
      out += '<p align="right">' + FieldName+ '</p>' ;

	document.getElementById("demo").innerHTML = out;
}

function dateOfToday(){
	var objToday = new Date(),
                weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
                dayOfWeek = weekday[objToday.getDay()],
                domEnder = new Array( 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' ),
                dayOfMonth = (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder[objToday.getDate()] : objToday.getDate() + domEnder[parseFloat(("" + objToday.getDate()).substr(("" + objToday.getDate()).length - 1))],
                months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
                curMonth = months[objToday.getMonth()],
                curYear = objToday.getFullYear(),
                curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
                curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
                curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
                curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
return curMonth + " " + dayOfMonth+ " "  + curYear;
}

function CleanUp(obj)
{
	var k = 0
while(k <= 10){
	obj = obj.replace(' ','');
	obj = obj.replace('/',''); 
	obj = obj.replace('-','');
	obj = obj.replace(',','');
	obj = obj.replace('&','');
	obj = obj.replace(';','');
	k++;}
return obj}


//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}

function makeUpdatedCopyOfSynonyms(){

var FieldSynonym0 = document.getElementById("Synonym0").value;
var FieldSynonym1 = document.getElementById("Synonym1").value;
var FieldSynonym2 = document.getElementById("Synonym2").value;
var FieldSynonym3 = document.getElementById("Synonym3").value;
var FieldSynonym4 = document.getElementById("Synonym4").value;
var FieldSynonym5 = document.getElementById("Synonym5").value;
var FieldSynonym6 = document.getElementById("Synonym6").value;
var FieldSynonym7 = document.getElementById("Synonym7").value;

var k = 0
for (k = 0; k < 8; k++){
var newstr = CleanUp(FieldSynonym0);
//alert("obj[" + k + "]." + newstr + " = FieldSynonym" + k +";");
eval("obj[" + k + "]." + newstr + " = FieldSynonym" + k +";");
}

//obj[7].(Cleanup(FieldSynonym0)) = FieldSynonym7;
//var file = new ActiveXObject("Scripting.FileSystemObject");
//var a = file.CreateTextFile("testfile.txt", true);
//a.WriteLine("Salut cppFrance !");
//a.Close();


//var newsstr = JSON.stringify(obj);
//var blob = new Blob(newsstr,{type: "text/plain;charset=utf-8"});
//(blob, "hello world.txt");

 //document.write(obj);
//fs.writeFile('people.json', JSON.stringify(obj));


//alert(',\n"' + CleanUp(FieldSynonym0) +'":"' +FieldSynonym0+ '"');
//alert(',\n"' + CleanUp(FieldSynonym0) +'":"' +FieldSynonym1+ '"');
//alert(',\n"' + CleanUp(FieldSynonym0) +'":"' +FieldSynonym2+ '"');
//alert(',\n"' + CleanUp(FieldSynonym0) +'":"' +FieldSynonym3+ '"');
//alert(',\n"' + CleanUp(FieldSynonym0) +'":"' +FieldSynonym4+ '"');
//alert(',\n"' + CleanUp(FieldSynonym0) +'":"' +FieldSynonym5+ '"');
//alert(',\n"' + CleanUp(FieldSynonym0) +'":"' +FieldSynonym6+ '"');
//alert(',\n"' + CleanUp(FieldSynonym0) +'":"' +FieldSynonym7+ '"');

//<script type="text/javascript" src="SaveFile.php"></script>
//window.location.href = "SaveFile.php?w1=" + escape(YAHOO.lang.JSON.stringify(obj));
//document.getElementById("abc").innerHTML = '<form action="SaveFile.php"><input type="submit" value="click on me!"></form>';
//document.getElementById("abc").innerHTML = '<form><input type="button" value="Submit" onclick="post();"></form><div id="result"></div>'
post();

alert("Synonym table updated!")
alert('case"' + CleanUp(FieldSynonym0) + '":out=obj[Math.floor(Math.random()*obj.length)].' + CleanUp(FieldSynonym0) + ';break;');

}
function post(){$.post('SaveFile.php', {postobj:obj}, function(data) {$('#result').html(data);})	};

