import React,{useEffect} from 'react'
import Cards from './Cards';


export default function Cardcontent(props) {
  //For API
  /*const [Product, setProdcut] = useState(null);
    useEffect(() => {
        let URL = "";
        let data  = fetch(URL);
        let parseData = data.json();
        setProdcut(parseData.Product)
      });*/
    
  return (
    
    <div>
      <Cards number={props.number} info1={"Info1"} info2={"Info2"} specifications = {"Specifications"} img1={"img1"} img2={"img2"}/>
    </div>
  )
}
