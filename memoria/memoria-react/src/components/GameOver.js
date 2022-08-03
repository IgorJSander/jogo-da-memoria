import React, { Fragment } from "react";

export default function GameOver(props) {
    return (props.show?
        <div id="gameOver">
            <div>
                Parabéns, Você completou o Jogo!
        </div>
                <button id="restart" onClick={props.handlerestart}>Jogue Novamente</button>
        </div> : <Fragment />
    )
}