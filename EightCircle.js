var elements = document.getElementsByClassName('circle');
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('mouseover', function() {
                this.style.backgroundColor = 'aqua';  
                this.style.boxShadow="0 0 100px aqua";  
        });
        }
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('mouseout', function() {
                this.style.backgroundColor = 'white';  
                this.style.boxShadow="0 0 50px aqua";  
        });
        }    
        /**************************************** Hamburger Icon to cross icon ********************************************/
        const line1 = document.getElementById('line1');
        const line2 = document.getElementById('line2');
        const line3 = document.getElementById('line3');
        const circle1 = document.getElementById('circle1');
        const circle2 = document.getElementById('circle2');
        const circle3 = document.getElementById('circle3');
        const circle4 = document.getElementById('circle4');
        const circle5 = document.getElementById('circle5');
        const circle6 = document.getElementById('circle6');
        const circle7 = document.getElementById('circle7');
        const circle8 = document.getElementById('circle8');
        const icon1 = document.getElementById('hamburger_icon1');
        icon1.addEventListener('click',()=>{
            if(line2.style.display != 'none'){
                line1.style.transform="rotate(-45deg)";
                line1.style.transition="2s";
                line2.style.display="none";
                line3.style.marginTop="-2px";
                line3.style.transform="rotate(45deg)";
                line3.style.transition="2s";
                circle1.style.margin="100px 0 0 38px"
                circle1.style.transition="2s"
                circle2.style.margin="0px 0 0 220px"
                circle2.style.transition="2s"
                circle3.style.margin="100px 0 0 410px"
                circle3.style.transition="2s"
                circle4.style.margin="250px 0 0 446px"
                circle4.style.transition="2s"
                circle5.style.margin="380px 0 0 64px"
                circle5.style.transition="2s"
                circle6.style.margin="448px 0 0 220px"
                circle6.style.transition="2s"
                circle7.style.margin="380px 0 0 383px"
                circle7.style.transition="2s"
                circle8.style.margin="250px 0 0 2px"
                circle8.style.transition="2s"                
            }
            else{
                line1.style.transform="rotate(0deg)";
                line1.style.transition="2s";
                line2.style.display="block";
                line3.style.marginTop="8px";
                line3.style.transform="rotate(0deg)";
                line3.style.transition="2s";
                circle1.style.margin="230px 0 0 220px"
                circle1.style.transition="2s"
                circle2.style.margin="230px 0 0 220px"
                circle2.style.transition="2s"
                circle3.style.margin="230px 0 0 220px"
                circle3.style.transition="2s"
                circle4.style.margin="230px 0 0 220px"
                circle4.style.transition="2s"
                circle5.style.margin="230px 0 0 220px"
                circle5.style.transition="2s"
                circle6.style.margin="230px 0 0 220px"
                circle6.style.transition="2s"
                circle7.style.margin="230px 0 0 220px"
                circle7.style.transition="2s"
                circle8.style.margin="230px 0 0 220px"
                circle8.style.transition="2s"
            }
        });