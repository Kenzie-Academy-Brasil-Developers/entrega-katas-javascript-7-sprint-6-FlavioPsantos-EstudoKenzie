// ForEach
const callBackForEach = (element, index) => console.log(element, index);
const newForEach = (arr, callBack) => {
    let outPut = '';
    for (let i = 0; i < arr.length; i++) {
        outPut += callBackForEach(arr[i], i, arr);
    }

}
console.log(newForEach([1, 2, 3, 4], callBackForEach))
    // fill /Corrigir/
const newFill = (arr, positionStart, positionEnd, newValue) => {
    for (let i = positionStart; i < positionEnd; i++) {
        arr[i] = newValue
    }
    return arr;
}
console.log(newForEach([1, 2, 3, 4], 1, 3, 5))

// Map * Usarei multiplicação para exemplificar o Map
const callBackMap = (element, index, arr) => console.log(element * 2, index)
const newMap = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
        callBack(arr[i], i, arr)
    }
}
console.log(newMap([1, 2, 3, 4], callBackMap))
    //some
const callBackSome = (element, index, arr) => element > 10;
const newSome = (arr, callBack) => {
    let outPut = false;
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr) === true) {
            return true
        }
    }
    return outPut
}
console.log(newSome([1, 2, 3, 14], callBackSome))

// Find
const callBackFind = (element, index, arr) => element > 10;
const newFind = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr) === true) {
            return arr[i]
        }
    }

}
console.log(newFind([1, 2, 3, 14], callBackFind))
    // FindIndex
const callBackFindIndex = (element, index, arr) => element > 10;
const newFindIndex = (arr, callBack) => {
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr) === true) {
            return `[${i}]`
        }
    }

}
console.log(newFindIndex([1, 2, 3, 14], callBackFindIndex))
    // Every
const callBackEvery = (element, index, arr) => element > 10;
const newEvery = (arr, callBack) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr) === true) {
            result.push(arr[i])

        }
    }
    return (arr.length === result.length) ? true : false


}
console.log(newEvery([1, 2, 3, 14], callBackEvery))
    //filter
const callBackFilter = (element, index, arr) => element.tipo === 'prata';
const newFilter = (arr, callBack) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (callBack(arr[i], i, arr) === true) {
            result.push(arr[i])

        }
    }
    return result
}
console.log(newFilter([{ fruta: "banana", tipo: 'ouro' }, { fruta: "banana", tipo: 'prata' }], callBackFilter))

//concat
const newConcat = (arr, value1, value2) => {
    if (value2.length > 0 && value1.length > 0) {
        return arrResult = [...arr, ...value1, ...value2]
    }
}
console.log(newConcat([1, 2, 3], [4], [6]))
    //includes
const newIncludes = (arr, searchElement, fromIndex) => {
    if (fromIndex === undefined)
        fromIndex = 0
    for (let i = fromIndex; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true
        }
    }
    return false
}
console.log(newIncludes([1, 2, 3], 2, 1))
    //IndexOf
const newIndexOf = (arr, searchElement, fromIndex) => {
    if (fromIndex >= arr.length) {
        return -1
    } else if (fromIndex >= 0) {
        for (let i = fromIndex; i < arr.length; i++) {
            if (arr[i] === searchElement) {
                return i
            }
        }
    } else {
        for (let i = arr.length; i > 0; i--) {
            if (arr[i] === searchElement) {
                return i
            }
        }
    }
}
console.log(newIncludes([1, 2, 3], 2, 1))
    //Join
const newJoin = (arr, sepador) => {
    let strResult = ''
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined || arr[i] === null) {
            arr[i] = '';
            strResult += arr[i] + sepador;
        }
        strResult += arr[i] + sepador;

    }

    return strResult
}
console.log(newIncludes([1, 2, 3], ","))
    //Reduce
const callBackReduce = (acumulador, valorAtual, index, arr) => acumulador + valorAtual;
const newReduce = (arr, callBack) => {
    let acumulador = 0
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            acumulador += callBack(0, arr[i], i, arr)
        }
    }
    return acumulador
}
console.log(newReduce([1, 2, 3, 4, 85], callBackReduce))