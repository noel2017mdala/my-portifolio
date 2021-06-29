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
}

`;
