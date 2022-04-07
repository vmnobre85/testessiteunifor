Feature: Unifor Online

    Scenario Outline: Realizando testes de login
        Given Que acesso a página do Unifor Online
        When Preencho o usuário "<user>" e o password "<password>"
        Then Verifico se o elemento "<element>" contém a o valor "<message>"

        Examples:
            | user  | password | element           | message                     |
            | 10864 | 12345678 | #matriculaUsuario | 10864                       |
            | 1086  | 12345678 | .erro-login > p   | Usuario não cadastrado!     |
            | 1     | 12345678 | .erro-login > p   | Usuario não cadastrado!     |
            | 10&@# | 12345678 | .erro-login > p   | Usuario não cadastrado!     |
            | 10864 | 1234567  | .erro-login > p   | Matrícula ou senha inválida |
            | teste | 12345678 | .erro-login > p   | Matrícula ou senha inválida |
            | 10864 | abcdefgh | .erro-login > p   | Matrícula ou senha inválida |
            | 99999 | abcdefgh | .erro-login > p   | Matrícula ou senha inválida |
            | %     | 12345678 | .erro-login > p   | Matrícula ou senha inválida |
            | 10864 | %$#&@    | .erro-login > p   | Matrícula ou senha inválida |
