function StatusBoard(props) {
    return (
        <div className="infoboard" {...props} >
            <div className="playerstats">
                <div className="title">
                    <div className="status first-status">
                        <span className="score">X (YOU)</span><p>{props.xcount}</p>
                    </div>
                </div>

                <div className="title">
                    <div className="status second-status">
                        <span className="score">TIES</span><p>{props.tiescount}</p>
                    </div>
                </div>

                <div className="title">
                    <div className="status third-status">
                    <span className="score">O (CPU)</span><p>{props.ocount}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StatusBoard;