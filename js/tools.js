function getEle(id){
    return document.getElementById(id);
}

/**
 * 功能：给定元素查找他的第一个元素子节点，并返回
 * ele为父元素
 * @param ele
 * @returns {Element|*|Node}
 */
function getFirstNode(ele){
    var node = ele.firstElementChild || ele.firstChild;
    return node;
}

/**
 * 功能：给定元素查找他的最后一个元素子节点，并返回
 * ele为父元素
 * @param ele
 * @returns {Element|*|Node}
 */
function getLastNode(ele){
    return ele.lastElementChild || ele.lastChild;
}

/**
 * 功能：给定元素查找他的上一个兄弟元素节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getPrevNode(ele){
    return ele.previousElementSibling || ele.previousSibling;
}

/**
 * 功能：给定元素查找他的下一个元素兄弟节点，并返回
 * @param ele
 * @returns {Element|*|Node}
 */
function getNextNode(ele){
    return ele.nextElementSibling || ele.nextSibling;
}

/**
 * 功能：给定元素和索引值查找指定索引值的兄弟元素节点，并返回
 * @param ele 元素节点
 * @param index 索引值
 * @returns {*|HTMLElement}
 */
function getEleOfIndex(ele,index){
    return ele.parentNode.children[index];
}

/**
 * 功能：给定元素查找他的所有兄弟元素，并返回数组
 * @param ele
 * @returns {Array}
 */
function getAllSiblings(ele){
    //需要定义一个新数组 装所有的兄弟元素 将来用于返回
    var newArr = [];
    var arr = ele.parentNode.children;
    for(var i=0;i<arr.length;i++){
    //此处需判断传递的是否是元素本身 如果不是就添加进新数组
        if(arr[i]!==ele){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}