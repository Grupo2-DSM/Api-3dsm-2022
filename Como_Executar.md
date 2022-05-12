<br id="topo">
<h1 align = "center"> FATEC Profº Jessen Vidal, SJC - 3º Semestre DSM </h1>
<p align = "center">
<img src = "https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/Logo_Sprint2.png" width = "400px" height = "200px">


<p align = "center"> GoodTicket é um Website Help Desk para suporte técnico acessível e fácil de usar para empresas.

## INSTALANDO A APLICAÇÃO 

Inicialmente antes de baixar o repositório é necessário que instale:

•	Editor de Código 
1.	[VISUAL STUDIO CODE](https://code.visualstudio.com/Download)
2.	[ECLIPSE IDE](https://www.eclipse.org/downloads/download.php?file=/oomph/epp/2022-03/R/eclipse-inst-jre-win64.exe)

•	Ferramenta
1.	[INSOMNIA](https://insomnia.rest/download)

•	Linguagens 
1.	[Java](https://www.java.com/pt-BR/download/) e [lombok](https://projectlombok.org/download)
2.	[TypeScript](https://www.typescriptlang.org/download) 
    
•	Gerenciador
1.	[NODE](https://nodejs.org/en/)
2.	[YARN](https://yarnpkg.com/)
  
```bash
# Baixe este repositório ou clone pelo Git usando o comando:
$ git clone https://github.com/Grupo2-DSM/Api-3dsm-2022.git
```

Após baixar e executar, abra o ECLIPSE.
1. Clique na aba File > Open Projects from System
2. Selecione o botão Directory e navegueate a pasta back-end
3. Na pasta do projeto com o botão direito do mouse > maven > Update Project
4. Navegue da seguinte forma src/main/java > com.example.banco.demo
3. Clique em cima do arquivo DemoApplication do projeto com o botão direito do mouse > Run As > Java Application

Para realizar o teste, basta abrir o INSOMNIA
1.	Crie uma requisição GET
2.	Passe a rota http://localhost:8080/chamados
3.	Se retornar informações conforme imagem, seu projeto está rodando, podendo usar GET, DELETE, PUT E POST.

![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/REQUISICAO_GET_CHAMADOS.png)    
![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/REQUISICAO_GET_CHAMADOS_RESPOSTA.png) 
 


Após abra o VISUAL STUDIO e acesse a pasta front-end do repositório goodticket acesse o termina:
 
```bash
# Confira as versão do NODE
$ node -v
# Instale o Typescript globalmente
$ npm install -g typescript
# Abra a o documento index.tsx na pasta src/pages/Home
$ cd src/pages/Home/index.tsx
# Instale o modulos do node
$ npm install
# Instale o YARN globalmente
$ npm install --global yarn
# Instale as dependencias do YARN
$ yarn install
# Inicie a aplicação
$ yarn start
```

A página irá abrir automaticamente pela rota http://localhost:3000 conforme imagem:

![](https://github.com/Grupo2-DSM/Api-3dsm-2022/blob/main/img/Tela_Inicio_porta3000.png) 
