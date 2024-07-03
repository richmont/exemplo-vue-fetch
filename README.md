# exemplo-vue-fetch

Pequena aplicação que usa dados obtidos de uma API para exibir com Vue, criado para estudo.

# Requisitos

- Python
- Node

# Executando

### Clone o repositório

```bash
git clone https://github.com/richmont/exemplo-vue-fetch.git
```

### Instalando dependências do node

```bash
cd exemplo-vue-fetch
npm install
```

### Iniciando aplicação

```bash
npm run dev
```

http://localhost:5173/

## Servidor para API Get

A página abrirá no navegador sem ter de onde consumir conteúdo, então inicie o servidor que provê uma API REST simples com suporte a requisições GET

### Crie ambiente virtual Python

```bash
cd api
python -m venv .venv
```

### Ative o ambiente virtual

Linux

```bash
source .venv/bin/activate
```

Windows

```powershell
.venv\Scripts\activate
```

### Instale as dependências

```
pip install -r requirements.txt
```

### Execute o servidor

```bash
python get.py
```

Recarregue a página da aplicação
