var display,onscreen,screenArray=[];function displayFunc(e){document.getElementById("screen").innerText=e}function removeFunc(){onscreen=(onscreen=document.getElementById("screen").innerText).substring(0,onscreen.length-1),document.getElementById("screen").innerText=onscreen,screenArray.push(onscreen)}function Addit(){display="+";var e=document.getElementById("screen").innerText.concat(display);screenArray.push(e),screenArray.forEach(displayFunc)}function Subractit(){display="-";var e=document.getElementById("screen").innerText.concat(display);screenArray.push(e),screenArray.forEach(displayFunc)}function Multiplyit(){display="*";var e=document.getElementById("screen").innerText.concat(display);screenArray.push(e),screenArray.forEach(displayFunc)}function Divideit(){display="/";var e=document.getElementById("screen").innerText.concat(display);screenArray.push(e),screenArray.forEach(displayFunc)}function delFunc(){screenArray=[],document.getElementById("screen").innerText=screenArray}function keyListener(e){clickListener(e.key)}function clickListener(e){if(1==e){var n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}else if(2==e){n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}else if(3==e){n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}else if(4==e){n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}else if(5==e){n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}else if(6==e){n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}else if(7==e){n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}else if(8==e){n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}else if(9==e){n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}else if("Enter"==e)calcFunc();else if("Delete"==e)delFunc();else if("Backspace"==e)removeFunc();else if(0==e){n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}else if("+"==e)Addit();else if("-"==e)Subractit();else if("*"==e)Multiplyit();else if("/"==e)Divideit();else if("("==e){n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}else{if(")"!=e)return 0;n=document.getElementById("screen").innerText.concat(e);screenArray.push(n),screenArray.forEach(displayFunc)}}function calcFunc(){var calc,index;index=screenArray[screenArray.length-1],calc=eval(index),document.getElementById("screen").innerText=calc}document.addEventListener("keydown",keyListener);
