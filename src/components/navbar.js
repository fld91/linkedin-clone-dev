import React from 'react';
const navlink={
    textAlign:'center',
    minWidth:60,
    marginLeft:10,
    marginRight:10,
    fontSize:12,
    padding:6
}
const selected ={
    textAlign:'center',
    minWidth:60,
    marginLeft:10,
    marginRight:10,
    fontSize:12,
    padfing:6,
    border:"1.5px solid black"
    
}

const Navbar = () => {
    
    return (
        <div style={{
            width: "100%",
            height: 55,
            backgroundColor: "white",
            position:'fixed',
            top:0}}>
        <div style={{
           
            
            maxWidth:"900px",
            display: 'flex',
            justifyContent:"center",
            alignItems:"center",
            margin:'auto'


        }}>


            <div>
                <img src="logo.png" alt='logo' height="32" />
            </div>
            <div style={{flex:1}}>
                <input
                placeholder="Search"
                style={{
                height:"32px",
                marginLeft:10,
                paddingLeft:10,
                borderRadius:"5px",
                border:"1px",
                outline:"none",
                width:"150px",
                backgroundColor:"#eef3f8"
                }}
                
                />
            </div>
            <div style={navlink}>
                <img src="home.png" alt="" height="19px" width="19px"/>
                <br/>
                Home
            </div>
            <div style={navlink}>
                <img src="home.png" alt="" height="19px" width="19px"/>
                <br/>
                MyNetworks
            </div>
            <div style={navlink}>
                <img src="home.png" alt="" height="19px" width="19px"/>
                <br/>
                Messaging
            </div>
            <div style={navlink}>
                <img src="home.png" alt="" height="19px" width="19px"/>
                <br/>
                Notifications
            </div>

        </div>
        </div>
    );
};

export default Navbar;