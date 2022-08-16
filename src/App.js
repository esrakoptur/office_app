import { useState, useEffect } from "react";
import { getItem, setItem } from "./localStorage";

function App() {
  const [bodyText, setBodyText] = useState({
    name: getItem("name") ? getItem("name") : "",
    project: getItem("project") ? getItem("project") : "",
    week: getItem("week") ? getItem("week") : "",
    
    date: getItem("date") ? getItem("date") : "",
    description: getItem("description") ? getItem("description") : "",
  });

  const SaveHandling = () => {
    setItem("name", bodyText.name);
    setItem("week", bodyText.week);
    setItem("project", bodyText.project);
    setItem("date", bodyText.date);
    setItem("description", bodyText.description);
  };
  
  useEffect(() => {
    Object.keys(bodyText).map((item) => console.log(item, bodyText[item]))
  }, [])
  

  return (
    <div className="App ">
      <p className="h1"> ★ haftalık rapor ★</p>

      <div className="form ">
        <div className="input-group input-group-sm mb-3 form-input-group gap-3">
          <input
            value={bodyText.name}
            onChange={(e) =>
              setBodyText((preState) => {
                return { ...preState, name: e.target.value };
              })
            }
            type="text"
            className="form-control w-100 rounded"
            aria-label="Name"
            placeholder="isim"
            aria-describedby="inputGroup-sizing-sm"
          />
          <input
            value={bodyText.project}
            onChange={(e) =>
              setBodyText((preState) => {
                return { ...preState, project: e.target.value };
              })
            }
            type="text"
            className="form-control w-100 rounded"
            aria-label="Name"
            placeholder="proje"
            aria-describedby="inputGroup-sizing-sm"
          />
          <input
            value={bodyText.week}
            onChange={(e) =>
              setBodyText((preState) => {
                return { ...preState, week: e.target.value };
              })
            }
            type="number"
            className="form-control  w-100 rounded"
            aria-label="Name"
            placeholder="hafta"
            aria-describedby="inputGroup-sizing-sm"
          />
          <input
            value={bodyText.date}
            onChange={(e) =>
              setBodyText((preState) => {
                return { ...preState, date: e.target.value };
              })
            }
            type="date"
            className="form-control  w-100 rounded"
            aria-label="Name"
            placeholder="tarih"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </div>

      <div className="rapor">
        <textarea
          value={bodyText.description}
          onChange={(e) =>
            setBodyText((preState) => {
              return { ...preState, description: e.target.value };
            })
          }
          className="form-control form-rapor"
          aria-label="With textarea"
          placeholder="raporunuzu buraya yazın"
        ></textarea>
      </div>

      <div className="d-flex justify-content-center">
        <button className="btn button" value="submit" onClick={SaveHandling()}>
          Kaydet ✔
        </button>
        <button className="btn button">

          <a href={`mailto:info@def24.com?subject=rapor&body=${Object.keys(bodyText).map((item) => item + ':' + '%20' +   bodyText[item] + '%0D%0A' ).join('')}`}>
            Gönder ✉
          </a>

        </button>
      </div>
    </div>
  );
}

export default App;
