function openRequestedPopup(){
console.log("===========TEST=========");
var windowObjectReference;
var windowFeatures = "popup";

  windowObjectReference = window.open("https://eqiq-dev1-odcsvbcs-09301414-3450-demo1820784.builder.ocp.oraclecloud.com/ic/builder/rt/ReportIssue/1.0/webApps/logsr/", "CNN_WindowName", windowFeatures);
  
  var callNumber =  document.getElementById("secondaryInfo").innerHTML
  console.log(callNumber);
}





