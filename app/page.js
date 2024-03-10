"use client";
import { useState, useEffect } from 'react';
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Link from 'next/link';
import { FaAngleDown } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

function ProductCard({ showCheckmark,imageSrc, productName, star,number,review,heading,heading1,heading2,redbox,discount,redboxnumber,x1,x2,x3,x4}) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 32px 25px 49px",
        boxSizing: "border-box",
        border: '30px solid #FBFCFD',
        borderRadius: '5px',
        background: '#FFFFFF',
      }}
    >
      <div
        style={{
          height: "113px",
          width: "141px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 13px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "0px 0px 13px", boxSizing: "border-box" }}>
          <img
            style={{ alignSelf: "stretch", flex: "1", position: "relative", maxWidth: "100%", overflow: "hidden", maxHeight: "100%", objectFit: "cover" }}
            alt={productName}
            src={imageSrc}
          />
          <span style={{ textAlign: "center" }}>{productName}</span>
        </div>
      </div>
      <div style={{width:"490px"}}>
      <div style={{ fontSize: "16px",  padding: "8px 0px 0px 0px"}}>
  <span style={{ fontWeight: "bold" }}>{heading1}</span>{heading2}
</div>
<div style={{ background: "#F2F4F7", width: "61px" }}>
  <div style={{ fontSize: "13px", color: "#074786" }}>{discount}</div>
</div>

<div style={{ fontWeight: "bold"}}>Main highlights</div>


<div>
{redbox && (
        <div style={{ background: "#FFF4ED", width: "505px", padding: "15px",borderRadius:"12px 12px 0px 0px" }}>
          <div style={{color:"#4B5665"}}>
            <span style={{ alignItems: "center",background:"#FFFFFF" ,width:"40px",padding:"10px",borderRadius:"4px",color:"#1B88F4"}}>{redboxnumber}</span>{redbox}
          </div>
        </div>
      )}
    </div>
    <div>
{redbox && (
        <div style={{ background: "#FFF4ED", width: "505px", padding: "15px"}}>
          <div style={{color:"#4B5665"}}>
            <span style={{ alignItems: "center",background:"#FFFFFF" ,width:"40px",padding:"10px",borderRadius:"4px",color:"#1B88F4"}}>{redboxnumber}</span>{redbox}
          </div>
        </div>
      )}
    </div>
    <div>
{redbox && (
        <div style={{ background: "#FFF4ED", width: "505px", padding: "15px",borderRadius:"0px 0px 12px 12px" }}>
          <div style={{color:"#4B5665"}}>
            <span style={{ alignItems: "center",background:"#FFFFFF" ,width:"40px",padding:"10px",borderRadius:"4px",color:"#1B88F4"}}>{redboxnumber}</span>{redbox}
          </div>
        </div>
      )}
    </div>
<div style={{padding:"8px"}}>
<div>{x1}</div>
{showCheckmark && (
  <div style={{ display: "flex", alignItems: "center" }}>
    <IoIosCheckmarkCircleOutline />
    <div>{x2}</div>
  </div>
)}
{showCheckmark && (
  <div style={{ display: "flex" , alignItems: "center"}}>
      <IoIosCheckmarkCircleOutline />
    <div>{x3}</div>
  </div>
)}
{showCheckmark && (
  <div style={{ display: "flex", alignItems: "center" }}>
    <IoIosCheckmarkCircleOutline />
    <div>{x4}</div>
  </div>
)}
</div>


<div style={{  alignItems:"center"}}>
      <div style={{width:"483px"}}>{heading}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", color: "#1B88F4" }}>
  Show more <FaAngleDown />
</div>
      </div>
      <div
        style={{
          width: "232px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "64px 0px",
        }}
      >
  <div
  style={{
    border: "none",
    outline: "none",
    backgroundColor: "#F3F9FF",
    width: "135px",
    height: "118px",
    position: "relative",
    borderRadius: "0px 0px 12px 12px",
    textAlign: "center", // Center the stars horizontally
    // Set color to yellow
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column", // Stack elements vertically
  }}
>
<div style={{fontSize:"32px",color:"#074786"}}>{number}</div>
<div style={{fontSize:"14px", color:"#074786"}}>{review}</div>
        <div  style={{fontSize:"14px", color: "#FFD700",}}>{star}</div>
        
</div>

<div
  style={{
    border: "none",
    outline: "none",
    backgroundColor: "#1B88F4",
    alignSelf: "stretch",
    height: "48px",
    position: "relative",
    borderRadius: "12px",
    minWidth: "139px",
    color: "#FFFFFF", // Set text color to white
    fontSize: "16px", // Adjust font size
    textAlign: "center", // Center align text
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  View
</div>

      </div>
      
    </div>
  );
}

function ProductCard2({ productName2, imageSrc,Webbuilder,textx,price,price2,discountx}) {
  return (
    <div style={{   
      width: '333px',
      height: '405px',
      borderRadius: '12px',
      marginRight: '24px',
      marginLeft:"3%",    left:"90px",
      padding: "0px 32px 0px 25px",
      background: "#FFFFFF", // Adjust margin to create horizontal spacing
      justifyContent: "space-between",
      borderRadius:"12px",
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0px 0px 13px", boxSizing: "border-box" }}>
        <img
          style={{ width:"131px", overflow: "hidden", maxHeight: "131px", objectFit: "cover", padding:"30px 0px 0px 0px" }}
          alt={productName2}
          src={imageSrc}
        />
        <span style={{ textAlign: "center", padding:"30px 0px 0px 0px" }}>{productName2}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
  <div style={{ background: "#F2F4F7",maxHeight:"25px", width: "63px", borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
    <div style={{ fontSize: "13px", color: "#074786",display: 'flex',  justifyContent:'center', alignItems:'center',padding:"0px 0px 0px 8px" }}> 20%off</div>
  </div>
  <div style={{ marginLeft: "10px",background: "#F2F4F7", maxHeight:"25px",maxWidth: "100px", borderRadius: "8px" }}>
    <div style={{ fontSize: "13px", color: "#074786",display: 'flex',  justifyContent:'center', alignItems:'center',padding:"0px 8px 0px 8px" }}>limited Offer</div>
  </div>
</div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center',fontWeight: "bold",padding:"8px 0px 0px 0px" ,color:"#626E79"}}>{Webbuilder}</div>
<div style={{color:"#626E79"}}>{textx}</div>
<div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding:"0px 0px 10px 0px" }}>
  <div style={{ fontSize: "20px",padding:"9px 0px 0px 0px" , color: "#5C6874", marginRight: "10px" }}>{price}</div>
  <div style={{ fontSize: "14px", color: "#9FA9B3", padding:"15px 10px 0px 0px" }}>{price2}</div>
  <div style={{ fontSize: "14px", color: "#EF4C5D", padding:"15px 10px 0px 10px" }}>{discountx}</div>
</div>
<div   style={{
    border: "none",
    outline: "none",
    backgroundColor: "#1B88F4",
    alignSelf: "stretch",
    height: "48px",
    position: "relative",
    borderRadius: "12px",
    minWidth: "139px",
    color: "#FFFFFF", // Set text color to white
    fontSize: "16px", // Adjust font size
    textAlign: "center", // Center align text
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}>View Deal</div>
</div> 
 );
}

export default function Home() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setCurrentDate(date.toLocaleDateString());
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ background: "#FBFCFD",alignItems: "center" }}>
      <header style={{width: "100%",
      height: "64px",
      background:"#212731"}}>
        <div style={{display:"flex",justifyContent: "space-between", padding:"15px 0px 0px 0px"}}>
        <div style={{width:"272px",background:"#FFFFFF",height:"37px",marginLeft:"130px",borderRadius:"12px"}}><div style={{padding:"6px 40px 0px 40px"}}><CiSearch style={{height:"20px",width:"20px"}}/></div></div>
        <div style={{padding:"6px 20px 0px 40px",color:"#D1D6DA"}}> Categories</div>
        <div style={{padding:"6px 20px 0px 20px", color:"#D1D6DA"}}> Website Builders</div>
        <div style={{padding:"6px 40px 0px 20px", color:"#D1D6DA"}}>Today's deals</div>
        </div>
      </header>

      <h1 style={{fontSize:"48px", padding: "0px 0px 0px 20px" }}> Best Website Builder in the US </h1>
      <div style={{ width: "100%", height: 1, background: "#E1E4E6"}} />

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: "10px 0px 10px 20px" }}>
  <div style={{ marginRight: '10px' }}>
    <IoCheckmarkCircle style={{ display: 'inline-block',height:"20px",width:"20px", marginRight: '5px', color: "#4B5665" }} /> Last Updated - {currentDate}
  </div>
  <div style={{ marginRight: '10px' }}>
    <IoMdInformationCircleOutline style={{ display: 'inline-block',height:"20px",width:"20px", marginRight: '5px' }} />
    <Link href="/information" passHref style={{ padding:"1px 0px 0px 0px" }}>
      Advertising Disclosure
    </Link>
  </div>
  <div style={{ marginLeft: '55%' }}>
      <div style={{ display: "flex", color: "#1B88F4" }}>
      Top Relevant <FaAngleDown  style={{ display: 'inline-block',height:"20px",width:"20px", marginRight: '5px',padding:"2px 0px 0px 0px" }} />
</div>
</div>
</div>
      <div style={{ width: "100%", height: 1, background: "#E1E4E6" }} />

      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', position: 'relative', padding:"10px 0px 0px 20px"}}>
        <div style={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', paddingRight: '20px' ,color:"#4B5665"}}>
          <div style={{ flex: '1', minWidth: '150px', margin: '5px', textAlign: 'center', border: '1px solid black', padding: '10px', borderRadius: '10px' }}>Tools</div>
          <div style={{ flex: '1', minWidth: '150px', margin: '5px', textAlign: 'center', border: '1px solid black', padding: '10px', borderRadius: '10px' }}>AWS Builder</div>
          <div style={{ flex: '1', minWidth: '150px', margin: '5px', textAlign: 'center', border: '1px solid black', padding: '10px', borderRadius: '10px' }}>Start Build</div>
          <div style={{ flex: '1', minWidth: '150px', margin: '5px', textAlign: 'center', border: '1px solid black', padding: '10px', borderRadius: '10px' }}>Build Supplies</div>
          <div style={{ flex: '1', minWidth: '150px', margin: '5px', textAlign: 'center', border: '1px solid black', padding: '10px', borderRadius: '10px' }}>Tooling</div>
          <div style={{ flex: '1', minWidth: '150px', margin: '5px', textAlign: 'center', border: '1px solid black', padding: '10px', borderRadius: '10px' }}>Bluehosting</div>
        </div>
      </div>

      <div style={{color:"#5C6874",padding:"10px 0px 0px 32px"}}><h3> Home {'>'} Hosting for All {'>'} Hosting {'>'} Hosting6 {'>'} Hosting5 </h3></div>

      <main>
        <div>
          <ProductCard imageSrc="/eka.svg" productName="Product 1" star={"★★★★★"} number={93} review={"exceptional"} heading={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."} heading1={"WixPro 72-Inch Responsive Website Builder-"} heading2={"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"} />
          <ProductCard imageSrc="/eka.svg" productName="Product 2" star={" ★★★☆☆"} number={93} review={"exceptional"}  heading={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."} heading1={"WixPro 72-Inch Responsive Website Builder-"} heading2={"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"}/>
          <ProductCard imageSrc="/eka.svg" productName="Product 2" star={" ★★★☆☆"} number={93} review={"exceptional"}  heading={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."} heading1={"WixPro 72-Inch Responsive Website Builder-"} heading2={"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"}/>
          <ProductCard imageSrc="/eka.svg" productName="Product 3" star={"★★★☆☆"} number={93} review={"exceptional"}  heading={"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."} heading1={"WixPro 72-Inch Responsive Website Builder-"} heading2={"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"}/>
          <ProductCard imageSrc="/eka.svg" productName="Product 4" star={" ★★★☆☆"} number={93} review={"exceptional"}  heading1={"WixPro 72-Inch Responsive Website Builder-"} heading2={"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" }discount={"26%off"}redboxnumber={" 20"}redbox={ " building responsive"} 
          x1={"Why we love it"}
          x2={"documentation"}
          x3={"easy to use"}
          x4={"out of the box"}
          showCheckmark={true}/>
        </div>
        <div style={{left:"90px",padding: "0px 32px 10px 25px",fontSize:"32px"}}>Related deals you might like for</div>
      <div style={{ display: 'flex' , justifyContent: "space-between" }}>
      <ProductCard2 imageSrc="/eka.svg" productName2="Product 1" Webbuilder="Webbuilder1" textx="Computer  Modern clasic with wix support" price="36$" price2="49$" discountx="(20% Off)"/>
      <ProductCard2 imageSrc="/eka.svg" productName2="Product 1" Webbuilder="Webbuilder1" textx="Computer  Modern clasic with wix support" price="36$" price2="49$" discountx="(20% Off)"/>
      <ProductCard2 imageSrc="/eka.svg" productName2="Product 1" Webbuilder="Webbuilder1" textx="Computer  Modern clasic with wix support" price="36$" price2="49$" discountx="(20% Off)"/>
      </div>
      </main>

      <footer>
        <div style={{padding: "30px 32px 30px 25px",maxWidth:"100%",display:"flex",  justifyContent: "space-between" }}>
      <div style={{left:"90px",fontSize:"32px",width:"430px"}}>Sign up and get exclusive special deals</div>
      
      
      <div style={{display:"flex",padding:"10px 0px 0px 0px "}}>
      <input
  style={{
    width: '348px',
    height: '52px',
    borderRadius: '12px 0px 0px 12px',
    backgroundColor: 'white',
    paddingLeft: '15px', // Add padding to align placeholder text
    fontSize: '16px',
    color: '#000000', // Text color
    border: '1px solid #CCCCCC', // Add border for clarity
  }}
  placeholder="Search"
/>
<div   style={{
    backgroundColor: "#1B88F4",
    alignSelf: "stretch",
    height: "52px",
    position: "relative",
    borderRadius: "0px 12px 12px 0px",
    minWidth: "139px",
    color: "#FFFFFF", // Set text color to white
    fontSize: "16px", // Adjust font size
    textAlign: "center", // Center align text
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}>Sign Up</div>
      </div>
 </div>
      </footer>
      <div style={{width: "100%",
      height: "452px",
      background:"#212731",
      }}/>
    </div>
  );
}
