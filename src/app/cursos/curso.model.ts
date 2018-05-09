export interface Curso {
    nome : string,
    categoria: string,
    subcategoria: string,
    resumo : string,
    publicoAlvo : string,
    competenciasDesenvolver : string,
    duracao : string,
    local : string,
    periodoRealizacao : string,
    periodoInscricao : string
}

export const CURSOS: Curso[] = [
    {
        nome: 'METODOLOGIA PARA PROJETOS DE PESQUISA',
        categoria: 'Fundamentos',
        subcategoria: 'Gestão e Processos',
        resumo: 'Preparar o aluno para a condução de trabalhos acadêmico-científicos, no nível de exigência adequado ao curso de graduação ou pós-graduação lato sensu, na área da computação, de modo a facilitar o desenvolvimento de planos e projetos de pesquisa, a elaboração da apresentação do trabalho e a participação na defesa (ou na entrega) final.',
        publicoAlvo : 'Alunos de TCC (PFC I e II) e de Iniciação Científica.Alunos de pós-graduação lato sensu (especialização).',
        competenciasDesenvolver : 'Habilitar-se para atuar em um trabalho de pesquisa.'
         + 'Conhecer os Métodos e as tipificações de pesquisa.'
         + 'Conhecer a Metodologia de Pesquisa para Ciência da Computação.'
         + 'Executar um projeto de pesquisa.'
         + 'Habilitar-se para apresentar e defender um trabalho final de pesquisa.',
        duracao : '30 horas',
        local : 'Moodle IPê da UFG.',
        periodoRealizacao : 'Período de realização: 06/05 a 02/06/2018',
        periodoInscricao : 'Período de inscrição: 28/04 a 04/05/2017'
    },
]