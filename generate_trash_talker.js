function sample(array) {
    const index = Math.floor(Math.random()*4)
    return array[index]
}

function generateTrashTalker(options) {
    //define the task and phrase
    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']  
    }
    const phrase = ['很簡單','很容易','很快','很正常']

    // create a collection to make a sentence
    let collection = ''
    if (options.target === 'engineer'){
        collection += '身為一個工程師'
        collection += sample(task.engineer)
        collection += sample(phrase)
    }
    if (options.target === 'designer'){
        collection += '身為一個設計師'
        collection += sample(task.designer)
        collection += sample(phrase)
    }
    if (options.target === 'entrepreneur'){
        collection += '身為一個創業家'
        collection += sample(task.entrepreneur)
        collection += sample(phrase)
    }
    if (collection.length === 0){
        return '請選擇人物'
    }
    return collection
  }
  

module.exports = generateTrashTalker