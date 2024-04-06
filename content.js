i = 0
const runScript = async () => {
    const holder = document.querySelector('div[style="display: flex; flex-direction: column; padding-bottom: 0px; padding-top: 0px; position: relative;"]')
    
    if (!holder) {
        console.log('could not find holder')
    return
    }
    //console.log(typeof holder)
    const b = holder.querySelectorAll('div[class="_ac7v xzboxd6 xras4av xgc1b0m"]')
    if (!b) {
        console.log('could not find b')
    return
    }

    try{
        if(b[i]){
        // console.log(b[i])
        const c = b[i].querySelectorAll('div[class="_aabd _aa8k x2pgyrj xbkimgs xfllauq xh8taat xo2y696"]')
        console.log(c[0])
        console.log(c[1])
        console.log(c[2])
        i+=1
        } 
    } catch(e){
        console.log(e)
    }



}

// Run every 500ms

setInterval(function() { 
    runScript()
}, 500);