/*highNum) that will print every number from lowNum to highNum, inclusive.
 Inclusive means that the range includes lowNum and highNum.
*/

function logBetween(lowNum, highNum) {
    index = lowNum;
    while(index <= highNum){
        console.log(index)
        index++
    }

}
logBetween(-1, 2);
