export default {
  translations: {
    menu: {
      home: "Início",
      "examples-gallery": "Galeria de exemplos",
      "store-products": "Produtos da minha loja",
    },
    "base-layout": {
      help: "Ajuda para desenvolvedores",
      back: "Voltar",
      "aria-label": {
        menu: "Menu principal",
      },
    },
    home: {
      "first-card": {
        title: "Parabéns por criar seu aplicativo!",
        description:
          "Este aplicativo de exemplo inclui nosso <0>Design System Nimbus</0> e a integração com a <1>API da Tiendanube/Nuvemshop</1> para facilitar o desenvolvimento de novos aplicativos para nosso ecossistema.",
        link: {
          text: "Conheça mais sobre como criar seu aplicativo",
          url: "https://dev.nuvemshop.com.br/docs/applications/overview",
        },
      },
      "second-card": {
        title: "Contador de produtos da Loja",
        description:
          "Os produtos de exemplo são criados com o nome e preço aleatórios, como exemplo. Podendo modificá-los e eliminá-los há qualquer momento.",
        "total-product": "Total de produtos",
        "create-products": "Criar produto",
      },
    },
    tutorial: {
      title: "Finalize o processo de autenticação",
      first:
        "Acesse <0>Dados básicos</0> em detalhes do aplicativo, no portal de parceiros. No campo URL de redirecionamento, copie e cole o endereço",
      second:
        "No campo URL de redirecionamento, copie e cole o endereço <0>http://{{appUrl}}</0>",
      third:
        "Copie este final da URL <0>/admin/apps/{{clientId}}/authorize</0> e cole no final da URL da loja que você vai instalar o aplicativo",
      fourth:
        "Clique no botão <0>Aceitar e começar a usar</0> para instalar o aplicativo",
      fifth:
        "Após o redirecionamento para Template de aplicativo, a requisição será executada e o processo de autenticação estará concluído",
    },
    products: {
      title: "Produtos da Loja",
      name: "Nome",
      remove: "Excluir",
      "no-content": "Não há produtos para serem exibidos",
      selected: {
        single: "Selecionado",
        many: "Selecionados",
      },
    },
  },
};
