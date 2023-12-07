import './footer.css';

export default function Footer() {
    return (
        <div id = "footer">
       
       
       <div class= "space" id = "Mail">
       <br>
       </br>
       <br>
       </br>
       <a href='mailto: jaani.matharu@gmail.com'><i class="fas fa-envelope" style={{ color: "#00F4A2", fontSize: '18px' }}></i></a>  
       </div>
       <div class= "space" id = "Facebook">
      
       <br>
       </br>
       <br>
       </br>
       <a href='https://www.facebook.com/GoHelpPal/'><i class="fab fa-facebook" style={{ color: "#00F4A2", fontSize: '18px' }}></i></a>
     



           
       </div>
       <div class= "space" id ="Linkedin">
       
       <br>
       </br>
       <br>
       </br>
       <a href='https://www.linkedin.com/in/johny-matharu-0b0973115/'><i class="fab fa-linkedin" style={{color: "#00F4A2", fontSize: '18px' }}></i></a>
     
       </div>
       <div class= "space" id ="Github">
      
       <br>
       </br>
       <br>
       </br>
       <a href='https://github.com/JohnyMatharu'><i class="fab fa-github" style={{ color: "#00F4A2", fontSize: '18px' }}></i></a>

       </div>
       <div class= "space" id ="Stack-OverFlow">
       
       <br>
       </br>
       <br>
       </br>
       <a href='https://stackexchange.com/users/20383702/johny-matharu'><i class="fab fa-stack-overflow" style={{color: "#00F4A2", fontSize: '18px' }}></i></a>
     
       
       </div>
       <div class= "space" id ="Phone">
       <br>
       </br>
       <br>
       </br>
       {/* Please note the this is lifted up in the air little bit, in order to fix this size has to be adjusted and make sure the
       the bottom is in line with icons and font size is same as other regular black text */}
       
     <h6 style={{color: 'black', fontSize: '15px', fontFamily: 'Futura'}}>© 2021</h6>
       </div>
        </div>
    )
}


// Icons Mail and phone a bit higher and smaller and rest at bottom a bit bigger
//Make sure copyright sign and other term of use or privacy etc. if necessary
