class TAJAXStorage {
    constructor() {
        this.url = "http://fe.it-academy.by/AjaxStringStorage2.php";
    }

    addValue(key, value) {
        console.log(value);
        return $.ajax( {
            url : this.url, type : 'POST', cache : false,
            data : { f : 'INSERT', n : `alex_${key}`, v : JSON.stringify(value) }
        });
    }

    getValue(key) {
        return $.ajax( {
            url : this.url, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : `alex_${key}`}
        });
    }
}