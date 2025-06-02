export default function Footer()
{
    return(
        <>
        <div style={{width:'100%',height:'300px',backgroundColor:'#323233',color:'white',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gridTemplateRows:'1fr',gap:'20px',padding:'50px'}}>
            <div>
                <h3>Company</h3>
                <p style={{marginTop:'15px'}}>About us</p>
                <p style={{marginTop:'15px'}}>Our Services</p>
                <p style={{marginTop:'15px'}}>Privacy Policy</p>
                <p style={{marginTop:'15px'}}>Afficiate Program</p>
            </div>
            <div>
                <h3>Get Help</h3>
                <p style={{marginTop:'15px'}}>FAQ</p>
                <p style={{marginTop:'15px'}}>Shopping</p>
                <p style={{marginTop:'15px'}}>Returns</p>
                <p style={{marginTop:'15px'}}>Order Status</p>
                <p style={{marginTop:'15px'}}>Payment Options</p>
            </div>
            <div>
                <h3>Online Shop</h3>
                <p style={{marginTop:'15px'}}>Watch</p>
                <p style={{marginTop:'15px'}}>Blog</p>
                <p style={{marginTop:'15px'}}>Shoes</p>
                <p style={{marginTop:'15px'}}>Dresses</p>
            </div>
            <div style={{}}>
                <h3>Follow us</h3>
                <div style={{width:'200px',display:'flex',justifyContent:'space-between',marginTop:'15px'}}>
                    <i class="fa-brands fa-square-facebook" style={{fontSize:'25px'}}></i>
                    <i class="fa-brands fa-square-twitter" style={{fontSize:'25px'}}></i>
                    <i class="fa-brands fa-square-whatsapp" style={{fontSize:'25px'}}></i>
                    <i class="fa-brands fa-linkedin" style={{fontSize:'25px'}}></i>
                </div>
            </div>
        </div>
        </>

    )
}