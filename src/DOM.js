/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const newTag = document.createElement(tag);
        newTag.innerHTML = content;
        document.body.appendChild(newTag);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/

function createNewDiv(n) {
    const div = document.createElement('div');
    div.className = `item_${n}`;
    return div;
}

export function generateTree(childrenCount, level) {
    let start = createNewDiv(1);
    let n = 1,
        i,
        j;
    n++;
    for (i = 0; i < childrenCount; i++) {
        start.append(createNewDiv(n));
    }
    n++;

    for (n; n <= level; n++) {
        let list = start.querySelectorAll('div');
        for (i = 0; i < list.length; i++) {
            if (list[i].childElementCount == 0) {
                for (j = 0; j < childrenCount; j++) {
                    list[i].append(createNewDiv(n));
                }
            }
        }
    }
    return start;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let i, j;
    let sectionTag;

    let start = generateTree(2, 3);

    let list = start.querySelectorAll('.item_2');
    for (i = 0; i < list.length; i++) {
        sectionTag = document.createElement('SECTION');
        sectionTag.className = 'item_2';
        sectionTag.innerHTML = list[i].innerHTML;
        list[i].parentNode.replaceChild(sectionTag, list[i]);
    }
    return start;
}
