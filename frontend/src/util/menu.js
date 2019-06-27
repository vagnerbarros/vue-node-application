const Menu =  [
  { cabecalho: 'Simple', nivel: 1 },
  {
    titulo: 'Dashboard',
    grupo: 'Início',
    icone: 'dashboard',
    nome: 'Dashboard',
    path: '/home',
    nivel: 1
  },
  { cabecalho: 'Gerencial', nivel: 1 },
  {
    titulo: 'Cadastros',
    grupo: 'Cadastros',
    nome: 'Gerencial',
    icone: 'store',
    items: [
      { nome: 'Empresa', titulo: 'Empresas', path: '/empresas', icone: 'domain', grupo: 'Cadastros', nivel: 1 },
      { nome: 'Clientes/Fornecedores', titulo: 'Clientes/Fornecedores', path: '/participantes', icone: 'people_outline', grupo: 'Cadastros', nivel: 1 },
      { nome: 'Tabela', titulo: 'Tabelas', icone: 'table_chart', grupo: 'Cadastros', items: [
          { nome: 'Conta Corrente', titulo: 'Conta Corrente', path: '/contas', icone: 'monetization_on', grupo: 'Tabelas', nivel: 1 },
          { nome: 'Banco', titulo: 'Bancos', path: '/bancos', icone: 'account_balance', grupo: 'Tabelas', nivel: 1 }
      ] }
    ],
    nivel: 1
  }
];

export default Menu;
