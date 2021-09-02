function searching(){
    var state=document.getElementById("state").value;
    var city=document.getElementById("city").value;
    var group=document.getElementById("group").value;
    
   

    if(state=="mp"&&city=="bhopal"&&group=="o"){
        alert("Willing Donor:-Vikky Yadav,Patel Nagar (Contact no: 7065356373)");
        alert("Willing Donor:-Sarvesh Yadav,MP Nagar (Contact no: 9876456373)");
        alert("Willing Donor:-Sumit Singh,Ayodhya Bypass (Contact no: 7278356373)");
    }
    
    else if(state=="mp"&&city=="bhopal"&&group=="a"){
        alert("Willing Donor:-Yash Goyal,TT Nagar (Contact no: 6263673373)");
        alert("Willing Donor:-Mohit Sharma,Habibganj (Contact no: 9087656373)");
        
    }  
    else if(state=="mp"&&city=="bhopal"&&group=="b"){
        alert("Willing Donor:-Shweta Tripathi,Awadhpuri (Contact no: 7034356980)");
        alert("Willing Donor:-Anjali Yadav,Vijay Market(Contact no: 8967835689)");
        alert("Willing Donor:-Vivek Kumar,Patel Nagar (Contact no: 7273576372)");
    }  
    else if(state=="mp"&&city=="bhopal"&&group=="ab"){
        alert("Willing Donor:-Palak Gour,Patel Nagar (Contact no: 7463563986)");
        alert("Willing Donor:-Sudhakar Verma,Kolar Road (Contact no: 9873684090)");
        
    }     
    else{
        alert("Please Enter a Valid Value OR Try Filling Fields in Small Letter");
    }

}