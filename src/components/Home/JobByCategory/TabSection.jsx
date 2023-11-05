import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

const TabSection = () => {

    const data = [
        {
          label: "On site job",
          value: "html",
          desc: <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        },
        {
          label: "Remote job",
          value: "react",
          desc: `Remote job`,
        },
        {
          label: "Hybrid job",
          value: "vue",
          desc: `Hybrid job`,
        },
        {
          label: "Part time job",
          value: "angular",
          desc: `Part time job`,
        }
      ];
     

    
  return (
    <div className="my-10">

        <h1 className="text-center text-3xl p-10">Job by Category</h1>


<Tabs value="html">
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
