function indexOfIgnoreCase(s1, s2) {
    var ans=-1;
    
     for(let i=0;i<s1.length;i++){
         
         let str="";
         
         for(let j=i;j<s1.length;j++){
             str+=s1.charAt(j);
             
              let lower=str.toLowerCase();
              let upper=s2.toLowerCase();
             
             if(lower==upper){
                 ans=i;
                 break;
             }
             
         }
     }
     
     return ans;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
