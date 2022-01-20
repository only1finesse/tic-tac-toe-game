function Square(props) {
    return (
        <div className={'square'} {...props}>
            <span className="player" ><p>{props.x ? 'x' : (props.o ? 'o': '')}</p> </span>
        </div>
    );
}

export default Square