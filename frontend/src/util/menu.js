const Menu =  [
  { cabecalho: 'Início', nivel: 1 },
  {
    titulo: 'Dashboard',
    grupo: 'Início',
    icone: 'dashboard',
    nome: 'Dashboard',
    path: '/home',
    nivel: 1
  },
  { cabecalho: 'Gerenciar', nivel: 3 },
  {
    titulo: 'Empresas',
    grupo: 'Cadastros',
    icone: 'domain',
    nome: 'Empresa',
    path: '/empresasAdmin',
    nivel: 3
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
      { nome: 'Produto', titulo: 'Produtos', path: '/produtos', icone: 'kitchen', grupo: 'Cadastros', nivel: 1 },
      { nome: 'Transportador', titulo: 'Transportadores', path: '/transportadores', icone: 'event_seat', grupo: 'Cadastros', nivel: 1 },
      { nome: 'Grupo', titulo: 'Grupos', path: '/grupos', icone: 'group_work', grupo: 'Cadastros', nivel: 1 },
      { nome: 'Vendedor', titulo: 'Vendedores', path: '/vendedores', icone: 'sentiment_very_satisfied', grupo: 'Cadastros', nivel: 1 },
      { nome: 'Fabricante', titulo: 'Fabricantes', path: '/fabricantes', icone: 'gavel', grupo: 'Cadastros', nivel: 1 },
      { nome: 'Tabela', titulo: 'Tabelas', icone: 'table_chart', grupo: 'Cadastros', items: [
          { nome: 'Conta Corrente', titulo: 'Conta Corrente', path: '/contas', icone: 'monetization_on', grupo: 'Tabelas', nivel: 1 },
          { nome: 'Banco', titulo: 'Bancos', path: '/bancos', icone: 'account_balance', grupo: 'Tabelas', nivel: 1 },
          { nome: 'PIS', titulo: 'PIS', path: '/pis', icone: 'money_off', grupo: 'Tabelas', nivel: 1 },
          { nome: 'COFINS', titulo: 'COFINS', path: '/cofins', icone: 'money_off', grupo: 'Tabelas', nivel: 1 },
          { nome: 'Cidade/Estado', titulo: 'Cidades/Estados', path: '/cidadesEstados', icone: 'location_city', grupo: 'Tabelas', nivel: 1 },
          { nome: 'Cor', titulo: 'Cores', path: '/cores', icone: 'format_color_fill', grupo: 'Tabelas', nivel: 1 },
          { nome: 'Tamanho', titulo: 'Tamanhos', path: '/tamanhos', icone: 'format_size', grupo: 'Tabelas', nivel: 1 },
          { nome: 'MVA', titulo: 'MVAs', path: '/mvas', icone: 'broken_image', grupo: 'Tabelas', nivel: 1 },
          { nome: 'Centro de Custo', titulo: 'Centros de Custos', path: '/centrosCustos', icone: 'list_alt', grupo: 'Tabelas', nivel: 1 },
          { nome: 'CFOP Compra x Entrada', titulo: 'Mapeamento CFOPs', path: '/mapeamentos', icone: 'zoom_out_map', grupo: 'Tabelas', nivel: 1 },
          { nome: 'Plano de Conta', titulo: 'Planos de Conta', path: '/planosConta', icone: 'notes', grupo: 'Tabelas', nivel: 1 },
          { nome: 'Local de Estoque', titulo: 'Locais de Estoque', path: '/locaisEstoque', icone: 'place', grupo: 'Tabelas', nivel: 1 },
      ] }
    ],
    nivel: 1
  },
  {
    titulo: 'Movimentações',
    grupo: 'Movimentações',
    nome: 'Movimentações',
    icone: 'import_export',
    items: [
      { nome: 'Contas a Receber', titulo: 'Contas a Receber', path: '/contasAReceber', icone: 'vertical_align_bottom', grupo: 'Movimentações', nivel: 1 },
      { nome: 'Contas a Pagar', titulo: 'Contas a Pagar', path: '/contasAPagar', icone: 'vertical_align_top', grupo: 'Movimentações', nivel: 1 },
      { nome: 'Movimentos de Caixa', titulo: 'Movimento de Caixa', path: '/movimentosCaixa', icone: 'swap_horiz', grupo: 'Movimentações', nivel: 1 },
      { nome: 'Movimentos de Estoque', titulo: 'Movimento de Estoque', path: '/movimentosEstoque', icone: 'rv_hookup', grupo: 'Movimentações', nivel: 1 },
      { nome: 'Cheques', titulo: 'Cheques', path: '/cheques', icone: 'local_atm', grupo: 'Movimentações', nivel: 1 },
      { nome: 'Vendas', titulo: 'Vendas', path: '/vendas', icone: 'shopping_cart', grupo: 'Movimentações', nivel: 1 },
      { nome: 'Compras', titulo: 'Compras', path: '/compras', icone: 'business_center', grupo: 'Movimentações', nivel: 1 },
    ],
    nivel: 1
  },
  { cabecalho: 'Fiscal', nivel: 1 },
  {
    titulo: 'Minhas Notas',
    grupo: 'Fiscal',
    nome: 'Nota',
    icone: 'chrome_reader_mode',
    path: '/notas',
    nivel: 1
  },
  {
    grupo: 'Fiscal',
    nome: 'Nota - Nova',
    path: '/notas/nova',
    nivel: 1,
    hidden: true
  },
  {
    grupo: 'Fiscal',
    nome: 'Nota - Edição',
    path: '/notas/editar',
    nivel: 1,
    hidden: true
  },
  {
    titulo: 'Notas Destinadas',
    grupo: 'Fiscal',
    nome: 'NotasDestinadas',
    icone: 'swap_horiz',
    path: '/destinadas',
    nivel: 1
  },
  {
    titulo: 'Manif. de Documentos',
    grupo: 'Fiscal',
    nome: 'Manifestos',
    icone: 'airport_shuttler',
    path: '/manifestos',
    nivel: 1
  },
  {
    grupo: 'Fiscal',
    nome: 'Manifesto - Novo',
    path: '/manifestos/novo',
    nivel: 1,
    hidden: true
  },
  {
    grupo: 'Fiscal',
    nome: 'Manifesto - Editar',
    path: '/manifestos/editar',
    nivel: 1,
    hidden: true
  },
  {
    titulo: 'SEFAZ',
    grupo: 'Fiscal',
    nome: 'Sefaz',
    icone: 'language',
    items: [
      {nome: 'Inutilizacao', titulo: 'Inutilizar', icone: 'cancel_presentation', acao: 'inutilizar'},
    ],
    nivel: 1
  },
  {
    titulo: 'Arquivos Contabilidade',
    grupo: 'Fiscal',
    nome: 'Arquivos',
    icone: 'file_copy',
    path: '/arquivos',
    nivel: 2
  },
  { cabecalho: 'Segurança', nivel: 2 },
  {
    titulo: 'Dispositivos',
    grupo: 'Segurança',
    nome: 'Dispositivo',
    icone: 'devices',
    path: '/dispositivos',
    nivel: 2
  },
  {
    grupo: 'Segurança',
    nome: 'Dispositivo - Novo',
    path: '/dispositivos/novo',
    nivel: 1,
    hidden: true
  },
  {
    grupo: 'Segurança',
    nome: 'Dispositivo - Edição',
    path: '/dispositivos/editar',
    nivel: 1,
    hidden: true
  },
  {
    titulo: 'Usuários',
    grupo: 'Segurança',
    nome: 'Usuário',
    icone: 'person_add',
    path: '/usuarios',
    nivel: 2
  },
  {
    grupo: 'Segurança',
    nome: 'Usuário - Novo',
    path: '/usuarios/novo',
    nivel: 1,
    hidden: true
  },
  {
    grupo: 'Segurança',
    nome: 'Usuário - Edição',
    path: '/usuarios/editar',
    nivel: 1,
    hidden: true
  },
  { cabecalho: 'Avançado', nivel: 2 },
  {
    titulo: 'Configurações',
    grupo: 'Avançado',
    nome: 'Configuracao',
    icone: 'settings',
    path: '/configuracoes',
    nivel: 2
  },
  {
    titulo: 'Importacão',
    grupo: 'Avançado',
    nome: 'Importação',
    icone: 'import_export',
    path: '/importacoes',
    nivel: 2
  }
  
];

export default Menu;
