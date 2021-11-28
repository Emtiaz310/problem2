// ১- ১০০ পর্যন্ত কোন সংখ্যাগুলো ৩,৫ এবং ৩ & ৫ উভয়  দ্বারা বিভাজ্য যা বের করো । 

function divisibleNumber (number){
    for (i = 1 ; i <= number ; i++ ){
        if ( i % 15 === 0 ){
            console.log( `${i} is Divisible with 3 & 5`);
        }
        else if ( i % 3 === 0 ){
            console.log(`${i} is Divisible with 3`);
        }
        else if ( i % 5 === 0){
            console.log(`${i} is Divisible with 5`);
        }
        else {
            console.log(i);
        }
    }
}
divisibleNumber(100);