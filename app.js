function countDown(num) {
    let counter = setInterval(function() {
        if (num <= 0)
        {
            clearInterval(counter);
            console.log("Done!");
        }
        else
        {
            console.log(num);
            num--;
        }
    }, 1000);
}

function randomGame() {
    let result = 0;
    let counter = setInterval(function() {
        let num = Math.random();
        result++;
        console.log("Number:", num, "attempt:", result);
        if (num > .75)
        {
            clearInterval(counter);
            console.log("It took this many attempts:", result);
        }
    }, 1000);
}