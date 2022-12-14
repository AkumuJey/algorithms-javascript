const num = [-6, 20, 8, -2, 4]

const bubbleSort = (arr) => {
    let swapped
    do {
        swapped = false
        for (let index = 0; index < num.length -1; index++)
            if (arr[i] > arr[i+1]) {
                let temp = arr[1]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }      
        } while(swapped)
    }
