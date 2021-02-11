function countDown(num) {
    for (let i = num; i >= 0; i--) {
        setInterval(function () {
            if (num != 0)
            {
                console.log(num)
                num--
            }
            else if (num === 0)
            {
                console.log("DONE!!!")
            }
        }, 1000 * i);
    }
}

function randomGame() {
    let num;
    let result = 0;
    let counter = setInterval(function() {
        num = Math.random()
        result++;
        console.log("Number:", num, "attempt:", result)
        if (num > .75)
        {
            clearInterval(counter)
            console.log("It took this many attempts:", result)
        }
    }, 1000);
}


    // num = Math.random()
    // console.log("Number After Loop:", num)
    // if (num > res)
    // {
    //     console.log(i)
    // }