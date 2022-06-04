function hello()
{
    var name=document.getElementById("name").value;
    var subject=document.getElementById("subject").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    var err_message=document.getElementById("err_message");

    err_message.style.padding="10px";

     var text;
     if(name.length<5)
     {
         text="*please enter valid name";
         err_message.innerHTML=text;
         return false;
     }
     if(name.length>10)
     {
        text="*please enter valid name";
        err_message.innerHTML=text;
        return false;   
     }
     if(subject.length<10)
     {
        text="*please enter valid subject ";
        err_message.innerHTML=text;
        return false;
     }
     if((email.charAt(email.length-4)!='.')&&(email.charAt(email.length-3)!='.'))
     {
        text="*please enter valid email id";
        err_message.innerHTML=text;
        return false;
     }
      if(message.length<=20)
      {
        text="*please enter uptp 20 char";
        err_message.innerHTML=text;
        return false;
      }
      alert("form submitted successfully!");
      return true;
}
