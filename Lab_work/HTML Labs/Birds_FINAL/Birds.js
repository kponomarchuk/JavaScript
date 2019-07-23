var custList=[];
var birdList=[];


document.getElementById("addCustomerBtn").addEventListener("click", addCust);
document.getElementById("addBirdBtn").addEventListener("click", addBird);
//document.getElementById("sellBirdBtn").addEventListener("click",function(){selectDropdownListValue("birdInputBird")});
//document.getElementById("sellBirdBtn").addEventListener("click",function(){insertDrpDnListValues("birdInputCustomer","test")});
document.getElementById("sellBirdBtn").addEventListener("click",sellBird);
document.getElementById("refreshShopStatsBtn").addEventListener("click",shopReport );
//document.getElementById("refreshShopStatsBtn").addEventListener("click",function(){clearTab("tShopRep");} );




function addCust()
	{
		var custName=document.getElementById("inputCustomer").value;
		if (custName=="")
		{
		alert("Please enter	 customer's name!");
		return;
		}
		document.getElementById("inputCustomer").value="";
		addCustomerToList(custList,custName);
		alert("Customer "+custName+" is added!");
		//alert(JSON.stringify(custList+"  "+custList.length));

	}

function addBird()
    {
		var _birdType=document.getElementById("birdType").value;
		var _birdPrice=parseInt(document.getElementById("birdPrice").value);
		var _birdsAdded=parseInt(document.getElementById("birdCount").value);
		if (_birdType=="")
		{
		alert("Please enter	 bird type!");
		return;
		}
		if (isNaN(_birdPrice))
		{
		alert("Please enter price!");
		return;
		}
		if (isNaN(_birdsAdded))
		{
		alert("Please enter quantity!");
		return;
		}
		
				
		document.getElementById("birdType").value="";
		document.getElementById("birdPrice").value="";
		document.getElementById("birdCount").value="";
		
		var bird = Bird(_birdType,_birdPrice,_birdsAdded);
		addBirdToList(birdList, bird);
		//alert(JSON.stringify(birdList));
		alert("Bird  "+_birdType+"/"+_birdPrice+"/"+_birdsAdded+" is added!");
	}
	
function sellBird(){
var optionBirdType = selectDropdownListValue("birdInputBird");
var sellCount = parseInt(document.getElementById("sellbirdCount").value);
sellBirdCalc(birdList, optionBirdType, sellCount);

}
	
function shopReport()
{
	getShopInfo(birdList);
}



///////////////////////////////////////////////////////////////////////////////
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
				insertDrpDnListValues("birdDrDnCustList",vCustName);
				
			}
	}
	
	

	
    function Bird(vBirdType,vBirdPrice,vBirdsAdded)
	 {
  		var bird_obj = {};
      	bird_obj.birdType=vBirdType;
		bird_obj.birdPrice=vBirdPrice;
		if 	(bird_obj.birdsAvailable==undefined )
		{
		bird_obj.birdsAvailable =0;
		}	
		bird_obj.birdsAvailable=bird_obj.birdsAvailable+vBirdsAdded;
		bird_obj.birdsSoldOut=0;
		return bird_obj
						
		
    }
	
	function addBirdToList(vBirdList, vBird)
    {
		var birdExist = false;
		for(var i = 0; i < vBirdList.length; i++) {
			var _Bird = vBirdList[i];
		if (_Bird.birdType==vBird.birdType){
			_Bird.birdsAvailable=_Bird.birdsAvailable+vBird.birdsAvailable;
			_Bird.birdPrice=vBird.birdPrice;
			birdExist = true;
			}
		
	    }
		if (birdExist == false){ 
				vBirdList.push(vBird);
				insertDrpDnListValues("birdDrDnBirdList",vBird.birdType);
				
			}
	}
	
function insert_Row(vTableId,vInnerHTML)
{
	var newRow=document.createElement("tr");
	newRow.innerHTML = vInnerHTML;
	var myTab = document.getElementById(vTableId);
	myTab.appendChild(newRow);
}

function clearTab(vTableId)
{
	var myTab = document.getElementById(vTableId);
	myTab.innerHTML="";
}

var testRow="<th scope=\"row\">1</th><td>Mark</td><td>Otto</td><td>@mdo</td><td>Mark</td><td>Otto</td>";
function getShopInfo(vBirdList)
    {
		
		clearTab("tShopRep");
		
		var totalShopRevenue =0;
		var rowLine="";
			for(var k = 0; k < vBirdList.length; k++) 
		{
			var Bird = vBirdList[k];
			rowLine="<th scope=\"row\">"+(k+1)+"</th><td>"+Bird.birdType+"</td><td>"+Bird.birdPrice+"</td><td>"+Bird.birdsAvailable+"</td><td>"+Bird.birdsSoldOut+"</td><td>"+(Bird.birdsSoldOut*Bird.birdPrice)+"</td>"
			insert_Row("tShopRep",rowLine);
			
			//totalShopRevenue=totalShopRevenue+(Bird.birdsSoldOut*Bird.birdPrice);
		}
	
	}
	
function insertDrpDnListValues(vTableId,vInnerHTML)
{

	var newOption=document.createElement("option");
	newOption.innerHTML = vInnerHTML;
	var myOption = document.getElementById(vTableId);
    myOption.parentNode.insertBefore(newOption, myOption.nextSibling)

}
	
	
function selectDropdownListValue(vDropdownListId){
var myddl = document.getElementById(vDropdownListId);
return (myddl.options[myddl.selectedIndex].value);
}

	function sellBirdCalc(vbirdList, vbirdType, vCount)
    {
		var birdExist = false;
		for(var i = 0; i < vbirdList.length; i++) {
			var Bird = vbirdList[i];
		if (Bird.birdsAvailable < vCount){ 
		alert("CAN'T SELL BIRDS WITH TYPE: "+vbirdType +". NUMBER OF BIRDS IS NOT ENOUGH. YOU WANT TO SELL "+ vCount +vbirdType+ " YOU GOT " + Bird.birdsAvailable );
				return;
			}
		if (Bird.birdType==vbirdType){
			Bird.birdsAvailable=Bird.birdsAvailable-vCount;
			Bird.birdsSoldOut=Bird.birdsSoldOut+vCount;
			document.getElementById("totalSellPrice").value=vCount*Bird.birdPrice;
			alert(vCount+" "+vbirdType+"S" + " WERE SOLD OUT");
			birdExist = true;
			}
		
	    }
		if (birdExist == false){ 
		alert("CAN'T SELL BIRDS WITH TYPE: "+vbirdType +". NO SUCH TYPES IN THE SHOP");
				
			}
	}

	
function printArray(arr)
    {
        console.log(JSON.stringify(arr));
    }

	
///////////////////////////////// width="100" height="180"

