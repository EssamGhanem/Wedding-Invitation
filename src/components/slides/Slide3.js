
import React, { useState } from "react";



function  Slide3(){
  const [name,setName] = useState('')
  const [comingState,setComingState] = useState("coming");

  function checked(e){
    console.log(e.target.id);
    setComingState(e.target.id)
  }
  function changeName(e)
  {
    setName(e.target.value);
  }

  async function formSubmit (e){

    // e.preventDefault();
    const formElm = document.querySelector("form");
    const formD = new FormData(formElm);
    const formData = {Name:name,Coming:comingState}
    console.log(formD);
    
    try{
    await fetch("https://script.google.com/macros/s/AKfycbzQJdD67KjOgG9wv33h9vnOnoLt28Z5TeSjF_GHdekZTRQxQ-AII_WpwjKE23GYiJ11Gw/exec",
      {
        method:"POST",
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        body:formD,
        // mode: 'no-cors',
      }
    )
  }catch(e){
    console.log(e);
  }
    console.log("submitted...!")
  }



  return(
    <>
    <div className="slide3">
    <h1>تأكيد الحضور</h1>
      <form action="#"
        onSubmit={(e)=>formSubmit(e)}>
        <input type="text" placeholder="...الاسم" name="Name" onChange={(e)=>changeName(e)}/>
        <select name="Coming" className="coming-select">
          <option value="coming">جاي </option>
          <option  value="notComing">مش هاجي</option>
          <option  value="maybe"> ممكن</option>
        </select>

        <input type="submit" value='تأكيد' />
       <p>
        يرجي تأكيد الحضور. نتطلع إلي الاحتفال معكم في هذا اليوم المميز
       </p>
      </form>
    </div>

      
    </>
  )
}


export default Slide3;