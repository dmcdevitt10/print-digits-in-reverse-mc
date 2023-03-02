function printDigits(num){
    while(num > 0){
        let decimal = num % 10
        num = Math.floor(num / 10)
        console.log(decimal)
    }
}

printDigits(7404)