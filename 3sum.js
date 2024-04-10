function findSumTriplet(arr) {
    let clear = [];

    // Здесь логика a - b это способ проверки, например A = -4 B = -1  A - B = -4 - 1 = 5   - и тут программа понимает, что A > B и поэтому я сортирую массив и вставляю -4 первым элементом, в начало массива
    arr.sort((a, b) => a - b);

    for(let i = 0; i < arr.length - 2; i++) {
        let j = i + 1;
        let k = arr.length - 1;
        
        
        while(j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if(sum === 0) {
                clear.push([arr[i], arr[j], arr[k]]);
                j++;
                k--;
                while(j < k && arr[j] === arr[j - 1]) {
                    j++;
                }
                while(j < k && arr[k] === arr[k + 1]) {
                    k--;
                }
            } else if(sum < 0) {
                j++;
            } else {
                k--;
            }
        }

        while(i < arr.length - 2 && arr[i] === arr[i + 1]) {
            i++;
        }
        
    }

    return clear;
    
}