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
                            name: "ls",
                            description: "Lista os arquivos e diretórios no diretório atual. Use <code>ls -la</code> para ver todos os arquivos incluindo ocultos."
                        },
                        {
                            name: "clear",
                            description: "Limpa a tela do terminal, removendo todo o texto anterior e deixando apenas o prompt de comando."
                        }
                    ]
                },
                files: {
                    title: "Manipulação de Arquivos",
                    commands: [
                        {
                            name: "mkdir",
                            description: "Cria um novo diretório. Exemplo: <code>mkdir projeto</code> cria uma pasta chamada 'projeto'."
                        },
                        {
                            name: "rm",
                            description: "Remove arquivos ou diretórios. Use com cuidado! <code>rm -r pasta</code> remove uma pasta e todo seu conteúdo."
                        },
                        {
                            name: "cp",
                            description: "Copia arquivos ou diretórios. Exemplo: <code>cp arquivo.txt backup/</code> copia o arquivo para a pasta backup."
                        },
                        {
                            name: "mv",
                            description: "Move ou renomeia arquivos e diretórios. Exemplo: <code>mv antigo.txt novo.txt</code> renomeia o arquivo."
                        }
                    ]
                },
                git: {
                    title: "Controle de Versão (Git)",
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
                        }
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