'use strict';

let isEdit = false;
let objId = null;

$('#adicionar-linha').click(() => {
    let dados = getDadosForm();

    adicionarLinha(dados);
});

function getDadosForm() {
    let obj = {};

    $('#form-salvamento-odd').serializeArray().forEach(item => {
        obj[item.name] = !!item.value ? item.value : '-';
    });

    return obj;
}

function adicionarLinha(dados) {

    let rowId;

    if (isEdit) {
        rowId = objId;
        document.getElementById(rowId).remove();

        isEdit = false;
        objId = null;
    } else {
        rowId = "odd-" + Math.random();
    }

    let oddRow = "" +
        "   <tr id=" + rowId + "> " +
        "       <td id=\"site-aposta\" name=\"site-aposta\"> " +
        dados["site-aposta"] +
        "       </td> " +
        "       <td id=\"qtd-apostada\" name=\"qtd-apostada\" > " +
        dados["qtd-apostada"] +
        "       </td> " +
        "       <td id=\"odd-apostada\" name=\"odd-apostada\"> " +
        dados["odd-apostada"] +
        "       </td> " +
        "       <td id=\"odd-apostada\" name=\"qtd-a-apostar\"> " +
        '-' +
        "       </td> " +
        "       <td id=\"odd-apostada\" name=\"odd-desejada\"> " +
        '-' +
        "       </td> " +
        "       <td class=\"btn-group\" role=\"group\"> " +
        "           <button id='editar-" + rowId + "' type=\"button\" class=\"btn btn-primary\">Editar</button>" +
        "           <button id='excluir-" + rowId + "' type=\"button\" class=\"btn btn-danger\">Excluir</button>" +
        "       </td> " +
        "   </tr> ";


    $('#listagem-odds').append(oddRow);
    adicionarEventos(rowId);
}

function adicionarEventos(id) {
    document.getElementById('editar-' + id)
        .addEventListener("click", () => {

            let dados = getDadosLinha(id);
            
            for(let key of Object.keys(dados)) {
                let element = document.getElementById(key);

                element.value = dados[key];
            }

            isEdit = true;
            objId = id;
            
        });

    document.getElementById('excluir-' + id)
        .addEventListener("click", () => {
            document.getElementById(id).remove()
        });
}

function getDadosLinha(id) {

    let obj = {};

    let filhos = $( document.getElementById(id) ).children();
    
    for(let filho of filhos) {
        if (filho.id != "") {
            obj[filho.id] = filho.innerText;
        }
    }

    return obj;
}


let element = document.getElementById("plugin-version")

if (!!element) {
    element.textContent = "Versão " + chrome.runtime.getManifest().version;
}