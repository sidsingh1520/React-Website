import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../images/Oregen_Logo.png";
function Header() {
    return (
        <div className="Header">
            <a>
                <img className="logo" src={logo}/>
            </a>
            <div className="Menu">
                <a href="#">Courses</a>
                <a href="#">Battleground</a>
                <a href="#">Join Community</a>
                <a href="#">Our Team</a>
            </div>
            <SearchIcon style={{fill: "white",fontSize:24,marginRight:10}}/>
            <div className="RightMenu">
                
                <a href="#">Login</a>
                <div className="Button">Sign Up</div>
            </div >
        </div>
    )
}

export default Header


// const Container=styled.div`
//     min-height:70px;
//     display:flex;
//     align-items:center;
//     padding:0 10px;
//     top:0;
//     left:0;
//     right:0;
//     background:#212121;
//     border-bottom-left-radius: 20px;
//     border-bottom-right-radius: 20px;

// `
// const Menu=styled.div`
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     flex:1;
//     a{
//         font-weight:600;
//         text-transform:uppercase;
//         padding:0 10px;
//         flex-wrap:nowrap;
//         color:white;
//     }
// `
// const RightMenu=styled.div`
//     display:flex;
//     flex:0.5;
//     align-items:center;
//     justify-content:center;
//     a{
//         font-weight:600;
//         text-transform:uppercase;
//         padding:0 10px;
//         color:white;
//     }
// `
// const Button=styled.div`
//     width: 113px;
//     height: 36px;
//     background: #FF2E00;
//     mix-blend-mode: normal;
//     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
//     border-radius: 17px;
//     color:white;
//     align-items:center;
//     display:flex;
//     justify-content:center;
//     margin:0 20px;
//     cursor:pointer;
// `
// const CustomSearch=styled(SearchIcon)`

