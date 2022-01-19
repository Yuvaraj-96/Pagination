
let userdetails;
//const tbody = document.querySelector("#tbody");
var i=0;
var currentpagesize=10;

var  fetchdetails =async()=>{
   
const tbody = document.querySelector("#tbody");
const details = await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json").then(resp=>resp.json());

return details;

}

async function direction(direction){

    const tbody = document.querySelector("#tbody");
     var details= await fetchdetails();
     tbody.innerHTML ="";

        if(i>=100 ||i<0){
            i=0;
        } 
         if(direction ==='Next')
         {       
              for(let j=0;j<currentpagesize;j++)
                 {  
                    let detail =details[i];
                    let row1 = tbody.insertRow(j);
                    let cell1 = row1.insertCell(0);
                    let cell2 = row1.insertCell(1);
                    let cell3 = row1.insertCell(2);
                    cell1.innerHTML=detail.id;
                    cell2.innerHTML=detail.name;
                    cell3.innerHTML=detail.email;
                    i++;
                 }        
         }else if(direction==='Pre')
         {
             i= i-20;
             if(i<0)
             {
                 i=0;
             }

            for(let j=0;j<currentpagesize;j++)
            {  
               let detail =details[i];
               let row1 = tbody.insertRow(j);
               let cell1 = row1.insertCell(0);
               let cell2 = row1.insertCell(1);
               let cell3 = row1.insertCell(2);
               cell1.innerHTML=detail.id;
               cell2.innerHTML=detail.name;
               cell3.innerHTML=detail.email;
               i++;
            }  

       }else if(typeof direction == "number"){
        direction= direction-1;
        i=direction*currentpagesize;
        for(let j=0;j<currentpagesize;j++)
        { 
        let detail =details[i];
        let row1 = tbody.insertRow(j);
        let cell1 = row1.insertCell(0);
        let cell2 = row1.insertCell(1);
        let cell3 = row1.insertCell(2);
        cell1.innerHTML=detail.id;
        cell2.innerHTML=detail.name;
        cell3.innerHTML=detail.email;
        i++;
        }

       }else{
           
        for(let j=0;j<currentpagesize;j++)
        {  
           let detail =details[i];
           let row1 = tbody.insertRow(j);
           let cell1 = row1.insertCell(0);
           let cell2 = row1.insertCell(1);
           let cell3 = row1.insertCell(2);
           cell1.innerHTML=detail.id;
           cell2.innerHTML=detail.name;
           cell3.innerHTML=detail.email;
           i++;

        }
       }


}

