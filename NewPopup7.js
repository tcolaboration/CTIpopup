function openRequestedPopup(){
console.log("===========TEST=========");
var windowObjectReference;
var windowFeatures = "popup";
var callNumber =  document.getElementById("secondaryInfo").innerHTML
var url = "https://eqiq-dev1-odcsvbcs-09301414-3450-demo1820784.builder.ocp.oraclecloud.com/ic/builder/rt/ReportIssue/1.0/webApps/logsr/?PhoneNumber="+callNumber;
windowObjectReference = window.open(url, "CNN_WindowName", windowFeatures);  
console.log(callNumber);
}





