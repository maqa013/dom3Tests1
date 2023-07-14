




// 1)
//создайте новый элемент и добавьте его в блок ниже с помощью append
<div id='block'></div>
const block = document.querySelector('#block')
const addh1 = document.createElement('h1')
addh1.innerHTML = 'New element'
block.append(addh1)

// 2)
//создайте новый элемент и добавьте его в блок ниже с помощью insertBefore
{/* <div id='block'></div> */}

const addp = document.createElement('p')

block.insertBefore(addp , addh1)




// 3)
//удалите тег 'p' из скрипта ниже с помощью DOM метода
{/* <div id='block'>
    <p>Some text</p>
</div> */}
const p = document.querySelector('p')
block.removeChild(p)

// 4)
//замените тег 'p' на <i>Hello World</i>
{/* <div id='block'>
    <p>Some text</p>
</div> */}
const elementI = document.createElement('i')
elementI.innerHTML = 'Hello world'

block.removeChild(p , elementI)

// 5)
//выведите в консоли коллекцию всех элементов с классом .block
console.log(document.querySelectorAll('.block'))
// 6)
//выведите в консоли первый элемент из ранее созданной коллекции
console.log(block[0])
// 7)
//выведите в консоли количество элементов в ранее созданной коллекции
console.log(block.lenght)
// 8)
//в чем разница между nodeList и HtmlCollection

// HTMLCollection это совокупность элементов HTML.
//   a NodeList набор узлов документа.
//   чтобы получить доступ к элементом HtmlCollection их имени, идентификатору или номеру индекса. 
//    a NodeList можно получить только по их порядковому номеру
// Только объект NodeList может содержать узлы атрибутов и текстовые узлы.
