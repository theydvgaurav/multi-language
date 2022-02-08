import React, { useState } from 'react'
import './App.css';
import { useTranslation } from "react-i18next";
import LanguageSelect from "./Selection";

function App() {
  const [data, setdata] = useState([]);
  const [text, settext] = useState('')

  const { t } = useTranslation();

  const addHandler = (event) => {
    event.preventDefault();
    setdata(data.concat({ text: text }))
    settext('')
  }

  var Notification = window.Notification || window.mozNotification || window.webkitNotification;
  
  const Users = ["Gaurav", "Deepak"]

  const showNotification = (props) => {
    const notification = new Notification("Meeting in 10 Minutes", {
      body: `You are going to have a meeting with ${Users[0]} in 10 Minutes`
    })
  }
  console.log(Notification.permission)

  if (Notification.permission === "granted") {
    showNotification();
  }
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        showNotification();
      }
    })
  }


  return (
    <div className="main">
      <div className="language-select">
        <LanguageSelect />
      </div>
      <div className="App">
        <div className="example-text">
          <p>{t("hello_welcome_my_application")}</p>
          <p>{t("you_can_add_text_here")}</p>
          <form onSubmit={addHandler} >
            <input value={text} className='input' onChange={e => settext(e.target.value)} disabled />
            <input type="submit" className='submit' value={t("add")} />
          </form>
          <div className='outputContainer' >
            {
              data.map(item => (
                <div className='output' >
                  {item.text}
                </div>
              ))
            }
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
