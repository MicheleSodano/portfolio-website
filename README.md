# Portfolio Website - Michele Sodano

Un sito portfolio moderno e minimalista per Data Scientist, AI Engineer e Applied Researcher. Costruito con Next.js 16, Tailwind CSS e Framer Motion.

## 🚀 Caratteristiche

- **Design Minimalista**: Layout pulito con ampi spazi bianchi e tipografia moderna
- **Responsive**: Ottimizzato per tutti i dispositivi (desktop, tablet, mobile)
- **Animazioni Fluide**: Micro-interazioni e animazioni smooth con Framer Motion
- **Dark Mode**: Supporto automatico per tema scuro/chiaro
- **Performance**: Ottimizzato per velocità e SEO
- **Accessibilità**: Conforme alle linee guida WCAG
- **Gestione Contenuti**: Sistema basato su JSON per facile aggiornamento

## 🛠️ Tecnologie Utilizzate

- **Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS v4
- **Animazioni**: Framer Motion
- **Icone**: Lucide React
- **Tipografia**: Inter (Google Fonts)
- **Linguaggio**: TypeScript

## 📁 Struttura del Progetto

```
src/
├── app/                    # App Router di Next.js
│   ├── globals.css        # Stili globali
│   ├── layout.tsx         # Layout principale
│   └── page.tsx           # Homepage
├── components/            # Componenti React
│   ├── sections/          # Sezioni del portfolio
│   │   ├── Hero.tsx       # Sezione hero
│   │   ├── Skills.tsx     # Competenze
│   │   ├── Projects.tsx   # Progetti
│   │   ├── Experience.tsx # Esperienza lavorativa
│   │   ├── About.tsx      # Biografia
│   │   ├── Contact.tsx    # Contatti
│   │   └── Footer.tsx     # Footer
│   ├── ui/                # Componenti UI riutilizzabili
│   │   ├── Button.tsx     # Componente bottone
│   │   └── Card.tsx       # Componente card
│   ├── Navigation.tsx     # Navigazione principale
│   └── ScrollToTop.tsx    # Bottone scroll to top
├── data/                  # Dati del portfolio
│   └── portfolio.json     # Contenuti del sito
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions
└── types/                 # Definizioni TypeScript
```

## 🎨 Sezioni del Portfolio

### 1. Hero Section
- Nome e ruolo professionale
- Tagline accattivante
- Call-to-action principali
- Link ai social network

### 2. Competenze
- Categorie di competenze (Programmo, Analizzo, Progetto, Collaboro)
- Tecnologie principali e secondarie
- Badge interattivi

### 3. Progetti
- Showcase dei progetti più importanti
- Descrizione del problema e soluzione
- Metriche di successo
- Link a GitHub e demo live

### 4. Chi Sono
- Biografia personale
- Foto profilo (placeholder)
- Curiosità e interessi

### 5. Esperienza & Formazione
- Timeline delle esperienze lavorative
- Percorso formativo
- Risultati e achievements

### 6. Contatti
- Form di contatto funzionale
- Informazioni di contatto
- Link ai social network
- Note sulla privacy (GDPR compliant)

## 🚀 Come Iniziare

### Prerequisiti
- Node.js 18+ 
- npm o yarn

### Installazione

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   Vai su [http://localhost:3000](http://localhost:3000)

### Build per Produzione

```bash
npm run build
npm start
```

## ⚙️ Personalizzazione

### Aggiornare i Contenuti

Modifica il file `src/data/portfolio.json` per aggiornare:
- Informazioni personali
- Progetti
- Esperienze lavorative
- Competenze
- Formazione

### Personalizzare i Colori

I colori sono gestiti tramite CSS custom properties in `src/app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #0f0f0f;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #f5f5f5;
  }
}
```

### Aggiungere Nuove Sezioni

1. Crea un nuovo componente in `src/components/sections/`
2. Importalo in `src/app/page.tsx`
3. Aggiungi i dati necessari in `portfolio.json`

## 📱 Responsive Design

Il sito è ottimizzato per:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Utilizza le classi responsive di Tailwind CSS:
- `sm:` per schermi ≥ 640px
- `md:` per schermi ≥ 768px
- `lg:` per schermi ≥ 1024px
- `xl:` per schermi ≥ 1280px

## 🎯 Performance

- **Lighthouse Score**: Target 90+
- **Core Web Vitals**: Ottimizzati
- **Immagini**: Lazy loading automatico
- **Fonts**: Precaricamento ottimizzato
- **Bundle**: Code splitting automatico

## 🔧 Scripts Disponibili

```bash
npm run dev          # Server di sviluppo
npm run build        # Build per produzione
npm run start        # Server di produzione
npm run lint         # Linting del codice
```

## 📄 Licenza

Questo progetto è rilasciato sotto licenza MIT. Vedi il file `LICENSE` per i dettagli.

## 🤝 Contributi

I contributi sono benvenuti! Per contribuire:

1. Fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📞 Supporto

Per domande o supporto, contatta:
- Email: mikysodano@gmail.com
- LinkedIn: [Michele Sodano](https://linkedin.com/in/michelesodano)
- GitHub: [@michelesodano](https://github.com/michelesodano)

---

Realizzato con ❤️ da Michele Sodano