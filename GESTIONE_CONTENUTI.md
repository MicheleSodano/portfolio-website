# 📝 Guida alla Gestione dei Contenuti

## 🎯 File Principale: `src/data/portfolio.json`

Questo file contiene **tutti i contenuti** del tuo sito. Modificandolo, puoi aggiornare informazioni, progetti, esperienze senza toccare il codice.

---

## 👤 Sezione Personal

```json
"personal": {
  "name": "Michele Sodano",
  "role": "Data Scientist · AI Engineer · Applied Researcher",
  "tagline": "Blending data, design & intelligence to ship interpretable, efficient and privacy‑aware AI",
  "bio": "La tua biografia completa...",
  "location": "Milano, Italia",
  "email": "mikysodano@gmail.com",
  "phone": "",
  "website": "https://michelesodano.dev",
  "avatar": "/images/avatar.jpg"
}
```

### Come Modificare:
- **name**: Il tuo nome completo
- **role**: Il tuo ruolo professionale (apparirà sotto il nome)
- **tagline**: Frase di impatto nella hero section
- **bio**: Biografia per la sezione "Chi sono" (5-6 righe)
- **email**: La tua email (usata per contatti)
- **location**: Dove ti trovi
- **website**: Il tuo sito web
- **avatar**: Percorso alla tua foto (metti l'immagine in `public/images/`)

---

## 🔗 Social Networks

```json
"social": {
  "github": "https://github.com/michelesodano",
  "linkedin": "https://linkedin.com/in/michelesodano",
  "twitter": ""
}
```

### Come Modificare:
- Inserisci i tuoi link completi
- Lascia stringa vuota `""` se non hai quel social
- Puoi aggiungere altri social modificando anche i componenti

---

## 🛠️ Competenze (Skills)

```json
"skills": {
  "primary": [
    "Python",
    "PyTorch", 
    "TensorFlow",
    "scikit-learn",
    "Pandas/NumPy",
    "Docker"
  ],
  "secondary": [
    "HuggingFace",
    "OpenCV",
    "SQL/ETL",
    "FastAPI",
    "MLflow",
    "EnergyPlus"
  ]
}
```

### Come Modificare:
- **primary**: Le tue competenze principali (max 6-8)
- **secondary**: Competenze secondarie o in apprendimento
- Usa nomi brevi e riconoscibili
- Ordina per importanza

---

## 📂 Categorie di Competenze

```json
"categories": [
  {
    "title": "AI & Machine Learning",
    "description": "PyTorch, TensorFlow, scikit-learn...",
    "icon": "code"
  }
]
```

### Icone Disponibili:
- `code`: Programmazione
- `search`: Analisi/Ricerca  
- `palette`: Design/Creatività
- `users`: Collaborazione/Team

---

## 🚀 Progetti

```json
"projects": [
  {
    "id": "progetto-unico",
    "title": "Nome del Progetto",
    "description": "Breve descrizione (1-2 righe)",
    "problem": "Quale problema risolve",
    "solution": "Come l'hai risolto",
    "results": [
      "Risultato 1 con metriche",
      "Risultato 2 quantificato",
      "Risultato 3 con impatto"
    ],
    "technologies": ["Python", "React", "Docker"],
    "links": {
      "github": "https://github.com/...",
      "demo": "https://demo-link.com"
    },
    "image": "/images/projects/nome-progetto.jpg",
    "featured": true
  }
]
```

### Come Aggiungere un Progetto:

1. **Copia la struttura** sopra
2. **Cambia l'ID** (deve essere unico)
3. **Compila tutti i campi**:
   - `title`: Nome accattivante
   - `description`: Cosa fa (max 2 righe)
   - `problem`: Problema che risolve
   - `solution`: La tua soluzione
   - `results`: 2-3 risultati con numeri/percentuali
   - `technologies`: Array di tecnologie usate
   - `links`: GitHub e/o demo (opzionali)
   - `featured`: `true` per mostrarlo in homepage

4. **Aggiungi immagine**:
   - Metti l'immagine in `public/images/projects/`
   - Dimensioni consigliate: 800x600px
   - Formato: JPG o PNG

### Template Progetto:
```json
{
  "id": "nuovo-progetto",
  "title": "Il Mio Nuovo Progetto",
  "description": "Descrizione breve e accattivante",
  "problem": "Il problema che esisteva prima",
  "solution": "Come l'ho risolto con tecnologie X, Y, Z",
  "results": [
    "Miglioramento del X%",
    "Riduzione tempo di Y minuti",
    "Aumento efficienza del Z%"
  ],
  "technologies": ["Python", "React", "PostgreSQL"],
  "links": {
    "github": "https://github.com/tuousername/progetto"
  },
  "image": "/images/projects/nuovo-progetto.jpg",
  "featured": true
}
```

---

## 💼 Esperienza Lavorativa

```json
"experience": [
  {
    "id": "lavoro-attuale",
    "title": "Il Tuo Ruolo",
    "company": "Nome Azienda",
    "location": "Città, Paese",
    "period": {
      "start": "2024-01",
      "end": "presente"
    },
    "description": "Breve descrizione del ruolo",
    "achievements": [
      "Risultato importante 1",
      "Risultato importante 2", 
      "Risultato importante 3"
    ],
    "technologies": ["Python", "Docker", "AWS"]
  }
]
```

### Come Aggiungere Esperienza:

1. **Formato Date**: `"YYYY-MM"` (es. `"2024-01"`)
2. **End Date**: `"presente"` per lavoro attuale
3. **Achievements**: Max 3, con risultati quantificati
4. **Technologies**: Tecnologie principali usate

---

## 🎓 Formazione

```json
"education": [
  {
    "id": "laurea-magistrale",
    "degree": "Nome del Titolo",
    "institution": "Nome Università",
    "location": "Città",
    "period": {
      "start": "2019-09",
      "end": "2023-07"
    },
    "grade": "110/110 con lode",
    "thesis": "Titolo della tesi",
    "achievements": [
      "Borsa di studio",
      "Pubblicazioni",
      "Riconoscimenti"
    ]
  }
]
```

---

## 🖼️ Gestione Immagini

### Struttura Cartelle:
```
public/
├── images/
│   ├── avatar.jpg           # La tua foto
│   └── projects/
│       ├── progetto1.jpg
│       ├── progetto2.jpg
│       └── progetto3.jpg
```

### Specifiche Immagini:

#### Avatar (Foto Profilo):
- **Dimensioni**: 400x400px (quadrata)
- **Formato**: JPG o PNG
- **Peso**: < 200KB
- **Nome file**: `avatar.jpg`

#### Progetti:
- **Dimensioni**: 800x600px (4:3)
- **Formato**: JPG (preferito)
- **Peso**: < 500KB ciascuna
- **Nomi**: descrittivi (es. `ecommerce-dashboard.jpg`)

### Ottimizzazione Immagini:
- Usa [TinyPNG](https://tinypng.com) per comprimere
- Converti in WebP se possibile
- Mantieni qualità alta ma file leggeri

---

## 🔄 Workflow di Aggiornamento

### 1. Modifica Locale
```bash
# Apri il file
code src/data/portfolio.json

# Testa le modifiche
npm run dev
```

### 2. Verifica
- Controlla che non ci siano errori di sintassi JSON
- Testa tutte le sezioni del sito
- Verifica link e immagini

### 3. Deploy
```bash
# Commit delle modifiche
git add .
git commit -m "Aggiornato portfolio con nuovo progetto"
git push

# Il sito si aggiorna automaticamente su Vercel/Netlify
```

---

## ✅ Checklist Contenuti

### Prima del Launch:
- [ ] Foto profilo aggiunta e ottimizzata
- [ ] Biografia scritta e revisionata
- [ ] Almeno 3 progetti con immagini
- [ ] Esperienze lavorative complete
- [ ] Formazione aggiornata
- [ ] Link social verificati
- [ ] Email di contatto corretta
- [ ] Competenze ordinate per importanza

### Manutenzione Regolare:
- [ ] Aggiungere nuovi progetti (ogni 2-3 mesi)
- [ ] Aggiornare competenze acquisite
- [ ] Revisionare biografia annualmente
- [ ] Verificare link esterni funzionanti
- [ ] Ottimizzare immagini se necessario

---

## 🚨 Errori Comuni da Evitare

### ❌ Errori JSON:
```json
// SBAGLIATO - virgola finale
"skills": ["Python", "React",]

// CORRETTO
"skills": ["Python", "React"]
```

### ❌ Link Rotti:
- Verifica sempre che i link GitHub/demo funzionino
- Usa `#` per link placeholder

### ❌ Immagini Mancanti:
- Se specifichi un'immagine, assicurati che esista in `public/`

### ❌ Date Sbagliate:
```json
// SBAGLIATO
"start": "January 2024"

// CORRETTO  
"start": "2024-01"
```

---

## 💡 Tips per Contenuti Efficaci

### Progetti:
- **Quantifica i risultati**: "Ridotto del 40%" vs "Migliorato"
- **Spiega l'impatto**: Non solo cosa hai fatto, ma perché era importante
- **Usa verbi d'azione**: "Sviluppato", "Implementato", "Ottimizzato"

### Biografia:
- **Mantienila concisa**: 5-6 righe massimo
- **Includi personalità**: Non solo competenze tecniche
- **Mostra passione**: Cosa ti motiva nel lavoro

### Competenze:
- **Sii onesto**: Non esagerare il livello
- **Mantieni aggiornato**: Rimuovi tecnologie obsolete
- **Ordina strategicamente**: Le più importanti per il tuo obiettivo

---

**Ricorda**: Il contenuto è più importante del design. Un portfolio con progetti interessanti e ben descritti avrà sempre più successo! 🚀
