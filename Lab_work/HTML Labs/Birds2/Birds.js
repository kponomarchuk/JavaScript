var custList=[];

document.getElementById("addCustomerBtn").addEventListener("click", addCust);

function addCust(){
var custName=document.getElementById("inputCustomer").value;
addCustomerToList(custList,custName);
alert("Customer "+custName+" is added!");
alert(JSON.stringify(custList+"  "+custList.length));

}


function addCustomerToList(vCustList, vCustName)
    {
		var custExist = false;
		for(var i = 0; i < vCustList.length; i++) {
			var cust = vCustList[i];
		if (cust.custName==vCustName){
			custExist = true;
			}
		
	    }
		if (custExist == false){ 
				vCustList.push(vCustName);
				
			}
	}

	
	function printArray(arr)
    {
        console.log(JSON.stringify(arr));
    }

	
///////////////////////////////// width="100" height="180"

var arr = ['foo', 'bar', 'baz'];
var json_str = JSON.stringify(arr);
createCookie('mycookie', json_str);

var json_str = getCookie('mycookie');
var arr = JSON.parse(json_str);

document.getElementById("Startbutt").addEventListener("click", function() {alert("1")});
//document.getElementById("Stopbutt").addEventListener("click", function() {alert("2")});
function tableCreation(){
var table = document.createElement('table'),
    tr = table.appendChild(document.createElement('tbody')).appendChild(document.createElement('tr'));

for (i = 1; i < 5; i++) {

    tr.appendChild(document.createElement('td'));

}
}
document.getElementById("Stopbutt").addEventListener("click", tableCreation);
