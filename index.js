
var x = document.querySelectorAll('button');
var y = x.length;
 var snd = ['crash', 'kick-bass','snare', 'tom-1', 'tom-2', 'tom-3', 'tom-4'];
 var imgg = ['crash', 'tom2', 'tom1', 'tom4', 'tom3', 'kick', 'snare'];
var arr = ['red', 'skyblue','yellow', ' seagreen', 'salmon', 'grey', 'tan'];

for(let i=0; i<7; i++){
//   x[i].style.backgroundColor = arr[i];
     x[i].style.backgroundImage = 'url(images/'+imgg[i]+'.png)';
     
}

for(let i=0; i<y; i++){
    x[i].addEventListener('click',function(){
     this.style.color = 'white'
     this.backgroundColor = 'salmon'
     var k = this.innerHTML
         var audio1 = new Audio("sounds/"+snd[i]+".mp3");
         audio1.play()
         console.log(k)
   
     } )
    }

    document.addEventListener('keydown',function(ev){
        console.log(ev)
    })


    var xyz= document.createElement('audio')
    document.body.querySelector('footer').append(xyz);
    xyz.setAttribute('src', 'sounds/tom-1.mp3');
    xyz.setAttribute('controls', '')    
   


