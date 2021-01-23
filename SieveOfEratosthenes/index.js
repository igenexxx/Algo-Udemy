//return all prime numbers up to 'num' in array
function sieveOfEratosthenes (n) {
    let primes = new Array(n);
    primes.fill(true);

    [primes[0], primes[1]] = [false, false];

    for(let i = 2; i <= Math.sqrt(n); i++) {
      console.log(Math.sqrt(n));
      for(let j = 2; j * i <= n; j++) {
        primes[i * j] = false;
      }
    }

    let result = [];
    for (let i = 0; i < primes.length; i++) {
      if(primes[i]) result.push(i);
    }

    return result;
}

console.log(sieveOfEratosthenes(20));