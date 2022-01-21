import React, { useState, useEffect } from 'react';

function InfoBoard(props) {

    return (
        <div className={"infoboard"} {...props} >
            <div className="details">
                <div className="info playericons">
                    <span className="x">X</span>
                    <span className="o">O</span>
                </div>

                <div className="info">
                    <div className="players-turn">
                        {props.player === 'x' ?
                            (<span className="turn" style={{ color: '#2cbbaf8c' }}>
                                {props.player}
                            </span>) : 
                            (props.player === 'o' ? (<span className="turn" style={{ color: '#e6a74173' }}>
                                {props.player}
                            </span>) :
                            (<span className="turn">
                            {props.player}
                        </span>))
                        }
                            <p>TURN</p>
                    </div>
                </div>

                <div className="info">
                    <div className="redo">
                        <button onClick={props.reset}><i className="fas fa-redo"></i></button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default InfoBoard;