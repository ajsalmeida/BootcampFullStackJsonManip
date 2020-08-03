# BootcampFullStackJsonManip
>Este é um projeto que utiliza um dos módulos de nodeJS para manipular arquivos Json. Vetores também foram manipulados.

![Image node.js](https://cdn0.iconfinder.com/data/icons/designer-skills/128/node-js-256.png)

### Lista de funcionalidades:
**1.** O arquivo Estados.json possui uma listagem com todos os estados do Brasil, cada um representado por um ID. No arquivo Cidades.json estão listadas todas as cidades do Brasil, com seu respectivo estado representando pelo ID fazendo referência ao arquivo Estados.json.

**2.** Criar uma função que irá criar um arquivo JSON para cada estado representado no arquivo Estados.json, e o seu conteúdo será um array das cidades pertencentes a aquele estado, de acordo com o arquivo Cidades.json. O nome do arquivo deve sero UF do estado, por exemplo: MG.json.

**3.** Criar uma função que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.

**4.** Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente. Você pode usar a função criada no tópico 2. Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]

**5.** Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, seguidos da quantidade, em ordem decrescente. Você pode usar a função criada no tópico 2. Exemplo de impressão: [“UF - 30”, “UF- 27”, “UF - 25”, “UF - 23”, “UF - 21”]

**6.** Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].

**7.** Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF. Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...].

**8.** Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF. Exemplo: “Nome da Cidade - UF".

**9.** Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF. Exemplo: “Nome da Cidade - UF".

### Saídas esperadas:

Número de cidades de no estado de CE :184
<hr>
**Estes são os 5 estados com mais cidades no Brasil<br>**

* MG - 853
* SP - 645
* RS - 496
* BA - 417
* PR - 399
<hr>
Estes são os 5 estados com menos cidades no Brasil<br>
RO - 52<br>
AC - 22<br>
AP - 16<br>
RR - 15<br>
DF - 1<br>
<hr>

[
  'Marechal Thaumaturgo - AC',
  'São Miguel dos Milagres - AL',
  'Santa Isabel do Rio Negro - AM',
  'Pedra Branca do Amaparí - AP',
  'Barro Preto (antigo Gov. Lomanto Jr.) - BA',
  'Deputado Irapuan Pinheiro - CE',
  'Brasília - DF',
  'Cachoeiro de Itapemirim - ES',
  'Santo Antônio do Descoberto - GO',
  'São Luís Gonzaga do Maranhão - MA',
  'São Sebastião da Vargem Alegre - MG',
  'Rio Verde de Mato Grosso - MS',
  'Vila Bela da Santíssima Trindade - MT',
  'São Sebastião da Boa Vista - PA',
  'São Sebastião de Lagoa de Roça - PB',
  'Santa Cruz da Baixa Verde - PE',
  'São Francisco de Assis do Piauí - PI',
  'Santa Cruz de Monte Castelo - PR',
  'São José do Vale do Rio Pret - RJ',
  'Governador Dix-Sept Rosado - RN',
  'Governador Jorge Teixeira - RO',
  'São João da Baliza - RR',
  'Almirante Tamandaré do Sul - RS',
  'Santa Terezinha do Progresso - SC',
  'Canindé de São Francisco - SE',
  'Euclides da Cunha Paulista - SP',
  'Santa Terezinha do Tocantins - TO'
]

Cidade com o maior nome do Brasil: Barro Preto (antigo Gov. Lomanto Jr.) - BA
<hr>
[
  'Feijó - AC',    'Belém - AL',
  'Apuí - AM',     'Cutias - AP',
  'Una - BA',      'Icó - CE',
  'Brasília - DF', 'Iúna - ES',
  'Caçu - GO',     'Codó - MA',
  'Luz - MG',      'Juti - MS',
  'Vera - MT',     'Afuá - PA',
  'Emas - PB',     'Exu - PE',
  'Altos - PI',    'Ivaí - PR',
  'Magé - RJ',     'Açu - RN',
  'Jaru - RO',     'Cantá - RR',
  'Ipê - RS',      'Itá - SC',
  'Arauá - SE',    'Itu - SP',
  'Pium - TO'
]

Cidade com o menor nome do Brasil: Açu - RN
