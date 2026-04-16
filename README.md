# 📱 Projeto Mobile + API FastAPI

Este projeto consiste em:

* Backend em **FastAPI** (API)
* Frontend Mobile com **React Native (Expo)**

---

# 🚀 1. Instalação inicial

## 📦 Caso NÃO tenha a pasta `node_modules`

Execute no terminal dentro da pasta do projeto mobile:

```bash
npm install
```

ou se estiver usando yarn:

```bash
yarn
```

---

# 🖥️ 2. Rodando o BACKEND (FastAPI)

## Instalar dependências

```bash
pip install -r requirements.txt
```

## Rodar o servidor

```bash
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

## Testar API no navegador

Abra:

```
http://localhost:8000/docs
```

Se abrir o Swagger → ✅ API funcionando

---

# 🌐 3. Como acessar no WEB (navegador)

## Rodar o projeto

```bash
npx expo start
```

Depois pressione:

```
w
```

## URL de acesso

Normalmente:

```
http://localhost:8081
```

## Configuração da API (IMPORTANTE)

No arquivo `services/api.js`:

```js
baseURL: 'http://localhost:8000'
```

---

# 📱 4. Como acessar no EMULADOR / CELULAR

## 🔥 Passo 1: Descobrir seu IP

No terminal:

```bash
ipconfig
```

Procure algo como:

```
192.168.0.13
```

---

## 🔥 Passo 2: Alterar a baseURL

No `api.js`:

```js
baseURL: 'http://192.168.0.13:8000'
```

⚠️ NÃO use:

* localhost ❌
* 127.0.0.1 ❌

---

## 🔥 Passo 3: Rodar Expo

```bash
npx expo start
```

Depois:

* Pressione **a** → Android Emulator
* ou escaneie QR Code no celular

---

## 🔥 Passo 4: Garantir que API aceita conexões externas

Execute:

```bash
python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

---

# 🔐 5. Configuração de CORS

No arquivo principal da API:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8081",
        "http://127.0.0.1:8081"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 💡 Observações

* CORS é necessário apenas para WEB
* Mobile (emulador/celular) NÃO precisa de CORS

Durante desenvolvimento você pode usar:

```python
allow_origins=["*"]
```

---

# ⚠️ Problemas comuns

## ❌ Network Error

Causa:

* URL errada

Solução:

* Use IP no emulador

---

## ❌ Cannot connect / Failed to fetch

Causa:

* API não rodando
* CORS errado

---

## ❌ E-mail já cadastrado

Causa:

* Usuário já existe no banco

---

## ❌ 0.0.0.0 não abre no navegador

Isso é normal.

Use:

```
http://localhost:8000
```

---

# 🧠 Resumo Geral

| Ambiente | URL API                                        |
| -------- | ---------------------------------------------- |
| Web      | [http://localhost:8000](http://localhost:8000) |
| Emulador | http://SEU_IP:8000                             |
| Servidor | 0.0.0.0                                        |

---

# ✅ Fluxo correto

1. Rodar backend
2. Rodar expo
3. Ajustar baseURL
4. Testar no web ou emulador

---

# 🚀 Pronto!

Seu projeto agora está preparado para:

* Web
* Emulador
* Celular físico

---

Se quiser evoluir:

* Carrinho
* Upload de imagens
* Autenticação avançada

👉 só continuar 🚀
