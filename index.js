
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
         buttonAnimation(k);
         console.log(k)
   
     } )
    }

    document.addEventListener('keydown',function(ev){
        console.log(ev)
        makeSound(ev.key);   
        buttonAnimation(ev.key);
    })

      function makeSound(key) {
        switch (key) {
          case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
      
          case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
      
          case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
      
          case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
      
          case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
      
          case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
      
          case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
      
          default: console.log(key);
      
        }
      }
      
      function buttonAnimation(currentKey) {

        var activeButton = document.querySelector("." + currentKey);
      
         activeButton.classList.add("pressed");

        setTimeout(function() {
          activeButton.classList.remove("pressed");
        }, 100);
      
      }

    // var xyz= document.createElement('audio')
    // document.body.querySelector('footer').append(xyz);
    // xyz.setAttribute('src', 'sounds/tom-1.mp3');
    // xyz.setAttribute('controls', '')    
   


