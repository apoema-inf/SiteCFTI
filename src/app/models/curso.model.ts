export interface Curso {
    nome: string,
    categoria: string,
    subcategoria: string,
    resumo: string,
    publicoAlvo: string,
    preRequisitos: string, 
    competenciasDesenvolver: string,
    duracao: string,
    local: string,
    periodoRealizacao: string,
    periodoInscricao: string,
    modalidade: string,
    conteudoProgramatico: string
}

export const CURSOS: Curso[] = [
    {
        nome: 'METODOLOGIA PARA PROJETOS DE PESQUISA',
        categoria: 'Fundamentos',
        subcategoria: 'Outros',
        resumo: 'Preparar o aluno para a condução de trabalhos acadêmico-científicos, no nível de exigência adequado ao curso de graduação ou pós-graduação lato sensu, na área da computação, de modo a facilitar o desenvolvimento de planos e projetos de pesquisa, a elaboração da apresentação do trabalho e a participação na defesa (ou na entrega) final.',
        publicoAlvo: 'Alunos de TCC (PFC I e II) e de Iniciação Científica.<br><br> Alunos de pós-graduação lato sensu (especialização).',
        preRequisitos: 'Necessário ser aluno de graduação em qualquer curso superior',
        competenciasDesenvolver: 'Habilitar-se para atuar em um trabalho de pesquisa.<br><br>'
            + ' Conhecer os Métodos e as tipificações de pesquisa.<br><br>'
            + ' Conhecer a Metodologia de Pesquisa para Ciência da Computação.<br><br>'
            + ' Executar um projeto de pesquisa.<br><br>'
            + ' Habilitar-se para apresentar e defender um trabalho final de pesquisa.',
        duracao: '30 horas',
        local: 'Moodle IPê da UFG.',
        periodoRealizacao: 'Período de realização: 07/03 a 05/04/2019',
        periodoInscricao: 'Período de inscrição: 27/02 a 06/03/2019',
        modalidade: 'EaD',
        conteudoProgramatico: '<b>Módulo 1 – Preparação de um trabalho de pesquisa</b>' +
            '<br>&emsp;Estilo e postura do pesquisador<br>' +
            '&emsp;Análise crítica estrutural e conjuntural<br>' +
            '&emsp;Problematização e estruturação de problemas<br>' +
            '&emsp;Armadilhas e precauções para o desenvolvimento da pesquisa<br><hr>' +
            '<b>Módulo 2 – Métodos de pesquisa</b><br>' +
            '&emsp;Quanto à natureza<br>' +
            '&emsp;Quanto aos objetivos<br>' +
            '&emsp;Quanto aos procedimentos técnicos<br>' +
            '&emsp;Ciência e tecnologia<br>' +
            '&emsp;Abordagens observacionais e intervencionistas<br><hr>' +
            '<b>Módulo 3 – Metodologia de Pesquisa para Ciência da Computação</b><br>' +
            '&emsp;Estilos de pesquisa em computação<br>' +
            '&emsp;Métodos específicos para pesquisas nas áreas da computação<br>' +
            '&emsp;Uso de probabilidade e estatísticas em pesquisa<br>' +
            '&emsp;Abordagens de pesquisa de campo e pesquisa-ação<br><hr>' +
            '<b>Módulo 4 – Execução do projeto de pesquisa</b><br>' +
            '&emsp;Plano de pesquisa<br>' +
            '&emsp;Gerenciamento do projeto de pesquisa<br>' +
            '&emsp;Especificação e aplicação dos instrumentos de pesquisa<br>' +
            '&emsp;Redação científica<br>' +
            '&emsp;Padrões de redação científica<br>' +
            '&emsp;Do projeto à redação final<br><hr>' +
            '<b>Módulo 5 – Apresentação e defesa do trabalho de pesquisa</b><br>' +
            '&emsp;Organização da apresentação<br>' +
            '&emsp;Preparação para defesa<br>' +
            '<br><br><a class="waves-effect waves-light btn" href="https://goo.gl/forms/zYe3k6jR7uiHMJsE2" target="_blank">Inscreva-se</a>'
    },
    {
        nome: 'Matrizes, Algoritmos e Otimização Linear: Uma Abordagem Remota e Interativa',
        categoria: 'Fundamentos',
        subcategoria: 'Tecnologias inteligentes e Ciência de dados',
        resumo: 'Contribuir	para a capacitação dos estudantes frente à disciplina como Fundamentos Matemáticos	para Computação, Álgebra Linear, Algoritmos	e Programação, Pesquisa	Operacional',
        publicoAlvo: 'Estudantes de exatas, especialmente os de baixo rendimento.',
        preRequisitos: 'Necessário ser aluno de Ensino médio ou de graduação em qualquer curso superior, principalmente da área de exatas',
        competenciasDesenvolver: 'Realizar operações	com	matrizes;<br><br>'
            + ' Resolver	sistemas	de	equações	lineares;<br><br>'
            + ' Desenvolver	algoritmos	para	operações	básicas	com	matrizes;<br><br>'
            + ' Formular	modelos	matemáticos	para	problemas	de	otimização;<br><br>'
            + ' Aplicar	técnicas	básicas	na	resolução	de	problemas	de	Otimização.',
        duracao: '60 horas',
        local: 'A+ Platform',
        periodoRealizacao: 'Período de realização: 29/06 a 04/09/2020',
        periodoInscricao: 'Período de inscrição: dd/mm a dd/mm/aaaa',
        modalidade: 'EaD',
        conteudoProgramatico: '<b>Módulo 1 – Matrizes</b>' +
            '<br>&emsp;Introdução	e	conceitos	básicos.<br>' +
            '&emsp;Operações	básicas	com	matrizes.<br>' +
            '&emsp;Multiplicação	de	matrizes.<br>' +
            '&emsp;Resolução	de	sistemas	lineares	por	Gauss-Jordan.<br>' +
            '&emsp;Determinante	por	triangularização.<br>' +
            '&emsp;Matriz	inversa	por	Gauss-Jordan.<br><hr>' +
            '<b>Módulo 2 – Algoritmos</b><br>' +
            '&emsp;Variáveis simples e compostas<br>' +
            '&emsp;Atribuição e Manipulação de valores<br>' +
            '&emsp;Expressões:	aritméticas,	lógicas	e	relacionais.<br>' +
            '&emsp;Comandos	Condicionais.<br>' +
            '&emsp;Estruturas	de	repetição.<br>' +
            '&emsp;Vetores	e	matrizes.<br><hr>' +
            '<b>Módulo 3 – Otimização	Linear</b><br>' +
            '&emsp;Formulação	de	modelos	matemáticos	para	problemas	de	Otimização.<br>' +
            '&emsp;Resolução	gráfica	de	problemas	de	PL.<br>' +
            '&emsp;Forma	padrão.<br>' +
            '&emsp;Fundamentos	da	PL	e	um	algoritmo	do	tipo	força	bruta.<br>' +
            '&emsp;Custos	reduzidos	e	condições	de	otimalidade.<br>' +
            '&emsp;Conjuntos	convexos,	pontos	extremos	e	alguns	resultados.<br>' +
            '&emsp;Algoritmo	Simplex	primal	fase	2.<br>' +
            '&emsp;Método	das	duas	fases	do	Simplex.<br>' 
            
    },
    {
        nome: 'Introdução à Inteligência Artificial!',
        categoria: 'Fundamentos',
        subcategoria: 'Tecnologias inteligentes e Ciência de dados',
        resumo: 'Contribuir	para a capacitação dos estudantes frente à disciplina como Fundamentos Matemáticos	para Computação, Álgebra Linear, Algoritmos	e Programação, Pesquisa	Operacional',
        publicoAlvo: 'Alunos de TI da UFG e da UNB',
        preRequisitos: 'Necessário ser aluno de graduação na UFG ou na UNB de até 6º período na área de TI',
        competenciasDesenvolver: 'Ferramentas úteis para projetos de IA;<br><br>'
        + ' Representação e aprendizagem de Redes Neurais (RN);<br><br>'
        + 'RN’s Convolucionais; e RN’s Recorrentes.',
        duracao: '120 horas',
        local: 'Plataforma Turing',
        periodoRealizacao: 'Período de realização: 14/07 a 15/09/2020',
        periodoInscricao: 'Período de inscrição: 22/06 a 28/06/2020',
        modalidade: 'EaD',
        conteudoProgramatico: '- Inicialização e utilização de ferramentas úteis (Anaconda, Jupyter Notebook, Python, PyTorch, Colab, Kaggle, Pandas, NumPy e Matplotlib);<br>' 
        + '- Regressão linear com uma ou múltiplas variáveis;<br>' 
        + '- Regularização de termos;<br> '
        + '- Regressão logística;<br>'
        + '- Stochastic Gradient Descent;<br>' 
        + '- Representação e aprendizagem de Redes Neurais;<br> '
        + '- Redes Neurais Convolucionais (classificação de imagens, classificação multi-rótulos, segmentação);<br>' 
        + '- Limpeza e produção de datasets;<br> '
        + ' - Redes Neurais Recorrentes (Processamento de Linguagem Natural); <br>'
        + '- Filtragem Colaborativa. <br>'
        + '<br><br><a class="waves-effect waves-light btn" href="http://brasilmaisia.com.br/" target="_blank">Inscreva-se</a>'
            
    },
]