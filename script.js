* {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
}


.calculator {
    width: 350px;
    background: #222;
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}


h2 {
    color: white;
    text-align: center;
    margin-bottom: 20px;
}


#display {
    width: 100%;
    height: 60px;
    font-size: 28px;
    text-align: right;
    padding: 10px;
    border-radius: 10px;
    border: none;
    margin-bottom: 20px;
}


.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}


button {
    height: 55px;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}


button:hover {
    opacity: 0.8;
}


button:active {
    transform: scale(0.95);
}
