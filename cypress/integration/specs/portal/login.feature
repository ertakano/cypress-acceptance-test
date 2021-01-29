#language: pt
Funcionalidade: Login na página do portal HG
   
  Como um usuário cadastrado no portal HG
  Quero acessar minha conta
  Para poder gerenciar meus produtos

  @brasil
  Cenário: Realizar login no portal da HG com sucesso
    Dado que o usuário tenha uma conta válida na HG
    Quando submeter seus dados de email e senha pelo portal
    Então deve acessar o portal com sucesso  