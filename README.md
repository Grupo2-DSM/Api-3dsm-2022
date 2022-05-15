[![Generic badge](https://img.shields.io/badge/STATUS%20DA%20SPRINT-CONCLUIDA-green)](https://shields.io/)
<br id="topo">
<h1 align="center"> Sprint 2: 25/04/2022 a 15/05/2022 </h1>
<p align="center"> 
    <a href="#objetivos">Objetivos da Sprint</a> | 
    <a href="#mvp">MVP</a> | 
    <a href="#prototipo">Protótipo</a> |
    <a href="#backlog">backlog</a> |
    <a href="#entregas">Entregas</a> |
    <a href="#Burndown">Burndown</a> |
    
    
</p>
 
<span id="objetivos">

## Objetivos

1. Viabilizar um MVP para essa sprint
    
2. Organização da equipe e planejamento de processos;
    
 - [x] Modelar o banco de dados de Usuários (NoSQL).
 - [x] Programar toda a parte de funcionalidades no backend.
 - [x] Construção da parte visual de Login, Cadastros, Visualizações e Edições de Usuários e Chamados (frontend)
 - [x] Integração todas as partes do projeto (B.D, Front e Back)
   
3. Confecção do wireframe, um rascunho do protótipo com todas as Funcionalidades;

4. Desenvolvimento da aplicação web.    

<span id="mvp">
    
## MVP - Mínimo Produto Viável

<p>O que vamos entregar?</p>
    
 Interface com todas as funcionalidades: Login, Cadastro de Usuários, Visualização e Edição de Usuários, Cadastro de Chamadas, Visualização e Edição de Chamados em funcionamento.
    
<span id="backlog">

## Backlog Sprint 2

 <img src = "https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/Backlog_Sprint2_.png">

→ [Voltar ao topo](#topo)
    
<span id="prototipo">
    
## Protótipo

![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/Tela_Login_nova_Sprint2.png)    

![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/Tela_Cadastro_novo_Sprint2.png)    
     
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/Tela_Inicio_novo_Sprint2.png)    
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/Tela_Chamado_novo_Sprint2.png)
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/Editar_Chamado_Sprint2.png)    
    
→ [Voltar ao topo](#topo)
    
<span id="entregas">

## Entregas
    
### Back-end   
    
- [x] 2.1 - Login

Funcionalidade que permite ao usuário Logar na aplicação

![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/Get_Login.png)    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/ENTRADA_GET_LOGIN_USUARIO.png) 
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/RESPOSTA_GET_LOGIN_USUARIO.png) 
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/RESPOSTA_GET_LOGIN_USUARIO_BD.png) 
     
- [x] 2.2 - Cadastro Usuário
    
Funcionalidade que possibilita ao Administrador cadastrar um novo usuário
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/GET_CADASTRO.png)  
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/ENTRADA_POST_CARASTRAR_USUARIO.png) 
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/RESPOSTA_POST_CARASTRAR_USUARIO.png) 
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/CONFIRMA%C3%87%C3%83O_CADASTRO_BD.png)    

- [x] 2.3 - Visualizar e Deletar Usuários 
    
Funcionalidade que permite visualizar todos os usuários cadastrados e deletá-los caso necessário
  
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/Get_Usuarios.png )  
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/REQUISICAO_GET_USUARIOS_RESPOSTA.png) 
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/DELETE_USUARIO.png) 
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/ENTRADA_DELETE_USUARIO.png) 
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/RESPOSTA_DELETE_USUARIO.png) 

- [x] 2.4 - Atualizar e Deletar Chamados
    
Funcionalidade que permite atualizar um chamado em aberto e deletar caso o usuário ache necessário.
  
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/ENTRADA_UPDATE_CHAMADO.png)
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/RESPOSTA_UPDATE_CHAMADO.png)
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/DELETE_ENTRADA.PNG)  
    
- [x] 2.5 - Redefinir Senha
   
Funcionalidade em que o usuário restabelece uma nova senha da cadastrada pelo Administrador 
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/ENTRADA_REDEFINIR_SENHA.png)    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/RESPOSTA_REDEFINIR_SENHA.png)
      
- [x] 3.1 - Banco de dados: Modelagem 
   
Modelagem do banco de dados para Usuários, contendo os campos id, nome, e-mail, departamento, cargo, senha e usuário
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/BD_usuarios.png)
      
- [x] 3.2 - Banco de dados: Conexão com backend
    
→ [Voltar ao topo](#topo) 
    
### Front-end   

- [x] 2.6 - Login e Tela Home
    
Interface navegável por onde o usuário irá fazer o login e tela inicial 
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/Entrega_Login_Sprint2.png)
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/Entrega_HOME_Sprint2.png)

- [x] 2.7 - Tela Cadastro E Visualizar de Usuário
   
Interface navegável por onde o Administrador irá cadastrar e visualizar os usuários
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/Entrega_CADASTRO_USUARIO_Sprint2.png)
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/Entrega_VISUALIZAR_USUARIOS_Sprint2.png)
    
- [x] 2.8 - Tela Atualização do Cadastro
   
Interface navegável por onde o chamado é atualizado
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/Entrega_ATUALIZAR_CHAMADO_Sprint2.png)
       
- [x] 2.9 - Tela de Redefinir Senha
   
Interface navegável por onde o usuário restabelece uma nova senha da cadastrada pelo Administrador 
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/Entrega_REDEFINIR_SENHA_Sprint2.png)
   
 
- [x] 2.10 - Conexão Frontend/backend 
    
O frontend integrado a todo o backend, trocando dados entre si com todas as funcionalidades  
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/LOGIN.gif)  
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/TELA-HOME.gif)
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/CRIAR-E-VISUALIZAR-USU%C3%81RIOS.gif)
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/CRIAR-CHAMADO_-VISUALIZAR-CHAMADO_-EDITAR-CHAMADO.gif)
    
→ [Voltar ao topo](#topo) 
    
<span id="Burndown">
    
## Burndown
    
O Burndown é uma ferramenta visual do Scrum que permite verificar se o trabalho está dentro do esperado no que se refere ao cronograma, ajudando a medir a produtividade e o desempenho da equipe nos quesitos esforço, tempo e prazo de entrega.

### Tarefas   
    
Divisão de tarefas com os respectivos responsáveis, com as datas de início e término.
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/Burndown_tarefas_sprint2.png)  
    
### Horas 
    
Acompanhamento diário das horas trabalhadas, exceto os finais de semana.
    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/Burndown_ac_horas_sprint2.png)  

### Gráfico 
    
No Burndown chart é possível ver a taxa de progresso da equipe na Sprint, ajudando a enxergar o seu progresso na conclusão de uma Sprint. O gráfico não aponta apenas o cumprimento dos prazos, também mostra como a equipe atuou com o fluxo de atividades. Com essa ferramenta, será possível verificar se a equipe está adiantada, dentro do cronograma ou em atraso.
    
Essa representação gráfica é formada por dois eixos: Y (vertical), que vai representar o trabalho que precisa ser realizado, e X (horizontal), que representa o tempo -- quantidade de trabalho, estipulada em dias ou horas, para concluir a demanda.
    
* Linha de trabalho ideal (Azul)
    
A linha ideal do gráfico de Burndown conectar o ponto inicial ao ponto final do trabalho. Mostra a soma das estimativas para todas as tarefas que precisam ser terminadas.
    
* Linha de trabalho real (Vermelho)
    
Essa linha apresenta o trabalho real, que no início, o trabalho restante as duas linhas são iguais, porém, à medida que o projeto progride, a linha real flutua acima e abaixo da linha ideal.
    
Segue o Burndown da Equipe na Sprint 1: 

![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/Sprint-2/img/Burndown_grafico_sprint2.png)  
    
→ [Voltar ao topo](#topo)  


  
