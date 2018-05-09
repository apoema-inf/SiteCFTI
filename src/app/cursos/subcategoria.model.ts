export interface Subcategoria {
    nome : string,
    icon : string
}

export const SUBCATEGORIAS: Subcategoria[] = [
    {
        nome: 'Gestão e Processos',
        icon : 'business_center'
    },
    {
        nome: 'Desenvolvimento de sistemas e Software',
        icon : 'code'
    },
    {
        nome: 'Infraestrutura e Suporte',
        icon : 'language'
    },
    {
        nome: 'Tecnologias inteligentes e Ciência de dados',
        icon : 'data_usage'
    },
    {
        nome: 'Segurança da informação e Riscos',
        icon : 'security'
    },
    {
        nome: 'Outros',
        icon : 'dehaze'
    },
]