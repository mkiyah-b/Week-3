// // character count for typewriter
// const headText = document.querySelector("#header");
// if(headText) {
//     const headWordCount = headText.textContent.length;
//     console.log(headWordCount);
//     headText.style.cssText = "--n: " + headWordCount;
//     // console.log(headText.style.cssText);
// }
// else {
//     console.log("Header Error");
// }


// const paraText = document.querySelector("#paragraph");
// if(paraText) {
//     const paraWordCount = paraText.textContent.length;
//     console.log(paraWordCount);
//     paraText.style.cssText = "--n: " + paraWordCount;
//     // console.log(paraText.style.cssText);
// }
// else {
//     console.log("Paragraph Error");
// }

   
const typeText = document.querySelectorAll("#typeText");
typeText.forEach(typeWriter => {
    const wordCount = typeWriter.textContent.length;
    console.log(wordCount);
    typeWriter.style.cssText = "--n: " + wordCount;
    // console.log(paraText.style.cssText);
})

// move the fireflies
    const jarPos = document.querySelector("#tallJar");
    console.log(jarPos.y);
    const fireflies = document.querySelectorAll("#ff1");
    fireflies.forEach(firefly => {
        let randomHeight = (Math.random() * 500) + jarPos.y + 200; 
        // console.log(randomHeight);
        firefly.style.top = randomHeight + "px";
        
        let randomWidth = (Math.random() * 300) + jarPos.x + 300; 
        // console.log(randomWidth);
        firefly.style.left = randomWidth + "px";
        
        let randomLength = (Math.random() * 35) + 20;
        // console.log(randomLength);
        firefly.style.width = randomLength + "px";
    })
    

