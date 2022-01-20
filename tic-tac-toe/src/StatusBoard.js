function StatusBoard() {
    return (
        <div className="infoboard" >
            <div className="playerstats">
                <div className="title">
                    <div className="status first-status">
                        <span className="score">X(YOU)</span><p>14</p>
                    </div>
                </div>

                <div className="title">
                    <div className="status second-status">
                        <span className="score">TIES</span><p>32</p>
                    </div>
                </div>

                <div className="title">
                    <div className="status third-status">
                    <span className="score">O (CPU)</span><p>11</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StatusBoard;