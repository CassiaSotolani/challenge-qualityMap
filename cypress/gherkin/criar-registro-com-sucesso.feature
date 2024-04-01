Feature: Validar criação de registro no site nopCommerce

Scenario: CT001 - Validar acesso a página de registro
  Given que estou na página inicial do "nopCommerce" - https://demo.nopcommerce.com
  When clicar no link "Register" no menu do header
  Then serei redirecionado para página Register
Examples:

Scenario Outline: CT002 - Criar registro com sucesso
  Given que estou na página "Register" do "nopCommerce" - https://demo.nopcommerce.com/register
  When clicar no campo First name e informar o nome: <firstName>
  And clicar no campo Last name e informar o sobrenome: <lastName>
  And clicar no campo Email e informar o email: <email>
  And clicar no campo Password e informar a senha: <password>
  And clicar no campo Confirm password e informar novamente a senha: <password>
  And clicar no botão "Register"
  Then será apresentado a mensagem: "Your registration completed"
  And o botão "CONTINUE"
Examples:
  | firstName | lastName       | email                   | password |
  | Teste1    | Sotolani Matos | testecassia1@teste.com  | teste123 |
  | Teste2    | Sotolani Matos | testecassia2@teste.com  | teste123 |