function isPrime(number) {
    var prime;

    prime = 'True';

    for (var i = 2; i <= Math.sqrt(number); i+=1) {
        if ( number % i == 0) {
            prime = 'False';
        }
    }
    console.log('Is ' + number + ' a prime number? ' + prime);
}

isPrime(7);
isPrime(254);
isPrime(587);