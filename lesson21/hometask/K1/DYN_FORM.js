var form = document.createElement("form");
form.action = "http://fe.it-academy.by/TestForm.php";

function loadSiteData() {
    $.ajax(
        "site_data.json",
        {
            type: "GET",
            dataType: "jsonp",
            success: fillForm
        }
    );
}

loadSiteData();

//document.body.appendChild(fillForm(form1, formDef1));

document.body.appendChild(createHr());

//var form2 = document.createElement("form");
//form2.action = "http://fe.it-academy.by/TestForm.php";
//document.body.appendChild(fillForm(form2, formDef2));


function fillForm(array) {
    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    form.appendChild(table);
    table.appendChild(tbody);

    for (let i = 0; i < array.size(); i++) {
        var tr = document.createElement("tr");
        var element;

        switch (array[i].kind) {
            case "longtext":
            case "shorttext":
            case "number":
                element = createTextFiled(array[i]);
                break;
            case "check":
                element = createCheckBox(array[i].name);
                break;
            case "combo":
                element = createCombo(array[i].name, array[i].variants);
                break;
            case "radio":
                element = createRadio(array[i].name, array[i].variants);
                break;
            case "memo":
                element = createTextarea(array[i]);
                break;
            case "submit":
                element = createSubmit(array[i]);
                break;
        }

        if (array[i].kind != "submit" && array[i].kind != "memo") {
            tr.appendChild(createLabel(array[i].label));
        }
        tr.appendChild(element);
        
        tbody.appendChild(tr);
    }

    return form;
}


function createSubmit(data) {
    var submit = document.createElement("input");
    submit.type = data.kind;
    submit.value = data.label.replace(':', '');
    return submit;
}

function createCheckBox(fieldName) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = fieldName;
    checkbox.checked = true;

    return checkbox;
}


function createRadio(fieldName, variants) {
    var td = document.createElement("td");
    for (let i = 0; i < variants.length; i++) {
        var element = document.createElement("input");
        element.type = "radio";
        element.name = fieldName
        element.value = variants[i].value;

        var span = document.createElement("span");
        span.innerHTML = variants[i].text

        td.appendChild(element);
        td.appendChild(span);
    }

    return td;
}

function createCombo(fieldName, variants) {
    var element = document.createElement("select");
    element.name = fieldName;
    element.style.cssText = 'width: 204px; margin-left: 2px';

    for (let i = 0; i < variants.length; i++) {
        var option = document.createElement("option");
        option.value = variants[i].value;
        option.innerHTML = variants[i].text;

        element.options.add(option);
    }

    return element;
}


function createTextFiled(data) {
    var textField = document.createElement("input");
    textField.type = "text";
    textField.name = data.name;
    var style;
    switch (data.kind) {
        case "shorttext":
            style = 'width: 200px';
            break;
        case "longtext":
            style = 'width: 453px';
            break;
        case "number":
            style = 'width: 80px'
            break;
    }
    textField.style.cssText = style;

    return textField;
}


function createTextarea(data) {
    var td = document.createElement("td");
    td.colSpan = 2;
    td.innerHTML = data.label;
    td.appendChild(document.createElement("br"))

    var textarea = document.createElement("textarea");
    textarea.name = data.name;
    textarea.style.cssText = 'width: 608px; height: 50px';

    td.appendChild(textarea);

    return td;
}


function createLabel(labelName) {
    var label = document.createElement("td");
    label.innerHTML = labelName;

    return label;
}

function createHr() {
    var hr = document.createElement("hr");
    hr.style.cssText = 'margin: 15px 0 15px 0';
    return hr;
}