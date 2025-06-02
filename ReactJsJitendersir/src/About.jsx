export default function About()
{
    return(
        <>
            <div style={{width:'100%', height:'100vh',backgroundColor:'#b3b3f2', display:'grid',gridTemplateColumns:'repeat(2,1fr)',gridTemplateRows:'repoeat(1,1fr',padding:'50px'}}>
                <div style={{backgroundImage:'url(image.png)',backgroundSize:'cover',backgroundPosition:'center'}}></div>
                <div style={{display:'flex',alignItems:'center',padding:'30px'}}>
                    <div style={{width:'100%',height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                        <p style={{fontSize:'50px',fontStretch:'extra-expanded'}}>About Us</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias labore natus dolores impedit, nihil exercitationem asperiores amet aperiam illo reprehenderit voluptate officiis incidunt nobis quibusdam neque, beatae aspernatur animi cupiditate!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias labore natus dolores impedit, nihil exercitationem asperiores amet aperiam illo reprehenderit voluptate officiis incidunt nobis quibusdam neque, beatae aspernatur animi cupiditate!</p>
                        <button style={{border:'none', width:'150px', height:'50px', borderRadius:'100px', fontSize:'15px', backgroundColor:'#6b6be8'}}>About</button>
                    </div>
                </div>
            </div>
        </>
    )
}