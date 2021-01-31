#language: pt

Funcionalidade: Criar conta
   
  Como um cliente
  Quero criar uma conta
  Para poder realizar compras
 
  @acessar_conta
  Cenário: Acessar formulário para abertura de conta
    Dado que o usuário esteja na tela de login
    Quando criar sua conta com um email válido
    Então deve acessar o formulário para criação da conta

  @criar_conta @ignore
  Cenário: Preencher formulário para abertura de conta
    Dado que o usuário esteja na tela de criação de conta
    E informe todos os dados solicitados
    Quando registrar as informações
    Então deve ter criado a conta com sucesso