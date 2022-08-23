<h1 align="center">
  Teste T10 Front-end :computer:
</h1>
<p align="center">
    <em>
    Ola recrutadores !.
    

Afim de preencher a vaga disponibilizada para desenvolvedor Front-end, foi desenvolvido um projeto utilizando React + Typescript + Chakra UI.

:star_struck:
    </em>
</p>


## :mag: Problema

Paulo é um desenvolvedor Frontend e está trabalhando em um projeto pessoal que envolve fatos curiosos sobre gatinhos de estimação. Paulo encontrou uma API pública que lhe retorna os fatos curiosos, mas gostaria de exercitar duas maneiras de interagir com as listagens de fatos.
Para ajudar Paulo a desenvolver seu projeto, ele precisa que você elabore um frontend que ele possa testar e oferecer aos seus amigos para que os mesmos opinem sobre qual é a melhor maneira de interagir com o sistema. Em seu planejamento, ele imagina um sistema com 2 partes.

O backend será composto pela API pública: https://catfact.ninja

1. Na primeira parte o usuário busca fato por fato para compor a listagem. 
2. Na segunda parte o usário busca uma listagem pronta de fatos. Porém, a página terá que ter scroll infinito.
3. Em ambas as visualizações, os itens da lista viram CARDs na visualização mobile.
---

## :monocle_face: Resolução 


<p align="center">imagem 1 - Lista 1 - Visão desktop</p>
<p align="center">

![image](https://user-images.githubusercontent.com/74797973/186019873-b3f43ce1-2848-4ad0-b14a-81285cc420d2.png)
<em>Obs.: Imagem de exemplo. Detalhes abaixo.
</em>

</p>



<p>Nesta primeira lista, ao realizar a chamada na Api, será adicionado uma nova string a lista, e um um toast de Success aparecera no canto superior direito sempre que a chamada for bem sucedida conforme imagem 2. </p>

<p>Imagem 2 - Toast Sucess.</p>

![image](https://user-images.githubusercontent.com/74797973/186024363-9aac989d-7110-4f00-9d44-ecf1ee574fbb.png)

<p>Caso a o próximo fato seja ja exista na lista recorrente, sera feito novas chamadas para confirmar a não existências de fatos novos, durante o processo de novas requisições o usuario fica inabilitado de fazer uma nova pesquisa, sendo assim notificado visualmente por um spinner de loading no botão de procura conforme imagem 3 </p>

<p>Imagem 3 - Loading.</p>


![image](https://user-images.githubusercontent.com/74797973/186025015-8eab9ac6-3709-414d-9a46-95d6678a09bc.png)


Ao finalizar as requisições o botão de pesquisa ficara aptto novamente, e se ao final não encontrar nenhum fato novo dentro do tamanho do fato,o usuario sera notificado com um toast error conforme imagem 4.

<p>Imagem 4 - Toast Error </p>

![image](https://user-images.githubusercontent.com/74797973/186023452-3f065bf6-651e-4b59-a810-7eb7339120c8.png)


<p align="center">Lista 2 - Visão desktop</p>

<p align="center">

![image](https://user-images.githubusercontent.com/74797973/186019972-31b1dabc-7552-4432-bd03-41e62df59f46.png)
</p>

<p>Na lista 2, o funcionamento é semelhante, porém com algumas particularidades, pois ela ja trás uma lista completo de fatos usando como parâmetro, o tamanho do fato (Fact Size) e a quantidade de fatos (Max number of facts) que o usuario deseja que seja carregado, caso o usuario realize uma nova pesquisa e retorne a mesma lista , ele sera informado pelo Toast Error - Imagem 4, que a lista não possui mais fatos.</p>

<p>Caso o usuario mude os parâmetros para uma versão que traga uma lista nova o usuario também será informado por um Toast Success - Imagem 2.
</p>

<h1>Visão Mobile</h1>
<p>Conforme imagem 5- lista 1(Mobile) e imagem 6 - lista 2 (Mobile), a versão mobile trás as mesmas funcionalidades que a versao desktop, com um adendo para o menu Toggle - Imagem 7, que tem por objetivo garantir a responsividade do projeto e trazer uma visão desktop facil de ser compŕeendida.


<p> Imagem 5 - lista 1 (Mobile)</p>

![image](https://user-images.githubusercontent.com/74797973/186064408-2ec363b3-913d-4c97-98e9-fc0805be0d8d.png)


<p> Imagem 6 - lista 2 (Mobile)</p>

![image](https://user-images.githubusercontent.com/74797973/186064510-692d1313-17ba-4fa5-bbae-5b56c639db39.png)


<p>imagem 7 - menu Toogle</p>

![image](https://user-images.githubusercontent.com/74797973/186067665-c8aeb290-0401-43fc-859f-f37062524ee4.png)


<p>No canto superior esquerdo se localiza o logo T-10 - Imagem 8, através dele é possivel ser redirecionado para a pagina da T10.digital</p>

<p>imagem 8 - Logo - T10</p>

![image](https://user-images.githubusercontent.com/74797973/186067712-59bb8b1c-9a76-4380-985e-94e220c0332f.png)


<p>o Footer possui 3 objetos, nome do desenvolvedor do projeto, icone do gitHub e icone do LinkedIn. </br>
O nome é estático apenas representativo </br>
O icone GitHub possui um link com o GitHub, levando direto para o perfil do desenvolvedor.</br>
O icone LinkedIn possui um link com o LinkedIn, levando direto para o perfil do desenvolvedor. </p>

<p>imagem 9 - Footer</p>

![image](https://user-images.githubusercontent.com/74797973/186067781-60c1a0a4-48fd-4fbd-8949-e02c414c2806.png)

<h1>Detalhes Técnicos</h1>
<p>O projeto conta com 2 testes unitarios de componentes, sendo eles de componente Input e Header<p>

<p>O usuario pode rodar o projeto de varias maneiras:
A Primeira e mais tradicionar seria tendo node instalado na maquina e utilizando  o comando <h1>yarn start</h1>.
A segunda maneira é utilizando o comando :<h1> docker-compose build dev </h1> e logo depois o comando <h1>docker-compose up dev</h1> dessa maneira usuario não necessita ter as dependencias instaladas em sua maquina, pois o docker cria e inicia um container com as dependências necessarias para rodar o projeto.
A terceira maneira é uma versão automatizada da Segunda versão, essa maneira utiliza makefile, utilizando o comando: <h1>make start </h1> makefile irá chamar os comando de build e start do docker.
