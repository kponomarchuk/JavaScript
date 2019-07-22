var custList=[];
var birdList=[];


document.getElementById("addCustomerBtn").addEventListener("click", addCust);
document.getElementById("addBirdBtn").addEventListener("click", addBird);
document.getElementById("refreshShopStatsBtn").addEventListener("click", function(){insert_Row("tShopRep",10,"NewCell1");});




function addCust()
	{
		var custName=document.getElementById("inputCustomer").value;
		document.getElementById("inputCustomer").value="";
		addCustomerToList(custList,custName);
		alert("Customer "+custName+" is added!");
		alert(JSON.stringify(custList+"  "+custList.length));

	}

function addBird()
    {
		var _birdType=document.getElementById("birdType").value;
		var _birdPrice=parseInt(document.getElementById("birdPrice").value);
		var _birdsAdded=parseInt(document.getElementById("birdCount").value);
		
		document.getElementById("birdType").value="";
		document.getElementById("birdPrice").value="";
		document.getElementById("birdCount").value="";
		
		var bird = Bird(_birdType,_birdPrice,_birdsAdded);
		addBirdToList(birdList, bird);
		alert(JSON.stringify(birdList));
		alert("Bird  "+_birdType+"/"+_birdPrice+"/"+_birdsAdded+" is added!");
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
				
			}
	}
	
	function getShopInfo(vBirdList)
    {
		
		//console.log("TOTAL SHOP REVENUE= "+printSymbol(" ",vHeader.length -("TOTAL SHOP REVENUE= ".length +totalShopRevenue.toString().length))+totalShopRevenue);
		
		
		var totalShopRevenue =0;
		var HTMLTableRows="";
		for(var k = 0; k < vBirdList.length; k++) 
		{
			var Bird = vBirdList[k];
			insert_Row(vTableId,vNumOfCol,vInnerHTML);
			
			HTMLTableRows+=Bird.birdType+Bird.birdPrice+Bird.birdsAvailable+Bird.birdsSoldOut+(Bird.birdsSoldOut*Bird.birdPrice);
			totalShopRevenue=totalShopRevenue+(Bird.birdsSoldOut*Bird.birdPrice);
		}
	alert(HTMLTableRows + " total revenue" + totalShopRevenue);
	var t =document.getElementById("tShopRep");
	
	
	}
	
	function insert_Row(vTableId,vNumOfCol,vInnerHTML)
{
var x=document.getElementById(vTableId).insertRow(0);
var y = x.insertCell(0);
y.innerHTML=vInnerHTML;
}

	
function printArray(arr)
    {
        console.log(JSON.stringify(arr));
    }

	
///////////////////////////////// width="100" height="180"

document.getElementById("Stopbutt").addEventListener("click", tableCreation);
