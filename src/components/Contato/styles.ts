import styled from 'styled-components';

export const Container = styled.div` 


height:300px;
h1{
  position:absolute;
  left:580px;
  font-family:'Roboto',sans-serif;
  width:100px;
  font-size:70px;
  color:#5d4954; 
  text-align:center;
}
@media screen and (max-width:768px){
    h1{
        position:relative;
        left:10px;
        top:30px;
    }
}


}
div 
 {   
     
     display:flex;
     flex-direction: column;
    &.angelo1
    { 
      position:relative;
      width:300px;
      height:200px;
      background:darkgray; 
      left:300px;
      top:80px;
      border-radius: 10px;
      
     svg{
         position:relative;
         left:100px;
         width:100px;
         height:100px;
     }
     strong{
         position:relative;
         left:130px;
     }
     p{
         position:relative;
         left:50px;
         
     }
     @media screen and (max-width:768px){
        &.angelo1{
            top:150px;
            left:10px;
        }
    
     }


    }
 } 
 div 
 {
    &.angelo2
    {
      position:relative;
      top:-120px;
      left:800px;
      width:300px;
      border-radius: 10px;
      height:200px;
      background:darkgray; 
    }
    svg{
         position:relative;
         left:100px;
         width:100px;
         height:100px;
     }
     strong{
         position:relative;
         left:115px;
     }
     p{ top:10px;
         position:relative;
         left:100px;
     }
     @media screen and (max-width:768px){
        &.angelo2{
            top:200px;
            left:10px;
        }
 } 


`;
