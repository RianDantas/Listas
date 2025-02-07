let items = []

function append(element){
    items.push(element)
}

function insert(position,element){
    items.splice(position, 0, element)

    for( let i = items.length - 1; i >= position; i--){
        items[i+1] = item[i]
    }

    items[position] = element
}

function remove(element){

}

function removeAt(position){

}

function indexOf(element){

}

function search(element){

}

function size(){

}

function toString(){

}

function isEmpty(){

}

function print(){

}

function clear(){

}











