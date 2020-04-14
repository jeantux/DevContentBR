const channels = [
        {
            name: 'Fabio Akita',
            desc: `Este é o canal "AKITANDO" onde eu, Fabio Akita, também conhecido como @AkitaOnRails vou falar dos assuntos que sempre gostei. Quem me acompanha no meu blog, e redes sociais como Facebook, Twitter e Instagram já tem uma idéia do que esperar daqui.
        
            Vou tentar publicar no mínimo um vídeo por semana enquanto tento gerenciar meu tempo entre minhas duas empresas, OmniTrade e Codeminer 42, e o evento que organizo anualmente, a THE CONF.
            
            Eu curto assuntos geek, otaku, novas tecnologias e quero trazer um pouco disso para cá.` ,
            urlYoutube: 'https://www.youtube.com/user/AkitaOnRails/featured', 
            usernameGit: 'akitaonrails',
            img: 'https://yt3.ggpht.com/a/AATXAJw-bX2VxsG-v9rnFdx-3T9YxbZqshX2QCWghw=s288-c-k-c0xffffffff-no-rj-mo'
        },
        {
            name: 'Jean Carlos', 
            desc: 'No meu canal falo sobre diversos conteudos, variando entre Linux, open source, programação ... ', 
            urlYoutube: 'https://www.youtube.com/channel/UCjSFU-9JUt2ATyjomcsRgSQ?view_as=subscriber', 
            usernameGit: "jeaanca",
            img: 'https://yt3.ggpht.com/a/AATXAJy3nHVh9vhVT0It_ohmkFEkn0gTfWGFMnALaw=s288-c-k-c0xffffffff-no-rj-mo'
        },
        {
            name: 'Eduardo Mendes',
            desc: `Um canal sobre Python e desenvolvimento de software de uma maneira geral.` ,
            urlYoutube: 'https://www.youtube.com/user/mendesesduardo/featured', 
            usernameGit: 'dunossauro',
            img: 'https://yt3.ggpht.com/a/AATXAJxZMUEkHWlKM94pafMq1HXus31_hfmUSI9PZQ=s288-c-k-c0xffffffff-no-rj-mo'
        },
        {
            name: 'Código Fonte TV',
            desc: `Este é o canal Código Fonte (que começou com um Blog) e que nós chamamos carinhosamente de CDFTV ou o canal dos CDFs no Youtube.
            Nossos CDFs são os nossos "CóDigo Fonters"!
            
            Desde de Janeiro de 2016 o canal publica vídeos semanalmente comigo (Gabriel Fróes) e minha esposa Vanessa Weber. 
            Somos um casal de programadores apaixonados por tecnologia desde 1996 e por aqui temos a missão de ajudar a todos que queiram trabalhar com TI. 
            Falamos sobre esse mundo maravilhoso da programação de uma forma diferente e divertida, além de contar nossas experiências na área.
            
            Contato exclusivo para negócios: contato@codigofonte.com.br
            
            Conheça também nosso canal secundário: Casal CDF onde vamos além da tecnologia, contando nossas histórias no mundo o empreendedorismo, finanças, relacionamentos e outros assuntos que nós também gostamos. https://codft.me/casalcdf
            
            Nós ❤️ receber presentes, cartas, brindes e mimos.
            Caixa Postal: 91735 - Cep: 25620-972
            Petrópolis / RJ` ,
            urlYoutube: 'https://www.youtube.com/channel/UCFuIUoyHB12qpYa8Jpxoxow', 
            usernameGit: 'gabrielfroes',
            img: 'https://yt3.ggpht.com/a/AATXAJxpQzXaz5gar8MXTTanUGvDI9UrI7xgLN_Elw=s288-c-k-c0xffffffff-no-rj-mo'
        },
        {
            name: 'Filipe Deschamps', 
            desc: `Vou deixar você apaixonado por programação! Vídeo toda segunda às 11h!

            Meu último emprego antes de decidir focar 100% no YouTube foi ser CTO do Pagar.me. Lá tive o prazer de ser responsável por um time com mais de 100 pessoas e aprendi MUITO sobre gestão (principalmente gestão de times grandes) e sobre como lidar com tecnologia em escala. Ambos conhecimentos que quero compartilhar nesse canal.
            
            ✅ CONTATO PARA PUBLICIDADE OU PARCERIAS
            [!!! Atenção: Para o ano de 2020 decidi focar o canal e todas as demais redes sociais em conteúdos não patrocinados !!!]
            ▸ contato@filipedeschamps.com.br
            
            ✅ CONTATO PARA DÚVIDAS GERAIS
            ▸ Utilizar comentário no YouTube, pois desta forma outras pessoas poderão se beneficiar de ler a pergunta e resposta, inclusive poderão participar adicionando novos pontos de vista ou novas dúvidas.`,
            urlYoutube: 'https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw',
            usernameGit: "filipedeschamps",
            img: 'https://yt3.ggpht.com/a/AATXAJyi6syFivU5JTxaAtUDUFD829HiQmcX2iv_5g=s288-c-k-c0xffffffff-no-rj-mo'
        },
        {
            name: 'UpInside', 
            desc: `Seja bem-vindo(a) ao canal da UpInside Treinamentos, eleita a melhor escola de desenvolvimento web, programação e marketing digital com reconhecimento em mais de 17 países pela Latin American Quality Institute por 5 anos consecutivos.

            Aqui você encontra nossos conteúdos gratuitos trazendo o que existe de mais moderno e preparando você para o mercado, seja para conquistar uma vaga, atuar com freelancer ou empreender sua agência web.
            
            A UpInside foi fundada por Robson V. Leite em janeiro de 2018 e é uma escola focada em formar profissionais web de alta performance.
            
            Fale com o SEO: https://www.instagram.com/robsonvleite`,
            urlYoutube: 'https://www.youtube.com/channel/UCw6vF0DoeshwUcmBnjUe2ZQ', 
            usernameGit: "UpInside",
            img: 'https://yt3.ggpht.com/a/AATXAJy-6ZGyqR1DR_z-5AMXmGjpGnzCnnN2uqJIew=s288-c-k-c0xffffffff-no-rj-mo'
        },
        {
            name: 'Alura',
            desc: `Quer se atualizar em tudo que acontece em tecnologia, design e negócios digitais? O Canal da Alura traz videos todas as semanas, com conteúdo que vai desde o Hipsters Ponto Tube até as primeiras aulas dos cursos online da Alura

            https://www.alura.com.br
            
            Ouça nosso podcast, o Hipsters Ponto Tech:
            http://hipsters.tech
            
            Temos também um podcast com a turma do JovemNerd, o NerdTech:
            https://www.alura.com.br/podcast-nerdtech`, 
            urlYoutube: 'https://www.youtube.com/user/aluracursosonline', 
            usernameGit: 'alura-cursos',
            img: 'https://yt3.ggpht.com/a/AATXAJy_dNwHLrsUNhhLgJqJw3zswJZf_lAbF8ObDQ=s288-c-k-c0xffffffff-no-rj-mo'
        },
        {
            name: 'Renato Mota',
            desc: 'Focado em Desenvolvimento Mobile, e show room de novas tecnologias, focado em Ui e Ux.', 
            urlYoutube: 'https://www.youtube.com/channel/UCd-vLa_qcKve3CsDFlYiygA', 
            usernameGit: 'RenatoLucasMota',
            img: 'https://yt3.ggpht.com/a/AATXAJzFEybi6BI9SCPIi-EUHPMu-xHfteGBCytIvw=s288-c-k-c0xffffffff-no-rj-mo'
        },
        {
            name: 'CollabCode',
            desc: `CollabCode é uma comunidade focada em compartilhar conhecimento! Os criadores são a Joviane Jardim (https://twitter.com/jovianejardim) e o Marco Bruno (https://twitter.com/marcobrunobr) e os moderadores dessa comunidade são a Flávia Guterres (https://twitter.com/flaviaguterres) e o Felipe Machado (https://twitter.com/FeelipePM).

            Se quiser saber mais detalhes sobre o curso "Do Front ao End" do Marco Bruno, é só entrar em https://dofrontaoend.collabcode.training/investimento que lá tem a ementa completa.`, 
            urlYoutube: 'https://www.youtube.com/channel/UCVheRLgrk7bOAByaQ0IVolg', 
            usernameGit: 'CollabCodeTech',
            img: 'https://yt3.ggpht.com/a/AATXAJx1r1eq8s2lyCqZtUXKL3eECWUflE462sG7mw=s288-c-k-c0xffffffff-no-rj-mo'
        },
        {
            name: 'CodeShow',
            desc: `Esté é o canal "CodeShow" onde eu, Bruno Rocha, Engenheiro de Software na Red Hat, compartilho experiências com foco no código e pretendo compartilhar este contéudo em texto no codeshow.com.br, em áudio no anchor.fm/codeshow e também aqui no Youtube em formato de videos e lives.

            Pretendo publicar pelo menos um conteúdo por semana, e este conteúdo poderá aparecer em uma dessa 3 mídias.
            
            Para ficar sabendo acompanhe nas redes sociais abaixo.. e por favor inscreva-se aqui no canal!
            `, 
            urlYoutube: 'https://www.youtube.com/channel/UCMre98RDRijOX_fvG1gnsYg', 
            usernameGit: 'codeshow',
            img: 'https://yt3.ggpht.com/a/AATXAJx6sqMsJ96lf-XonKzn-z-mskK2BZHg7zYQAg=s176-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'Rocketseat',
            desc: `Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀

            http://comunidade.rocketseat.com.br`, 
            urlYoutube: 'https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg', 
            usernameGit: 'Rocketseat',
            img: 'https://yt3.ggpht.com/a/AATXAJyV0bh7SfKuhEr2a4i8TpgxHc1hkuayqFkDMQ=s288-c-k-c0xffffffff-no-rj-mo'
        },
        {
            name: 'DevPleno',
            desc: `Dicas, sacadas e tutoriais para você tornar-se um profissional completo ou um devPleno.

            Tulio Faria é mestre em Sistemas de Informação pela USP e criador do DevPleno. Iniciou sua carreira como professor ainda jovem, com apenas 18 anos em um curso técnico; depois disso, foram 11 anos em sala de aula formando desenvolvedores fullstack no sul de Minas Gerais. Hoje, é empresário e também atua em uma empresa de grande porte do exterior. 
            
            Em 2017, resolveu se dedicar ainda mais ao projeto que sonhou por anos, o DevPleno, cujo objetivo é auxiliar profissionais de tecnologia a alcançarem sucesso em suas carreiras por meio de conteúdo de qualidade e de fácil clareza.
            
            contato@devpleno.com`, 
            urlYoutube: 'https://www.youtube.com/channel/UC07JWf9A0B1scApbS1Te7Ww', 
            usernameGit: 'devpleno',
            img: 'https://yt3.ggpht.com/a/AATXAJz53U6c0xWggAYGSGiNmINfYuwGmcdnd_Qkkw=s176-c-k-c0x00ffffff-no-rj'
        }
        
    ]

    module.exports = channels