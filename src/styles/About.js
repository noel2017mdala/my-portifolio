import Styled from "styled-components";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Container = Styled.div`
background-color: FFFFFF;
color: black;
width: 90%;
height: 75vh;
margin: 2em auto;
box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);    
border-radius: 0.5em;
overflow: auto;

::-webkit-scrollbar {
    width: 3px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #141414;
    background-image: -webkit-linear-gradient(
      90deg,
      transparent,
      rgba(0, 0, 0, 0.4) 50%,
      transparent,
      transparent
    );
  }




header h1{
    text-align: center;
    padding-top: 1em;
}

.aboutMe {
    display: flex;
    flex-direction: column;
}

.Image_container{
// background-color: red;
margin: 0 auto;
}
.Image_container img{
    width:150px;
    height:150px;
    border-radius:50%;
}

.aboutMe h2{
    text-align: center;
    color: rgb(255, 96, 89);
}

.aboutMe li{
    color: black;
    margin: 2em 0em;
}

.aboutMe li a{
    text-decoration: none;
    color: rgb(255, 96, 89);
    margin: 0em 0.2em;
}

.aboutMe .wid_cards{
    display: flex;
    flex-direction: column;
}

.wid_cards .card{
    background-color: FFFFFF;
    color: black;
    box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);  
    width: 30%;
    padding: 1.5em;
    margin: 0.3em auto;
    border-radius: 0.5em;
    border: none;
    text-align: center;
    cursor: pointer;
}

.wid_cards .card:hover{
    background-color: rgb(255,70,79);
    box-shadow: 5px 5px 15px rgba(0, 0, 0.4, 0.6);  
    color: white;
    cursor: pointer;
}

.wid_cards .card img{
    display: block;
    margin: 0 auto;
}

.aboutMe .callToAction{
    padding-top: 1em;
    text-align: center;
}

.callToAction a{
    color: rgb(255,70,79);
    text-decoration: none;
}


.contact h3{
    text-transform: capitalized;
    text-align: center;
    color: rgb(255,70,79);
}
.contact p{
    font-weight: bold;
    padding-left: 1em;
    font-size: 1.2rem;
}
.contact form{
    width: 100%;
}
form label{
    display: none;
}
form input{
    border: 0.5px solid black;
    display: block;
    width: 85%;
    margin: 1em auto;
    padding: 1em;
    border-radius: 0.5em;
}

form textarea{
    display: block;
    width: 85%;
    margin: 1em auto;
    padding: 1em;
    resize: none;
    border: 1px solid black;
    border-radius: 0.5em;
}

form input[type=submit]{
    background-color: black;
    color: white;
    border: none;
    font-size: 1em;
    width: 50%;
    outline: none;
    overflow: auto;
}

.socialMedia{
    margin-top: 2.5em;
   
}
.socialMedia h3{
    text-align: center;
    text-transform: capitalize;
} 

.socials{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //  background-color: red;
    // width: 50%;
}

.socials a{
    width: 20%;
    // height: 20%;
    // margin: 1em; 0;
    // transition: all 0.2s ease-in-out;
}

.socials a img{
    width: 100%;
    height: 40%;
    margin: 0.3em auto;
    transition: all 0.2s ease-in-out;
    
}

.socials img:hover{
    transform: scale(1.1);
}

${media.tablet}{

    .aboutMe h2{
        font-size: 2rem;
    }

    .aboutMe ul{
        margin: 0 auto;
    }
    .aboutMe li{
        margin: 1em 2.5em;
    }

    .aboutMe .wid_cards{
        display: flex;
        flex-direction: row;
    }

    .wid_cards .card{
        width: 20%;
    }

    .contact h3{
        font-size: 2rem;  
    }


form input{
    width: 50%;
}

form textarea{
    width: 50%;
}

form input[type=submit]{
    width: 20%;
}


    .socials{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .socials a img{
        width: 50%;
        // height: 40%;
        margin: 0.3em auto;
        transition: all 0.2s ease-in-out;
        margin-left: 2em;
    }
}


${media.bigScreen}{
    .aboutMe ul{
        margin: 0 auto;
        font-size: 1.4rem;
    }

    .aboutMe .wid_cards{
        display: flex;
        flex-direction: row;
    }

    .wid_cards .card{
        width: 20%;
    }

    .contact h3{
        font-size: 2rem;  
    }


form input{
    width: 50%;
}

form textarea{

    width: 50%;
}

    .socials{
        display: flex;
        flex-direction: row;
        // justify-content: center;
        // align-items: center;
        // background-color: red;
        width: 70%;
        margin: 0 auto;
    }
    .socials a img{
        width: 40%;
        height: 40%;
        margin: 0.3em auto;
        transition: all 0.2s ease-in-out;
        margin-left: 3em;
    }
}

`;
