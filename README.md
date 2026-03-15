# Shopping App - Loja Online Mobile

Aplicativo mobile de e-commerce desenvolvido em React Native com Expo, permitindo a visualização de produtos por categoria (masculino/feminino), com navegação entre telas e consumo de API REST.

## 📱 Funcionalidades

- **Tela de Login**: Validação de campos (email e nome), armazenamento temporário com Redux Toolkit
- **Lista de Produtos**: Abas separadas para categorias masculino/feminino
- **Detalhes do Produto**: Exibição de nome, imagem, descrição, preço (em BRL) e desconto
- **Logout**: Botão funcional para sair e limpar dados do usuário
- **Tratamento de Erros**: Estados de carregamento, mensagens de erro e pull-to-refresh

## 🛠 Tecnologias Utilizadas

- **React Native** (com Expo)
- **TypeScript**
- **Redux Toolkit** - Gerenciamento de estado global
- **Axios** - Consumo de API REST
- **React Navigation** - Navegação entre telas (Stack + Bottom Tabs)
- **DummyJSON API** - API de produtos fake

## 📂 Estrutura de Diretórios

```
shopping-app/
├── App.tsx                     # Entry point
├── src/
│   ├── components/             # Componentes reutilizáveis
│   │   └── ProductItem.tsx    # Card de produto
│   ├── context/               # Contextos React
│   │   └── AuthContext.tsx   # Contexto de autenticação
│   ├── navigation/            # Configuração de navegação
│   │   └── AppNavigator.tsx  # Stack + Tabs
│   ├── screens/              # Telas do aplicativo
│   │   ├── LoginScreen.tsx   # Tela de login
│   │   ├── ProductListScreen.tsx  # Lista de produtos
│   │   └── ProductDetailScreen.tsx # Detalhes do produto
│   ├── services/             # Serviços e API
│   │   └── api.ts            # Configuração Axios
│   ├── store/                # Redux Store
│   │   └── index.ts          # Store e reducers
│   ├── types/                # Tipos TypeScript
│   │   └── index.ts          # Interfaces
│   └── utils/                # Utilitários
│       └── currency.ts       # Conversão BRL
└── package.json
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18+)
- npm ou yarn
- Expo CLI

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/shopping-app.git
cd shopping-app
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto:
```bash
npx expo start
```

### Executar em plataformas

- **Web**: `npx expo start --web`
- **Android**: `npx expo start --android`
- **iOS**: `npx expo start --ios` (apenas macOS)

## 📋 Categorias de Produtos

### Masculino
- Camisas (mens-shirts)
- Calçados (mens-shoes)
- Relógios (mens-watches)

### Feminino
- Bolsas (womens-bags)
- Vestidos (womens-dresses)
- Joias (womens-jewellery)
- Calçados (womens-shoes)
- Relógios (womens-watches)

## 🔧 Configurações

### Conversão de Moeda
Os preços são convertidos de USD para BRL com taxa fixa de 1 USD = R$ 5,00 (configurável em `src/utils/currency.ts`).

### API
A aplicação consome a DummyJSON API: `https://dummyjson.com/products`

## 📄 Licença

Este projeto é apenas para fins educacionais.
