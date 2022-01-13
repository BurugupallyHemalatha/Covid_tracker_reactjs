import React,{useEffect,useState} from 'react'

const App = () => {
  const [data,setData] = useState([]);
  useEffect(() =>{
    fetch('https://api.covid19india.org/data.json').then(
      res => res.json()
    ).then(jsondata => setData(jsondata.statewise))
  },[])
  return (
    <div>
      <center>
        <h1>INDIA COVID-19 DASHBOARD</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>LastUpdate</th>
            </tr>
          </thead>

            <tbody>
            {data.map((item,index) => {
                return (
                  <tr key={index}>
                  <td>{item.state}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.recovered}</td>
                  <td>{item.deaths}</td>
                  <td>{item.active}</td>
                  <td>{item.lastupdatedtime}</td>
                  </tr>
                )
              })}
            </tbody>
        </table>
      </center>
    </div>
  )
}

export default App
