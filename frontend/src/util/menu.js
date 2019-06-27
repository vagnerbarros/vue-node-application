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
  { cabecalho: 'Group Menu', nivel: 1 },
  {
    titulo: 'Manage',
    grupo: 'Manages',
    nome: 'Manage',
    icone: 'store',
    items: [
      { nome: 'Clients', titulo: 'Clients', path: '/clients', icone: 'people_outline', grupo: 'Manage', nivel: 1 },
    ],
    nivel: 1
  }
];

export default Menu;
