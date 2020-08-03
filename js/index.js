import { promises as fs } from 'fs';
readJSON();
returnqtt();
showMorePopulated();
showLessPopulated();
largestEach();
smalestEach();
var arrayCities = [];
var arrayName = [];
const maiorescidades = [];
const menorescidades = [];

//carrega arquivos JSON
async function readJSON() {
    const dataE = JSON.parse(await fs.readFile("Estados.json"), ("UTF-8"));
    const dataC = JSON.parse(await fs.readFile("Cidades.json"), ("UTF-8"));
    createJsonState(dataE);
    filterCityState(dataE, dataC);
}
/*(ok)Criar uma função que irá criar um arquivo JSON para cada estado representado no
arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes a
aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve ser
o UF do estado, por exemplo: MG.json.*/
//cria os arquivos JSON dos estados
function createJsonState(dataE) {
    const st = dataE.map(stte => {
        fs.writeFile(stte.Sigla + ".json");//cria os arquivos [estado].json
    });
}
//filtra as cidades de cada estado
function filterCityState(dataE, dataC) {
    const states = dataE.map(state => {//seleciona os estados
        let stateJSONFile = state.Sigla + ".json";
        //console.log("Estado:" + state.Sigla);
        const cities = dataC.filter(city => {//seleciona as cidades de cada estado
            if (city.Estado === state.ID) {//inserir cidades dentro do arquivo
                let a = city.Nome;
                arrayCities.push(a); //preenchendo array das cidades
            }
        });
        const obj = {
            arrayCities
        };
        fs.writeFile((stateJSONFile), (JSON.stringify(obj, null, 2)));//carrega o arquivo JSON correspondente de cada estado

        arrayCities = [];
    });
}
/*(ok)Criar uma função que recebe como parâmetro o UF do estado, realize a leitura do
arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.
*/
async function returnqtt() {
    try {
        let estado = "CE";
        let jsonSTR = ".json";
        let UFJson = estado + jsonSTR;
        const UF = JSON.parse(await fs.readFile(UFJson), ("UTF-8"));
        console.log("Número de cidades de no estado de " + estado + " :" + UF.arrayCities.length);
    } catch (error) {
        console.log(error);
    }
}
/* (ok)Criar um método que imprima no console um array com o UF dos cinco estados
que mais possuem cidades, seguidos da quantidade, em ordem decrescente. Você
pode usar a função criada no tópico 2. Exemplo de impressão: [“UF - 93”, “UF - 82”,
“UF - 74”, “UF - 72”, “UF - 65”]*/
async function showMorePopulated() {
    const UFCT = JSON.parse(await fs.readFile("citiesPerState.json"), ("UTF-8"));
    const citiesMappedPerState = UFCT.map((state) => {
        return {
            UF: state.name,
            QT: state.quantOfCities
        };
    });
    let sorted = citiesMappedPerState.sort((a, b) => b.QT - a.QT);
    let fiveMore = (sorted.slice(0, 5));
    console.log("Estes são os 5 estados com mais cidades no Brasil");
    const mappedUF = fiveMore.map(uf => {
        let state = uf.UF;
        let city = uf.QT;
        console.log(state + " - " + city);
    });
}
/*(ok)Criar um método que imprima no console um array com o UF dos cinco estados
que menos possuem cidades, seguidos da quantidade, em ordem decrescente.
Você pode usar a função criada no tópico 2. Exemplo de impressão: [“UF - 30”, “UF
- 27”, “UF - 25”, “UF - 23”, “UF - 21”] */
async function showLessPopulated() {
    const UFCT = JSON.parse(await fs.readFile("citiesPerState.json"), ("UTF-8"));
    const citiesMappedPerState = UFCT.map((state) => {
        return {
            UF: state.name,
            QT: state.quantOfCities
        };
    });
    let sorted = citiesMappedPerState.sort((a, b) => b.QT - a.QT);
    let fiveLess = (sorted.slice(22, 28));
    console.log("Estes são os 5 estados com menos cidades no Brasil");
    const mappedUF = fiveLess.map(uf => {
        let state = uf.UF;
        let city = uf.QT;
        console.log(state + " - " + city);
    });

}

/*()Criar um método que imprima no console um array com a cidade de maior nome de
cada estado, seguida de seu UF. Por exemplo: [“Nome da Cidade – UF”, “Nome da
Cidade – UF”, ...]. */
async function largestEach() {
    try {
        let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"];
        for (let i = 0; i < estados.length; i++) {
            let maior = "";
            const UF = JSON.parse(await fs.readFile(estados[i] + ".json"), ("UTF-8"));
            for (let t = 0; t < UF.arrayCities.length - 1; t++) {
                if ((maior.length < UF.arrayCities[t + 1].length) && (!UF.arrayCities[t].includes('('))) {
                    maior = UF.arrayCities[t + 1];
                }
            }
            if (estados[i] === "DF") {
                maior = "Brasília";
            }
            let conc = `${maior} - ${estados[i]}`;
            maiorescidades.push(conc);
            maior = "";
        }
        console.log(maiorescidades);
        biggestName(maiorescidades);
    } catch (error) {
        console.log(error);
    }
}

/* (ok)Criar um método que imprima no console um array com a cidade de menor nome
de cada estado, seguida de seu UF. Por exemplo: [“Nome da Cidade – UF”, “Nome
da Cidade – UF”, ...].*/
async function smalestEach() {
    try {
        let estadosLess = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"];
        for (let j = 0; j < estadosLess.length; j++) {
            let menor = "Esta é uma frase de easter egg. Precisava preencher com algo grande";
            const UFM = JSON.parse(await fs.readFile(estadosLess[j] + ".json"), ("UTF-8"));
            for (let u = 0; u < UFM.arrayCities.length - 1; u++) {
                if (menor.length > UFM.arrayCities[u + 1].length) {
                    menor = UFM.arrayCities[u + 1];
                }
            }
            if (estadosLess[j] === "DF") {
                menor = "Brasília";
            }
            let conc = `${menor} - ${estadosLess[j]}`;
            menorescidades.push(conc);
            menor = "";
        }
        console.log(menorescidades);
        smallestName(menorescidades);
    } catch (error) {
        console.log(error);
    }
}

/* ()Criar um método que imprima no console a cidade de maior nome entre todos os
estados, seguido do seu UF. Exemplo: “Nome da Cidade - UF".*/
function biggestName(maiores) {
    let maiordetodos = "";
    for (let b = 0; b < maiores.length - 1; b++) {
        if (maiordetodos.length < maiores[b + 1].length) {
            maiordetodos = maiores[b + 1];
        }
    }
    console.log(`Cidade com o maior nome do Brasil: ${maiordetodos}`);
}
/* ()Criar um método que imprima no console a cidade de menor nome entre todos os
estados, seguido do seu UF. Exemplo: “Nome da Cidade - UF".*/
function smallestName(menores) {
    menores.sort();
    //console.log("menores:" + menores);
    let menordetodos = "Esta é uma frase de easter egg. Precisava preencher com algo grande";
    for (let s = 0; s < menores.length - 1; s++) {
        if (menordetodos.length > menores[s + 1].length) {
            menordetodos = menores[s + 1];
        }
    }
    console.log(`Cidade com o menor nome do Brasil: ${menordetodos}`);
}