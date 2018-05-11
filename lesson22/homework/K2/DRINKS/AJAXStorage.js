class TAJAXStorage {
    constructor() {
        this.url = "http://fe.it-academy.by/AjaxStringStorage2.php";
    }

    addValue(key, value) {
        $.ajax( {
            url : this.url, type : 'POST', cache : false, dataType:'json',
            data : { f : 'INSERT', n : `petkov_${key}`, v : value }
        });
    }

    getValue(key) {
        $.ajax( {
            url : this.url, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : `petkov_${key}`},
            success: function(result) {return result}
        });
    }

    deleteValue(key) {
        // $.ajax( {
        //     url : this.url, type : 'POST', cache : false, dataType:'json',
        //     data : { f : 'READ', n : `petkov_${key}`},
        //     success: function(result) {return result}
        // });
    }

    getKeys() {
        // $.ajax( {
        //     url : this.url, type : 'POST', cache : false, dataType:'json',
        //     data : { f : 'READ', n : `petkov_${key}`},
        //     success: function(result) {return result}
        // });
    }
}