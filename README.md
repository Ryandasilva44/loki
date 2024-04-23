# LOKI

#para instalar pelo terminal externo uma versao mas nova no node.js

passo 1: "nvm ls-remote"
passo 2: "nvm install 18.14.(a versao que uso para poder trabalhar com o angular17)

#para instalar o angular na sua maquina 

passo 1: "npm install -g @angular/cli@17" (essa é a versao que eu trabalho)"
passo 2: "ng new trabalho"(para fazer o nome do seu projeto esse nome é ficticio)"
passo 3: "cd trabalho"

#esse paaso se quiserem abrir p vscode pelo terminal externo

passo 1: "cd trabalho"(nome do preojeto)"
passo 2: "code ."(abri-lá automaticamente o vscode sem precisar fazer uma pasta local)"


#abrir seu projeto angular no browser

passo 1: "npm start"(e ai vai demorar um pouco dependento da sua internet)
passo 2: "localhost:4200" (para abrir no seu browser)

#quando clicar e fica limpo sem imagem

assim que vc clicar e abrir no seu browser e nao ver nada vou explicar

passo 1: "va ate o app.routes.ts"
passo 2: "export const routes: Routes = [{

    path: "",
    component: BodyComponent
}];
passo 3: "desse jeito vai abrir uma rota onde seu projeto ficara visivel,se nao colocar nada
nessa routes nao aparece-rá nada. Esse component "Bodycomponent" é onde irei colocar todos 
os meus components"

#como fazer um component

passo 1: "ng g c components/body"(exemplo de como fazer um component)

#como colocar uma imagem no seu projeto é diferente 

passo 1: "colocasse no imports do component que irar colocar outros components"
passo 2: " imports: [NgOptimizedImage],"
passo 3: "para colocar no seu projeto nao usa o "src" usasse "Ngsrc" se nao aparecer é so colocar 
altura e largura"