# Guida al Deployment

## Deployment su Vercel (Consigliato)

1. **Connetti il repository a Vercel**
   - Vai su [vercel.com](https://vercel.com)
   - Importa il tuo repository GitHub
   - Vercel rileverà automaticamente che è un progetto Next.js

2. **Configura le variabili d'ambiente**
   ```
   NEXT_PUBLIC_BASE_URL=https://tuo-dominio.vercel.app
   ```

3. **Deploy automatico**
   - Ogni push al branch main triggererà un deployment automatico
   - Preview deployments per ogni PR

## Deployment su Netlify

1. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Installa il plugin Next.js**
   ```bash
   npm install @netlify/plugin-nextjs
   ```

## Deployment manuale

1. **Build del progetto**
   ```bash
   npm run build
   ```

2. **Start del server**
   ```bash
   npm start
   ```

## Ottimizzazioni Pre-Deployment

- [ ] Verifica che tutte le immagini siano ottimizzate
- [ ] Controlla i Lighthouse scores
- [ ] Testa su diversi dispositivi
- [ ] Verifica l'accessibilità
- [ ] Controlla i link esterni
- [ ] Aggiorna i contenuti in `portfolio.json`

## Performance Checklist

- [x] Lazy loading delle immagini
- [x] Code splitting automatico
- [x] Compressione gzip/brotli
- [x] Headers di sicurezza
- [x] Meta tags SEO
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Font preloading
- [x] CSS critical path optimization
