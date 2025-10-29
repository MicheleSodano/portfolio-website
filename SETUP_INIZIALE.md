# 🚀 Setup Iniziale del Portfolio

## 📋 Checklist Pre-Requisiti

Prima di iniziare, assicurati di avere:
- [ ] Node.js installato (versione 18 o superiore)
- [ ] Git installato
- [ ] Editor di codice (VS Code consigliato)
- [ ] Account GitHub
- [ ] Le tue foto e contenuti pronti

---

## 🛠️ Installazione Node.js

### Su macOS:
```bash
# Con Homebrew (se già installato)
brew install node

# Oppure scarica da nodejs.org
```

### Su Windows:
1. Vai su [nodejs.org](https://nodejs.org)
2. Scarica la versione LTS
3. Installa seguendo la procedura guidata

### Su Linux:
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install nodejs npm

# CentOS/RHEL
sudo yum install nodejs npm
```

### Verifica Installazione:
```bash
node --version  # Dovrebbe mostrare v18.x.x o superiore
npm --version   # Dovrebbe mostrare 9.x.x o superiore
```

---

## 📁 Setup del Progetto

### 1. Scarica il Progetto
```bash
# Se hai il progetto in una cartella
cd /percorso/alla/cartella/portfolio-website

# Oppure clona da GitHub (se già caricato)
git clone https://github.com/TUO-USERNAME/portfolio-website
cd portfolio-website
```

### 2. Installa le Dipendenze
```bash
npm install
```

Questo comando installerà tutte le librerie necessarie (React, Next.js, Tailwind, etc.)

### 3. Avvia il Server di Sviluppo
```bash
npm run dev
```

Il sito sarà disponibile su: `http://localhost:3000`

---

## 🎨 Personalizzazione Immediata

### 1. Aggiorna le Tue Informazioni
Modifica il file `src/data/portfolio.json`:

```json
{
  "personal": {
    "name": "Il Tuo Nome",
    "role": "Il Tuo Ruolo",
    "email": "tua-email@gmail.com",
    "tagline": "La tua frase di impatto"
  }
}
```

### 2. Aggiungi la Tua Foto
1. Metti la tua foto in `public/images/avatar.jpg`
2. Dimensioni consigliate: 400x400px, formato JPG
3. Peso massimo: 200KB

### 3. Aggiorna i Social
```json
"social": {
  "github": "https://github.com/tuo-username",
  "linkedin": "https://linkedin.com/in/tuo-profilo",
  "twitter": "https://twitter.com/tuo-handle"
}
```

---

## 📝 Comandi Utili

### Sviluppo:
```bash
npm run dev          # Avvia server di sviluppo
npm run build        # Crea build di produzione
npm run start        # Avvia server di produzione
npm run lint         # Controlla errori di codice
```

### Git (Controllo Versione):
```bash
git status           # Mostra file modificati
git add .            # Aggiunge tutti i file modificati
git commit -m "Messaggio"  # Salva le modifiche
git push             # Carica su GitHub
```

---

## 🔧 Configurazione Editor (VS Code)

### Estensioni Consigliate:
1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **Prettier - Code formatter**
4. **Auto Rename Tag**
5. **Bracket Pair Colorizer**

### Installazione Rapida:
```bash
# Se hai VS Code installato
code --install-extension bradlc.vscode-tailwindcss
code --install-extension esbenp.prettier-vscode
```

---

## 🌐 Setup GitHub

### 1. Crea Repository
1. Vai su [github.com](https://github.com)
2. Clicca "New repository"
3. Nome: `portfolio-website`
4. Seleziona "Public"
5. Non aggiungere README (già presente)

### 2. Collega il Progetto
```bash
# Nella cartella del progetto
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/portfolio-website.git
git push -u origin main
```

---

## 🚀 Primo Deployment

### Opzione A: Vercel (Consigliato)
1. Vai su [vercel.com](https://vercel.com)
2. Registrati con GitHub
3. Clicca "New Project"
4. Seleziona il tuo repository
5. Clicca "Deploy"

### Opzione B: Netlify
1. Vai su [netlify.com](https://netlify.com)
2. Registrati con GitHub
3. Clicca "New site from Git"
4. Seleziona il repository
5. Build command: `npm run build`
6. Publish directory: `.next`

---

## 📱 Test Multi-Dispositivo

### Browser da Testare:
- [ ] Chrome (desktop)
- [ ] Firefox (desktop)
- [ ] Safari (se su Mac)
- [ ] Chrome mobile
- [ ] Safari mobile (iPhone)

### Strumenti di Test:
```bash
# Apri DevTools in Chrome
F12 o Cmd+Option+I

# Testa responsive design
Clicca l'icona mobile in DevTools
```

---

## 🐛 Risoluzione Problemi Comuni

### "npm: command not found"
```bash
# Reinstalla Node.js da nodejs.org
# Riavvia il terminale
```

### "Port 3000 already in use"
```bash
# Trova e termina il processo
lsof -ti:3000 | xargs kill -9

# Oppure usa porta diversa
npm run dev -- -p 3001
```

### "Module not found"
```bash
# Reinstalla dipendenze
rm -rf node_modules package-lock.json
npm install
```

### Errori di Build
```bash
# Controlla sintassi JSON
# Usa un validatore online: jsonlint.com
```

---

## 📚 Risorse di Apprendimento

### Documentazione:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

### Tutorial:
- [Next.js Tutorial](https://nextjs.org/learn)
- [Git Tutorial](https://learngitbranching.js.org)
- [JSON Tutorial](https://www.w3schools.com/json/)

---

## 🎯 Prossimi Passi

Dopo il setup iniziale:

1. **Personalizza i contenuti** (vedi `GESTIONE_CONTENUTI.md`)
2. **Aggiungi i tuoi progetti**
3. **Testa su dispositivi mobili**
4. **Deploy online**
5. **Configura dominio personalizzato**

---

## 📞 Supporto

### Se hai problemi:
1. Controlla la console del browser (F12)
2. Leggi i messaggi di errore nel terminale
3. Cerca su Google l'errore specifico
4. Consulta la documentazione ufficiale

### Community:
- [Stack Overflow](https://stackoverflow.com)
- [Next.js Discord](https://discord.gg/nextjs)
- [Reddit r/webdev](https://reddit.com/r/webdev)

---

**Buon lavoro con il tuo portfolio! 🚀**

Se tutto è configurato correttamente, dovresti vedere il tuo sito su `http://localhost:3000` con i tuoi contenuti personalizzati.
