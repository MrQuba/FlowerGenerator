function createCircle(id, radius, hex_color, posx, posy, value_type = 'px'){
    const c = document.getElementById(id).style
    c.backgroundColor = hex_color
    c.width = radius + value_type
    c.height = c.width
    c.borderRadius = '50%'
    c.position = 'absolute'
    c.top = posy  + '%'
    c.left = posx +  '%'
    c.transform = 'translate(-50%, -50%)'
    c.zIndex = 16
}
function createPetal(id, width, height, hex_color, rotation, value_type = 'px'){
    const c = document.getElementById(id).style
    c.backgroundColor = hex_color
    c.width = width + 'px'
    c.height = height + 'px'
     c.borderRadius = '35%'
    c.position = 'absolute'
    c.top = 50  + '%'
    c.left = 50 +  '%'

    c.transform = `translate(-50%, -50%) rotate(${rotation}deg)`
}
function createDiv(id){
    return `<div id="${id}"></div>`
}
function createFlower(id, radius, petals, mid_color, petal_color){
    const f = document.getElementById(id);
    f.innerHTML += createDiv('flower')

    createCircle('flower', radius, mid_color, 50, 50)
    for(let i = 0; i < petals; i++){
    f.innerHTML += createDiv('petal' + (i+1))
    createPetal(`petal${i+1}`, 2*(radius/petals), 2*radius, '#ff0ff0', Math.round(360/petals)*i)
    }
}

createFlower('kwiatek', 200, 15, '#ff0000')