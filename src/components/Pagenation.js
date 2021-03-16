export default function Pagenation(props){
	let current=props.current;
	let total=props.total;
	// var list = [];
	// var pageLimit = 5;
	// var upperLimit, lowerLimit;
	// var currentPage = lowerLimit = upperLimit = Math.min(current, total);

	// for (var b = 1; b < pageLimit && b < total;) {
	//     if (lowerLimit > 1 ) {
	//         lowerLimit--; b++; 
	//     }
	//     if (b < pageLimit && upperLimit < total) {
	//         upperLimit++; b++; 
	//     }
	// }

	// for (var i = lowerLimit; i <= upperLimit; i++) {
	//     if (i === currentPage){
	//     	list.push("["+i+"]");
	//     }
	//     else{
	//     	list.push(<button onClick={()=>alert(i)}>{i}</button>);
	//     }
	// }
	// console.log(list);
	// return list;
	let btns=[];
	let limit=5;
    
    while(current<=total){
	btns.push(<button onClick={()=>alert(current)}>{current}</button>);
	current++;
	}


  return btns;

}