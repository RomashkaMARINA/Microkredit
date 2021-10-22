    console.log("Helllooo");

    $("#accordion").accordion();

    let banners = document.getElementById("banners").offsetWidth;
    
    let viewslide=0;
    let bannerblock = document.querySelector(".bannerblock");
    //console.log(bannerblock);
    
    
   // let viewslider = document.querySelectorAll(".viewslide");
    //console.log(viewslider);
    
        
    function press(btn){
            if (viewslide < btn) {
                viewslide++;
            } else {
                viewslide = 0;
            }
            bannerblock.style.right = banners * viewslide + "px";
           
        }
    

        window.onload= function(){      //автоматическое пролистывание через 10 сек
            setInterval(function(){
            press(2);
        },3000);
    }
    
   