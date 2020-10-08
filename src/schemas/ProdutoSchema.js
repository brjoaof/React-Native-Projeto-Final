export default ProdutoSchema = {
  name: 'Produto',
  primaryKey: 'id',
  properties: {
    id: {type: 'int', indexed: true},
    nome: 'string',
    descricao: 'string',
    qtdEstoque: 'int',
    valor: 'double',
    idCategoria: 'int',
    nomeCategoria: 'string',
    idFuncionario: 'int',
    nomeFuncionario: 'string',
    dataFabricacao: 'string',
    fotoLink: 'string',
  },
};
