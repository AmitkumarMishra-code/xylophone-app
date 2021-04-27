export default function Bars(props){
    let height = (100 - ((props.index/1.25)-1) * 10) + '%' 
    return(
        <div className="bar-container" style={{height:height}}>
        <div className="bar" onMouseOver = {() => props.method(props.index-1)} style = {{backgroundColor:props.color}}>{props.text}</div>
        <div className="index">{props.index}</div>
        </div>
    )
}