import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const TabSection = () => {

  // const [onsiteData,setonsiteData] = useState([])
  
  const tabData = useLoaderData()
  console.log(tabData)

  // const findJob = tabData.foreach(singleData=>)



    const data = [
      
        {
          label: "On site job",
          value: "On site job",
          desc: 
            
         <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">dhd</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
          
        },
        {
          label: "Remote job",
          value: "Remote job",
          desc: `Remote job`,
        },
        {
          label: "Hybrid job",
          value: "Hybrid job",
          desc: `Hybrid job`,
        },
        {
          label: "Part time job",
          value: "Part time job",
          desc: `Part time job`,
        }
      ];

      // if(tabData === data)

      // useEffect(()=>{

      //   const filterOnsite = tabData.map(dataa=>
       
      //     setonsiteData(dataa)

      //     )

      //     console.log(filterOnsite);
    
    
      // },[tabData])
    
      // console.log(onsiteData);

      
     

    
  return (
    <div className="my-10">

        <h1 className="text-center text-3xl p-10">Job by Category</h1>


<Tabs value='html'>
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>





      
    </div>
  );
};

export default TabSection;
