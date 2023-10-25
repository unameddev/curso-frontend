# Curso Front-end
### EBAC

# GIT
## Conceitos de versionamento
    - Histórico
    - Controle de versão
    - Quem alterou
    - O quê alterou
    - Quando alterou
    - Todos os arquivos
    - Evolução contínua

## Instalação do Git
    Windows: https://git-scm.com/
    Linux (apt-get): sudo apt-get install git
    Mac (brew): brew install git

## Criar conta no Github

## Clonar projeto
git clone https://github.com/unameddev/curso-frontend.git

## Commits
    Informação de alteração
    - Após testado todo seu código
    - git add *
    - git commit -m "descrição do commit"
    - git push (enviar alterações para o repositório)
    - git pull (puxar / trazer alterações do repositório do Github para a máquina)
    - git fetch --all (verifica se teve alguma alteração no repositório)


## Gitflow
Fluxo do Git

### Branchs
São ramificações / versões paralelas
    
    - main / master (vai para produção, quando o projeto é publicado)
    - develop       (utilizar apenas para desenvolvimento e testes)
    - DOD (Definitinion of Done): critérios de aceite
    - versionamento 1.1.10 (1º digito - apenas para quando a versão estiver totalmente consolidada, 2º digito - quando grandes alterações forem feitas, 3º digito - quando pequenas alterações e/ou correções de bugs forem feitos)

    - git checkout -b dev (cria uma branch)
    - git checkout master (muda de branch)    

    - nunca commitar com nenhum bug, somente quando tiver certeza que todo o código está perfeito

    - git push --set-upstream origin "dev" (comando para criar a branch no repositório)

### Merge
Mescla de branchs
    - git merge "main" (entre aspas é a branch que sera mesclada)

