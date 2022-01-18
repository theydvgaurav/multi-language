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
            <input value={text} className='input' onChange={e => settext(e.target.value)} />
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
