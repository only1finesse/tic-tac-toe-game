function InfoBoard() {
    return (
        <div className="infoboard" >
            <div className="details">
                <div className="info playericons">
                    <span className="x">X</span>
                    <span className="o">O</span>
                </div>
                
                <div className="info">
                    <div className="players-turn">
                    <span className="turn">O</span><p>TURN</p>
                    </div>
                </div>

                <div className="info">
                    <div className="redo">
                    <button><i class="fas fa-redo"></i></button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default InfoBoard;