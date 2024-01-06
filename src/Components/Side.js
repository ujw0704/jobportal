import React ,{UseState}from 'react'

function Side() {
    const[IsShow, SetISShow] = UseState("false");

    function handleClick (){
        if(IsShow === "true"){
            SetISShow("false");
            }else{
                document.body.style.overflowY="hidden";
                SetISShow("true");
                }

    }
  return (
    <div>
        <button onClick={handleClick}>Need Help</button>
       

    


     
    </div>
  )
}

export default Side