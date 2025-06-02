import React from "react";

export default function Header() {
  return (
    <>
    <div style={{width:'100%', height:'80px', backgroundColor:"#323233", display:'flex', alignItems:'center',justifyContent:"space-between",position:"sticky",top:'0',padding:'0 50px'}}>
        <h3 style={{fontFamily:'serif',color:'white'}}>LOGOBAKKERY</h3>
        <div style={{display:'flex',justifyContent:'space-evenly', width:'500px',color:'white'}}>
            <h4 style={{cursor:'pointer'}}>Service</h4>
            <h4 style={{cursor:'pointer'}}>Products</h4>
            <h4 style={{cursor:'pointer'}}>About</h4>
        </div>
        <button style={{padding:'10px 20px',borderRadius:'100px',border:'none',backgroundColor:'#6b6be8',fontSize:'15px',color:'white'}}>Contact</button>
    </div>
    </>
  );
}
