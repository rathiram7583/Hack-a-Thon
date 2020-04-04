


var input = document.getElementById('nvalue');
var element= document.getElementById('submit');
var dlElement=document.querySelector('dl');

element.addEventListener( 'click' , event =>  
                {

        
                var n=input.value;
                console.log(n);
                    let i=1;
                    let m=n;

                    while(i<=m)
                    {
                    if((n%2)==0)
                    {
                                               
                        var j=n-2;
                        var result=[j];
                        dlElement.innerHTML +=`<dt>The EVEN number is subtracted by 2:<dt>
                                             <dd>${result}</dd>`;
                        n=n-1;
                    }
                    else{
                                                  

                             var j =n+2;                    
                             var result=[j];
                            dlElement.innerHTML +=`<dt>The ODD number is added by 2:<dt>
                                             <dd>${result}</dd>`;
                            n=n-1;
                    }
                    i=i+1;
                    
                   }

                  
                


            });

        