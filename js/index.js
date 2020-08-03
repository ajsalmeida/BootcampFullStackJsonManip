/*
Este script foi escrito para o bootcamp de dev fullstack do IGTI
As funcionalidades estão descrittas no arquivo checklist.txt
Antonio José Almeida - 2020
*/
import { promises as fs } from 'fs';
readJSON();
returnqtt();
showMorePopulated();
showLessPopulated();
largestEach();
smalestEach();

var arrayCities = [];
const maiorescidades = [];
const menorescidades = [];

//carrega arquivos JSON
async function readJSON() {
    // dataE e dataC são arrays com os dados de estado e cidade
    const dataE = JSON.parse(await fs.readFile("Estados.json"), ("UTF-8"));
    const dataC = JSON.parse(await fs.readFile("Cidades.json"), ("UTF-8"));

    //os arrays são repassados para as funções de criação e preenchimento dos arrays
    createJsonState(dataE);
    filterCityState(dataE, dataC);
}

//criando os arquivos JSON dos estados
function createJsonState(dataE) {
    const st = dataE.map(stte => {//mapeando os elementos do arquivo Estados.json em stte
        fs.writeFile(stte.Sigla + ".json");//criando os arquivos [estado].json
    });
}
//filtrando as cidades de cada estado
function filterCityState(dataE, dataC) {
    const states = dataE.map(state => {//seleciona os estados
        let stateJSONFile = state.Sigla + ".json";//criação da string com o nome do arquivo. Exemplo Estado=MG,arwuivo MG.json
        //console.log("Estado:" + state.Sigla);
        const cities = dataC.filter(city => {//selecionando as cidades de cada estado
            if (city.Estado === state.ID) {//Testando se a cidade pertence ao estado
                let a = city.Nome;//city.Nome contémo nome de uma cidade no arquivo Cidades.json
                arrayCities.push(a); //preenchendo array das cidades
            }
        });
        const obj = {//criação do objeto que será inserido no arquivo json respectivo stateJSONFile
            arrayCities
        };
        fs.writeFile((stateJSONFile), (JSON.stringify(obj, null, 2)));//carrega o arquivo JSON correspondente de cada estado
        arrayCities = [];//esvaziando o array para listar as cidades de cada estado
    });
}
/*Esta função retorna a quantidade de cidades presente em cada estado baseando-se no
arquivo repassado. Exemplo: se for recebido CE, o arquivo consultado será CE.json
*/
async function returnqtt() {
    try {
        let estado = "CE";
        let jsonSTR = ".json";
        let UFJson = estado + jsonSTR;
        const UF = JSON.parse(await fs.readFile(UFJson), ("UTF-8"));//realiza a leitura doo arquivo [UF].json
        console.log("Número de cidades de no estado de " + estado + " :" + UF.arrayCities.length);//mostra n. de cidades
    } catch (error) {
        console.log(error);
    }
}

//esta função mostra uma lista dos 5 estados com mais cidades
async function showMorePopulated() {
    const UFCT = JSON.parse(await fs.readFile("citiesPerState.json"), ("UTF-8"));
    const citiesMappedPerState = UFCT.map((state) => {//recupera UF e quantidade de cidades de cada estado
        return {
            UF: state.name,
            QT: state.quantOfCities
        };
    });
    let sorted = citiesMappedPerState.sort((a, b) => b.QT - a.QT);//ordena a lista de quantidades em ordem decrescente
    let fiveMore = (sorted.slice(0, 5));//corta o resultado com 5 primeiros resultados
    console.log("Estes são os 5 estados com mais cidades no Brasil");
    const mappedUF = fiveMore.map(uf => {//mapeia UF e quantidade da lista ordenada
        let state = uf.UF;
        let city = uf.QT;
        console.log(state + " - " + city); //retorna UF - Cidade
    });
}

//esta função mostra uma lista dos 5 estados com menos cidades, a lógica é a mesma da função anterior
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

//Coleta a cidade  com maior nome de cada estado
async function largestEach() {
    try {
        let estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"];
        for (let i = 0; i < estados.length; i++) {//este primeiro laço percorre cada arquivo de cada estado
            let maior = "";
            const UF = JSON.parse(await fs.readFile(estados[i] + ".json"), ("UTF-8"));
            for (let t = 0; t < UF.arrayCities.length - 1; t++) {//este laço testa o tamanho do nome das cidades
                if (maior.length < UF.arrayCities[t + 1].length) {
                    maior = UF.arrayCities[t + 1];
                }
            }
            if (estados[i] === "DF") {//o DF só tem uma cidade então a maior cidade já é esta
                maior = "Brasília";
            }
            let conc = `${maior} - ${estados[i]}`;//concatenando o nome da maior cidade com o estado respectivo
            maiorescidades.push(conc);
            maior = "";//esvaziando a variável para receber o próximo valor do próximo estado
        }
        console.log(maiorescidades);//imprime o array com as cidades de maiores nomes 
        biggestName(maiorescidades);//chama a função biggestname que mostra a cidade com maior nome de todas
    } catch (error) {
        console.log(error);
    }
}

//Aqui utiliza-se a mesma lógica da função anterior, porém com o menor valor
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
//esta função imprime a cidade com maior nome dentre todas as cidades de maior nome de cada estado
function biggestName(maiores) {
    let maiordetodos = "";
    for (let b = 0; b < maiores.length - 1; b++) {
        if (maiordetodos.length < maiores[b + 1].length) {
            maiordetodos = maiores[b + 1];
        }
    }
    console.log(`Cidade com o maior nome do Brasil: ${maiordetodos}`);
}

//esta função imprime a cidade com menor nome dentre todas as cidades de menor nome de cada estado
function smallestName(menores) {
    menores.sort();//foi necessário ordenar o vetor. Empate de tamanho nos nomes. Desempate ordem alfabética.
    //console.log("menores:" + menores);
    let menordetodos = "Esta é uma frase de easter egg. Precisava preencher com algo grande";
    for (let s = 0; s < menores.length - 1; s++) {
        if (menordetodos.length > menores[s + 1].length) {
            menordetodos = menores[s + 1];
        }
    }
    console.log(`Cidade com o menor nome do Brasil: ${menordetodos}`);
}