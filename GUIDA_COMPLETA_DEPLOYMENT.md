# 🚀 Guida Completa al Deployment del Portfolio

## 📋 Indice
1. [Panoramica del Progetto](#panoramica-del-progetto)
2. [Preparazione per il Deployment](#preparazione-per-il-deployment)
3. [Opzioni di Hosting](#opzioni-di-hosting)
4. [Deployment su Vercel (Consigliato)](#deployment-su-vercel-consigliato)
5. [Deployment su Netlify](#deployment-su-netlify)
6. [Hosting Tradizionale (Hostinger, SiteGround, etc.)](#hosting-tradizionale)
7. [Personalizzazione dei Contenuti](#personalizzazione-dei-contenuti)
8. [Gestione del Dominio](#gestione-del-dominio)
9. [Manutenzione e Aggiornamenti](#manutenzione-e-aggiornamenti)
10. [Troubleshooting](#troubleshooting)

---

## 📊 Panoramica del Progetto

Il tuo portfolio è costruito con:
- **Next.js 16** (React framework)
- **Tailwind CSS** per lo styling
- **Framer Motion** per le animazioni
- **TypeScript** per la type safety
- **Sistema JSON** per la gestione contenuti

### Struttura dei File Principali
```
portfolio-website/
├── src/
│   ├── data/portfolio.json          # 📝 I TUOI CONTENUTI
│   ├── app/page.tsx                 # Homepage
│   ├── components/sections/         # Sezioni del sito
│   └── components/ui/               # Componenti riutilizzabili
├── public/                          # Immagini e file statici
├── package.json                     # Dipendenze del progetto
└── next.config.ts                   # Configurazione Next.js
```

---

## 🛠️ Preparazione per il Deployment

### 1. Verifica che il Sito Funzioni Localmente

```bash
# Naviga nella cartella del progetto
cd portfolio-website

# Installa le dipendenze (se non già fatto)
npm install

# Avvia il server di sviluppo
npm run dev
```

Il sito dovrebbe essere accessibile su `http://localhost:3000`

### 2. Build di Produzione

```bash
# Crea la build ottimizzata
npm run build

# Testa la build localmente
npm start
```

### 3. Controlli Pre-Deployment

- [ ] Il sito si carica senza errori
- [ ] Tutte le sezioni sono visibili
- [ ] La navigazione funziona
- [ ] Il form di contatto è operativo
- [ ] Le animazioni sono fluide
- [ ] Il sito è responsive su mobile

---

## 🌐 Opzioni di Hosting

### ⭐ Opzione 1: Vercel (CONSIGLIATA)
- **Costo**: Gratuito per uso personale
- **Vantaggi**: Ottimizzato per Next.js, deployment automatico, CDN globale
- **Dominio**: Gratuito (.vercel.app) o personalizzato

### ⭐ Opzione 2: Netlify
- **Costo**: Gratuito per uso personale
- **Vantaggi**: Facile da usare, buone performance
- **Dominio**: Gratuito (.netlify.app) o personalizzato

### 💰 Opzione 3: Hosting Tradizionale
- **Esempi**: Hostinger, SiteGround, Aruba
- **Costo**: €3-10/mese
- **Vantaggi**: Controllo completo, supporto italiano
- **Svantaggi**: Richiede più configurazione

---

## 🚀 Deployment su Vercel (Consigliato)

### Passo 1: Preparazione
1. Crea un account su [vercel.com](https://vercel.com)
2. Carica il tuo codice su GitHub:
   ```bash
   # Inizializza git (se non già fatto)
   git init
   git add .
   git commit -m "Initial commit"
   
   # Crea repository su GitHub e collegalo
   git remote add origin https://github.com/TUO-USERNAME/portfolio
   git push -u origin main
   ```

### Passo 2: Deployment
1. Su Vercel, clicca "New Project"
2. Importa il repository da GitHub
3. Vercel rileverà automaticamente Next.js
4. Clicca "Deploy"

### Passo 3: Configurazione Dominio
1. Vai su "Settings" > "Domains"
2. Aggiungi il tuo dominio personalizzato
3. Configura i DNS come indicato

### Variabili d'Ambiente (Opzionali)
```
NEXT_PUBLIC_BASE_URL=https://tuo-dominio.com
```

---

## 🌍 Deployment su Netlify

### Passo 1: Preparazione
1. Crea un account su [netlify.com](https://netlify.com)
2. Carica il codice su GitHub (come sopra)

### Passo 2: Configurazione Build
1. Connetti il repository GitHub
2. Imposta le build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

### Passo 3: Plugin Next.js
Aggiungi al `package.json`:
```json
{
  "dependencies": {
    "@netlify/plugin-nextjs": "^5.0.0"
  }
}
```

---

## 🏠 Hosting Tradizionale (Hostinger, SiteGround, etc.)

### ⚠️ Limitazioni
Gli hosting tradizionali **NON supportano Next.js** direttamente. Hai due opzioni:

#### Opzione A: Export Statico (Limitato)
```bash
# Modifica next.config.ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

# Build statico
npm run build
```

**Limitazioni**: Niente server-side rendering, API routes, o ottimizzazioni avanzate.

#### Opzione B: VPS con Node.js
- Richiede hosting VPS (più costoso)
- Installa Node.js sul server
- Configura PM2 per il processo

### Raccomandazione
**Usa Vercel o Netlify** per la migliore esperienza con Next.js.

---

## ✏️ Personalizzazione dei Contenuti

### File Principale: `src/data/portfolio.json`

```json
{
  "personal": {
    "name": "Michele Sodano",
    "role": "Data Scientist · AI Engineer",
    "tagline": "Il tuo messaggio principale",
    "bio": "La tua biografia...",
    "email": "tua-email@gmail.com",
    "location": "Milano, Italia"
  }
}
```

### Come Modificare i Contenuti

1. **Informazioni Personali**
   ```json
   "personal": {
     "name": "Il Tuo Nome",
     "role": "Il Tuo Ruolo",
     "email": "tua-email@gmail.com"
   }
   ```

2. **Progetti**
   ```json
   "projects": [
     {
       "title": "Nome Progetto",
       "description": "Breve descrizione",
       "technologies": ["Python", "React"],
       "links": {
         "github": "https://github.com/tuo-username/progetto"
       }
     }
   ]
   ```

3. **Competenze**
   ```json
   "skills": {
     "primary": ["Python", "JavaScript", "React"],
     "secondary": ["Docker", "AWS", "MongoDB"]
   }
   ```

### Aggiungere Immagini

1. Metti le immagini in `public/images/`
2. Riferiscile nel JSON: `"/images/tua-foto.jpg"`

---

## 🌐 Gestione del Dominio

### Acquisto Dominio
- **Namecheap**: ~$10/anno
- **GoDaddy**: ~$12/anno
- **Hostinger**: ~$8/anno

### Configurazione DNS

#### Per Vercel:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

#### Per Netlify:
```
Type: CNAME
Name: www
Value: tuo-sito.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

---

## 🔄 Manutenzione e Aggiornamenti

### Aggiornare i Contenuti
1. Modifica `src/data/portfolio.json`
2. Commit e push su GitHub
3. Il sito si aggiorna automaticamente (Vercel/Netlify)

### Aggiungere Nuove Sezioni
1. Crea componente in `src/components/sections/`
2. Importa in `src/app/page.tsx`
3. Aggiungi dati in `portfolio.json`

### Backup
- Il codice è su GitHub (backup automatico)
- Esporta `portfolio.json` periodicamente

---

## 🐛 Troubleshooting

### Problemi Comuni

#### "Build Failed"
```bash
# Controlla errori localmente
npm run build

# Verifica dipendenze
npm install
```

#### "404 Not Found"
- Controlla che il repository sia pubblico
- Verifica la configurazione del dominio

#### "Slow Loading"
- Ottimizza immagini (WebP, dimensioni ridotte)
- Controlla Lighthouse score

#### "Form Non Funziona"
Il form attuale usa `mailto:`. Per un form backend:
1. Usa Formspree (gratuito)
2. Aggiungi Netlify Forms
3. Implementa API route personalizzata

### Log e Debug
- **Vercel**: Dashboard > Functions > View Logs
- **Netlify**: Dashboard > Site > Functions

---

## 📞 Supporto

### Risorse Utili
- [Documentazione Next.js](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## 🎯 Prossimi Passi Consigliati

1. **Immediate**:
   - [ ] Deploy su Vercel/Netlify
   - [ ] Configura dominio personalizzato
   - [ ] Testa su dispositivi mobili

2. **Breve Termine**:
   - [ ] Aggiungi Google Analytics
   - [ ] Ottimizza SEO
   - [ ] Aggiungi più progetti

3. **Lungo Termine**:
   - [ ] Blog/articoli section
   - [ ] CMS per gestione contenuti
   - [ ] Multilingua (EN/IT)

---

## 💡 Tips Finali

- **Performance**: Mantieni le immagini sotto 500KB
- **SEO**: Aggiorna regolarmente i contenuti
- **Mobile**: Testa sempre su smartphone
- **Analytics**: Monitora le visite e il comportamento utenti
- **Backup**: Mantieni sempre una copia locale del progetto

**Buona fortuna con il tuo portfolio! 🚀**
