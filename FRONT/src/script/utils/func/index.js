import jquery from 'jquery'
import isArrayOrList from '@/utils/func/isArrayOrList'


/**
* Gets index from the passed element.
* @param {String} selector is optional.
*/
export default (item, selector) => {
    console.log('index')
    item = isArrayOrList(item) ? item[0] : item
    let  children = selector != null? jquery(selector, item.parentNode) : item.parentNode.childNodes
    let num = 0
    for (var i=0; i<children.length; i++) {
         if (children[i] == item) return num
         if (children[i].nodeType==1) num++
    }
    return -1
}