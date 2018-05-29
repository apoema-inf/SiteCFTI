export interface Curso {
    nome: string,
    categoria: string,
    subcategoria: string,
    resumo: string,
    publicoAlvo: string,
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
        subcategoria: 'Gestão e Processos',
        resumo: 'Preparar o aluno para a condução de trabalhos acadêmico-científicos, no nível de exigência adequado ao curso de graduação ou pós-graduação lato sensu, na área da computação, de modo a facilitar o desenvolvimento de planos e projetos de pesquisa, a elaboração da apresentação do trabalho e a participação na defesa (ou na entrega) final.',
        publicoAlvo: 'Alunos de TCC (PFC I e II) e de Iniciação Científica.<br><br> Alunos de pós-graduação lato sensu (especialização).',
        competenciasDesenvolver: 'Habilitar-se para atuar em um trabalho de pesquisa.<br><br>'
            + ' Conhecer os Métodos e as tipificações de pesquisa.<br><br>'
            + ' Conhecer a Metodologia de Pesquisa para Ciência da Computação.<br><br>'
            + ' Executar um projeto de pesquisa.<br><br>'
            + ' Habilitar-se para apresentar e defender um trabalho final de pesquisa.',
        duracao: '30 horas',
        local: 'Moodle IPê da UFG.',
        periodoRealizacao: 'Período de realização: 06/05 a 02/06/2018',
        periodoInscricao: 'Período de inscrição: 28/04 a 04/05/2017',
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
        '&emsp;Preparação para defesa<br>'
        
    },
]