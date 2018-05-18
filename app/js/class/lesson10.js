{
    let list = new Set()
    list.add(5)
    list.add(7)
    console.log('size', list.size)
}

{
    let arr = ['aa', 'bb', 'cc', 'dd']
    let list = new Set(arr)
    list.forEach(function(item){
        console.log(item)
    })
}
{
    let map = new Map()
    let arr = ['123']
     map.set(arr,456)
    console.log('map', map, map.get(arr))
}
{
    let map = new Map()
    let array = []

}