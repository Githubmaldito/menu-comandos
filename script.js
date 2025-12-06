document.addEventListener('DOMContentLoaded', function() {
            // Dados dos comandos por categoria
            const commandsData = {
                navigation: {
                    title: "Navegação e Visualização",
                    commands: [
                        {
                            name: "cd",
                            description: "Muda o diretório atual de trabalho. Exemplo: <code>cd documentos</code> entra na pasta 'documentos'."
                        },
                        {
                            name: "exit",
                            description: "Sai do programa CMD"
                        },
                        {
                            name: "tree",
                            description: "Exibe graficamente a estrutura de diretórios de uma unidade ou caminho. Exemplo: executar 'cd downloads' e depois executar 'tree' mostraria a estrutura do diretório 'downloads' "                        
                        },
                        {
                            name: "cls",
                            description: "Limpa a tela do CMD"
                        },
                        {
                            name: "dir",
                            description: "Exibe uma lista de arquivos e subdiretórios em um diretório."
                        }

                    ]
                },
                files: {
                    title: "Manipulação de Arquivos",
                    commands: [
                        {
                            name: "md, mkdir",
                            description: "Ambos criam novos diretórios. Exemplo: <code>mkdir projeto</code> cria uma pasta chamada 'projeto'."
                        },
                        {
                            name: "rd, rmdir",
                            description: "Ambos removem diretórios."
                        },
                        {
                            name: "del, erase",
                            description: "Ambos excluem um ou mais arquivos "
                        },
                        {
                            name: "cp",
                            description: "Copia arquivos ou diretórios. Exemplo: <code>cp arquivo.txt backup/</code> copia o arquivo para a pasta backup."
                        },
                        {
                            name: "move",
                            description: "Move arquivos e diretórios."
                        },
                        {
                            name: "ren, rename",
                            description: "Ambos renomeiam arquivos"
                        },

                    ]
                },
                git: {
                    title: "Controle de Versão",
                    commands: [
                        {
                            name: "git clone",
                            description: "Clona um repositório Git para o seu computador. Exemplo: <code>git clone https://github.com/usuario/projeto.git</code>."
                        },
                        {
                            name: "git commit",
                            description: "Registra as alterações no repositório local. Geralmente usado com <code>-m</code> para adicionar uma mensagem."
                        },
                        {
                            name: "git push",
                            description: "Envia os commits do repositório local para um repositório remoto. Exemplo: <code>git push origin main</code>."
                        },
                        {
                            name: "fetch",
                            description: "Baixa objetos e referências de outro repositório"
                        },
                        {
                            name: "pull",
                            description: "Busca e integra com outro repositório ou um branch local"
                        },

                    ]
                }
            };
            
            // Elementos DOM
            const menuItems = document.querySelectorAll('.menu-item');
            const submenuContainer = document.querySelector('.submenu');
            const submenuHeader = document.querySelector('.submenu-header');
            const submenuContent = document.getElementById('submenu-content');
            
            // Função para atualizar o submenu
            function updateSubmenu(category) {
                // Atualizar classe ativa nos itens do menu
                menuItems.forEach(item => {
                    if (item.getAttribute('data-category') === category) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
                
                // Atualizar cabeçalho do submenu
                submenuHeader.textContent = commandsData[category].title;
                
                // Limpar conteúdo atual
                submenuContent.innerHTML = '';
                
                // Adicionar novos itens
                commandsData[category].commands.forEach(command => {
                    const li = document.createElement('li');
                    li.className = 'submenu-item';
                    
                    li.innerHTML = `
                        <span class="command-name">${command.name}</span>
                        <span class="command-description">${command.description}</span>
                    `;
                    
                    submenuContent.appendChild(li);
                });
                
                // Animação de transição
                submenuContainer.classList.remove('active');
                setTimeout(() => {
                    submenuContainer.classList.add('active');
                }, 10);
            }
            
            // Adicionar eventos de clique aos itens do menu
            menuItems.forEach(item => {
                item.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    updateSubmenu(category);
                });
            });
            
            // Inicializar com a primeira categoria ativa
            updateSubmenu('navigation');
        });