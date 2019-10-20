function myFunction() {
    let x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  }

var el_up = document.getElementById("GFG_UP"); 
            var el_down = document.getElementById("GFG_DOWN"); 
            var str = "Click on button to change the background color"; 
          
            el_up.innerHTML = str; 
          
            function changeColor(color) { 
                document.body.style.background = color; 
            } 
              
            function gfg_Run() { 
                changeColor('red'); 
            }          
            function gfg_Run01() { 
              changeColor('black'); 
          }        
          function gfg_Run02() { 
            changeColor('rgb(0, 132, 255)'); 
        }        
        function gfg_Run03() { 
          changeColor('white'); 
      }        
      function gfg_Run04() { 
        changeColor('#808080'); 
    }      
    

    