// Question one from e-shuri exam

const isPrime = number => {
    let beprime = true;
    let  i = 1;
    while(beprime && i < isPrime / 2){
        if(number % i == 0){
            beprime = false;
        }
    }

    if(beprime){

            return true;
    }


    else{

    let arr = [] ;

        for(let j = 1; j < n; j++){
            let isprime = true;
            for(let div = 1; div < number / 2; dev ++){
                if(number % div == 0){
                    isprime = false;
                }
            }
            if(isprime){
                arr.push(j);
            }
        }


        return arr;
    }
}