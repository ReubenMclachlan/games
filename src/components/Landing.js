import React from 'react';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Displays dropdown when page is loaded where user chooses if they want to play a game or use the currency converter
function Landing(){ 
    return(
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                What do you want?
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/Minesweeper">Minesweeper</Dropdown.Item>
                <Dropdown.Item href="/Memory-card-game">Memory Card Game</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Landing;