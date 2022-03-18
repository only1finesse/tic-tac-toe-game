
function Square(props) {
    return (
        <div className={props.iswinning === 'true' ? 'winningsquare' : 'square' } {...props}>
            {
                props.iswinning === 'false' && (
                    <span className="player" >
                        <p style={props.x ? { color: '#2cbbb0' } : { color: '#e6a641' }}>
                            {props.x ? 'x' : (props.o ? 'o' : '')}
                        </p>
                    </span>
                )
            }

            {
                props.iswinning === 'true' && (
                    <span className="player" >
                        <p style={props.x ? { color: '#192a34' } : { color: '#e9950f' }}>
                            {props.x ? 'x' : (props.o ? 'o' : '')}
                        </p>
                    </span>
                )
            }
        </div>
    );
}

export default Square;

{/* <p style={{fontSize: '10px'}}>{props.iswinning}</p> */ }
