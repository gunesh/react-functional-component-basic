import React,{useState,useEffect} from 'react';

const Map = () =>{
  const [time,setTime] = useState('')
  const [list,setList] = useState([])
  const [view,setView] = useState({})
  const [loader,setLoader] = useState(true)
  const [color,setColor ] = useState({
    bgcolor:'#197515',
    color:'#ffffff',
    fontsize:'22px'
  })
  const colorCode =()=>{
    return  '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  }
  const checkTime =(i)=>{
    if (i < 10) {i = "0" + i}; 
     return i;
  }
  const getRandomInt =(max)=>{
    return Math.floor(Math.random() * Math.floor(max));;
  }
  useEffect(() => {
 // myWatch()
}, []);

  const myWatch = () =>{
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    setTime(h + ":" + m + ":" + s)
    return  h + ":" + m + ":" + s;
  }
  const changeColor = () =>{
    // setInterval(function(){ 
    //     setColor({
    //     ...color,
    //     bgcolor:colorCode(),
    //   })
    // }, 1000);
     setColor({
        ...color,
        bgcolor:colorCode(),
      })
    
  }
  const changeDropDown = (e)=>{
    console.log(e.target.value)
    getUserApi(e.target.value)
  }
  const changeFontColor = ()=>{
    setColor({
      ...color,
      color:colorCode()
    })
  }
  const showLoader = ()=>{
    setLoader(!loader)
  }
  const changeFontSize = ()=>{
    setColor({
      ...color,
      fontsize:getRandomInt(22)+'px'
    })
  }
  const fetchApi = ()=>{
    setLoader(true)
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(
        (result) => {
          setLoader(false)
          console.log(result.data)
          setList(result.data)
        },
            (error) => {
          setLoader(false)
        }
      )
  }

  const getUserApi = (id)=>{
    setLoader(true)
    fetch("https://reqres.in/api/users/"+id)
      .then(res => res.json())
      .then(
        (result) => {
          setLoader(false)
          console.log(result.data)
          setView(result.data)
        },
            (error) => {
          setLoader(false)
        }
      )
  }
  
  
  const divStyle = {
      backgroundColor:color.bgcolor,
      color:color.color,
      fontSize:color.fontsize
  }
  return (
    <>
    {loader &&
       <div className="loader">
          <div className="one">
              <div  className="page1">.</div>
              <div  className="page2">.</div>
          </div>
          <div className="one">
              <div className="page3">.</div>
              <div className="page4">.</div>
          </div>
       </div>
    }
    <div style={divStyle}>
    <select onChange={changeDropDown} name="dropdown">
    <option>Please Seelect</option>
    {list.map(item => (
          <option key={item.id} value={item.id}>
            {item.first_name}({item.email} )
          </option>
        ))}
    </select>
      <p>BGColor code is {color.bgcolor}, FontColor code is {color.color}, Font Size is {color.fontsize} , Current Time is  {time}</p>
      <p>{view.id}{view.first_name}{view.last_name}{view.email}
      <img alt={view.first_name} title={view.first_name} src={view.avatar}/>
      </p>
      <br />
    </div>
    <br />
     <button onClick={showLoader}>Toggle Loader</button>&nbsp;
     <button onClick={fetchApi}>Fetch API</button>&nbsp;
     
     <button onClick={changeColor}>Change Color</button>&nbsp;
     <button onClick={changeFontColor}>Change Font Color</button>&nbsp;
     <button onClick={changeFontSize}>Change Font SIze</button>&nbsp;
    </>
  )
}
export default Map;
