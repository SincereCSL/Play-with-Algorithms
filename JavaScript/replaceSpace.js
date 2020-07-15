//替换空格
// 题目描述：
/*    请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为“We Are Happy”，则经过替换之后的字符串为“We%20Are%20Happy” */

// 方法1 replace的字符串替换
function replaceSpace(str) {
    let result = str.replace(/ /g, '%20');
    console.log('方法一:' + result);
    return result;
}

replaceSpace('We Are Happy');

// 方法2 字符串的查询
function replaceSpace2(str) {
    let output = '';
    for (let i = 0, len = str.length; i < len; i++) {
        if (str[i] == ' ') {
            output += '%20';
        } else {
            output += str[i];
        }
    }
    console.log('方法二:' + output);
    return output;
}

replaceSpace2('We Are Happy');

