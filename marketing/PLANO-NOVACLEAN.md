# NovaClean: plano de Site, Google e Instagram

Atualizado em 19/11/2026. Os textos que vão para o público estão em inglês (clientes de Sydney). As explicações estão em português.

**Ordem certa:** 1) colocar o site no ar → 2) arrumar o Google → 3) postar o vídeo no Instagram.
Assim, quem vir o vídeo e procurar "NovaClean" no Google encontra um perfil completo e um site com as fotos reais.

---

## 1. Site (feito e publicado em 19/11/2026)

Tudo está no branch `claude/instalar-hyperframes-nxe7qp`. **O site no ar só muda quando esse branch for juntado ao `main`.** É só me pedir: "pode publicar o site".

O que mudou:
- **Página nova:** `novaclean.au/concrete-floor-cleaning.html`, sobre limpeza de pisos de concreto e de restaurantes, com as suas fotos e o seu vídeo reais.
- **Home:** nova seção "Real jobs, real results", com o vídeo do Reels e 4 fotos reais (incluindo o funcionário com a camisa NovaClean).
- **Página de tatame:** ganhou 2 fotos reais novas.
- **Instagram @novaclean.au:** link no rodapé de todas as páginas e no código que o Google lê (schema `sameAs`).
- **Ajustes para o Google:**
  - Endereço principal (canonical) da home corrigido para `https://novaclean.au/`.
  - Imagem de compartilhamento (WhatsApp/Facebook) agora é a foto real da equipe.
  - Página nova incluída no sitemap.
  - O link antigo `concrete-cleaning-sydney.html` agora leva para a página nova.

---

## 2. Google Business Profile (Google Maps), o mais urgente

### ✅ Feito por API em 19/11/2026 (perfil verificado "Nova Clean")
- **Descrição nova:** foco em tatame e pisos, sem "End of Lease" e sem "Book online".
- **Telefone:** +61 451 989 385
- **Categoria principal:** *Janitorial service* (a categoria comercial do Google).
- **Categorias extras:** House cleaning, Carpet cleaning, Window cleaning, Gutter cleaning, Pressure washing.
- **11 serviços** cadastrados, com descrição.
- **10 fotos reais**, incluindo a capa nova (o funcionário na academia).
- **Primeiro post** publicado, com a foto do concreto e o botão "Call".
- **Endereço e site:** o endereço já estava escondido (atende Sydney) e o site já estava correto.

### ⚠️ Perfil duplicado
Existe **outro perfil "NovaClean"** no Google Maps, **sem dono**:
- categoria "Window cleaning service";
- endereço "Sydney NSW 2000";
- link: https://www.google.com/maps?cid=17117225259939676949

Ele divide as buscas com o perfil verdadeiro. Para remover:
1. Abra o link acima no Google Maps.
2. Toque em **Suggest an edit → Close or remove → Duplicate of another place**.
3. Escolha o perfil verdadeiro "Nova Clean".

### Link para pedir avaliações
https://search.google.com/local/writereview?placeid=ChIJe2NACCp7lqgRRlWLp4mws_M

---

Diagnóstico inicial (feito pela busca pública; corresponde ao perfil duplicado):

| Item | Hoje | Deve ficar |
|---|---|---|
| Reivindicado (dono confirmado) | **Parece que não** | Sim, verificado na sua conta Google |
| Categoria principal | **Window cleaning service** ❌ | **Floor cleaning service** (se não existir: *Commercial cleaning service*) |
| Categorias extras | nenhuma | Commercial cleaning service · Carpet cleaning service · Pressure washing service · House cleaning service · Window cleaning service |
| Descrição | vazia | o texto abaixo |
| Fotos | 1 (Street View) | 15 ou mais fotos reais + o vídeo |
| Avaliações | 0 | pedir para cada cliente (modelo abaixo) |
| Site | `http://www.novaclean.au/` | `https://novaclean.au/` |
| Endereço | "Sydney NSW 2000" visível | **Esconder o endereço** e usar **área de atendimento** (Service area business) |
| Horário | 24/7 | OK, mantém |

### Passo a passo (uns 20 minutos)
1. Acesse **business.google.com** com a conta Google da NovaClean (`novaclean.au@gmail.com`).
2. Se pedir para **reivindicar ou verificar**, faça a verificação. Geralmente é por vídeo ou código.
3. **Edit profile → Business category:** troque a principal para *Floor cleaning service* e adicione as extras da tabela.
4. **Location and areas:** remova o endereço visível e adicione as áreas: Sydney CBD, North Sydney, Northern Beaches, Eastern Suburbs, Inner West, Parramatta, Castle Hill, Bondi, Mosman.
5. **Website:** `https://novaclean.au/`
6. **Description:** cole o texto abaixo.
7. **Services:** adicione cada serviço com a descrição curta abaixo.
8. **Photos:** suba as fotos reais (lista abaixo), o **logo** e uma **foto de capa** (a do funcionário na academia).
9. **Videos:** suba o vídeo do Reels.
10. **Posts:** publique o primeiro post (texto abaixo) com o vídeo ou a foto.

### Descrição (até 750 caracteres; copie e cole)
> NovaClean is a Sydney cleaning company specialising in gym, dojo and martial arts mat cleaning, and in deep machine scrubbing of concrete and restaurant floors. We work on site and after hours, so your academy, gym or restaurant never has to close. We also clean tile and grout, carpets, driveways, house exteriors, windows, gutters and solar panels. Fully insured, eco-friendly products and 24/7 emergency service across Sydney, from the CBD to Parramatta, the Northern Beaches, the Eastern Suburbs and the Inner West. Call 0451 989 385 or request a free quote at novaclean.au.

### Serviços (nome + descrição curta)
- **Gym & Dojo Mat Cleaning:** Deep machine cleaning of tatami, BJJ, wrestling and gym mats, on site and after hours.
- **Concrete & Restaurant Floor Cleaning:** Machine scrubbing and degreasing for restaurant, kitchen, warehouse and garage concrete.
- **Tile & Grout Cleaning:** Deep cleaning of tile floors and grout lines.
- **Carpet Cleaning:** Professional carpet cleaning for homes and businesses.
- **Pressure Washing / Driveway Cleaning:** Driveways, patios and outdoor areas.
- **House Washing:** Exterior walls, mould and grime removal.
- **Window, Gutter & Solar Panel Cleaning:** Streak-free windows, clear gutters, efficient panels.

### Fotos para subir (já estão no site)
`work-team-gym.jpg`, `work-concrete-stripe.jpg`, `work-concrete-restaurant.jpg`, `work-mat-stripe.jpg`, `work-mat-shine.jpg`, `work-in-progress.jpg`, `work-machine.jpg`, `work-grey-1.jpg`, `work-grey-2.jpg`, `work-yellow-pass.jpg` + o vídeo `novaclean-reel.mp4`.
**Dica:** suba de 2 a 3 fotos novas por semana, de cada trabalho. O Google valoriza perfis com atividade.

### Primeiro post no Google
> One pass. See the difference. 💧 NovaClean deep-cleans gym and dojo mats and restaurant concrete across Sydney, on site and after hours. Free quote: 0451 989 385.
> Botão: **Call now**

### Avaliações: mensagem para mandar a cada cliente (WhatsApp)
> Hi [name], thanks for choosing NovaClean! If you're happy with the result, would you mind leaving us a quick Google review? It really helps a small local business 🙏 [link de avaliação]

O **link de avaliação** fica no painel do perfil: *Ask for reviews → Share review form*.
**Meta:** 10 avaliações no primeiro mês. Comece pelas academias onde você já trabalhou.

---

## 3. Instagram @novaclean.au

### Perfil
- **Nome (campo "Name", aparece na busca):** `NovaClean | Gym Mat & Floor Cleaning Sydney`
- **Categoria:** Cleaning Service
- **Bio:**
  > 🥋 Gym & dojo mat cleaning
  > 🧽 Concrete & restaurant floors
  > 📍 Sydney-wide · 24/7 · Fully insured
  > 👇 Free quote
- **Link:** `https://novaclean.au/#quote`
- **Botões de contato:** Ligar (0451 989 385), WhatsApp, E-mail
- **Destaques (Highlights):** `Gym Mats` · `Floors` · `Before/After` · `Reviews` · `Quote`

### Legenda do primeiro Reels (o vídeo de 27s)
> One pass. See the difference. 👀
>
> Gym & dojo mats deep-cleaned right on site, and restaurant concrete brought back to life. All that dirty water? It came straight out of the mats. 🤢➡️✨
>
> 📍 Sydney-wide · after hours · fully insured
> 📞 0451 989 385 · free quote at the link in bio
>
> #gymcleaning #matcleaning #bjjsydney #dojo #martialartssydney #sydneygym #floorcleaning #concretecleaning #restaurantcleaning #commercialcleaningsydney #sydneycleaning #cleaningservice #beforeandafter #satisfying #novaclean

- **Capa do Reels:** o primeiro frame ("ONE PASS.").
- **Marcar:** a academia ou o restaurante, se eles concordarem (aumenta o alcance).
- **Música:** o vídeo já tem música e voz, então não precisa adicionar.

### Ritmo de posts: 3 por semana
| Semana | Seg | Qua | Sex |
|---|---|---|---|
| 1 | **Reels principal** (o vídeo) | Carrossel antes/depois: concreto | Foto da equipe + "who we are" |
| 2 | Reels curto: a água suja saindo (vídeo IMG_1078) | Carrossel: 3 sinais de que o tatame precisa de limpeza profunda | Story com depoimento do cliente → post |
| 3 | Reels: máquina no tatame amarelo | Carrossel: serviços secundários (driveway, tile, windows) | Post: "Why mats spread skin infections" (dica de higiene) |
| 4 | Reels: passada no concreto do restaurante | Antes/depois: tatame cinza | Oferta: "First academy clean: free quote within 30 min" |

**Stories:** todo dia de trabalho, 2 ou 3 stories do serviço sendo feito. É o conteúdo que mais gera confiança.
**Regra de ouro:** grave sempre **antes, durante e depois** de cada trabalho. Com celular na vertical, 5 a 10 segundos por cena, já basta para eu montar novos vídeos.

### Facebook
Crie ou ligue uma **página do Facebook** ao Instagram (Meta Business Suite). Assim, cada post sai nos dois ao mesmo tempo. Também ajuda no Google.

---

## 4. Próximos passos que eu posso fazer
- [x] **Publicar o site**: publicado em 19/11/2026.
- [ ] Conectar o perfil do Google da NovaClean e o Instagram @novaclean.au ao Windsor.ai. Assim eu consigo ver métricas e preparar relatórios.
- [ ] Montar os próximos Reels a partir dos vídeos que você mandar.
- [ ] Criar os carrosséis antes/depois (imagens prontas para postar).

---

## 5. Auditoria antes do Reels (19/11/2026)

**Site: corrigido e publicado**
- **Velocidade da home no celular:** passou de 76 para **94**. O conteúdo principal aparece em 3,1 s (antes, 7,6 s).
  - O topo agora usa uma foto real e leve, que carrega primeiro.
  - Os cartões de serviço e a galeria usam miniaturas.
- **Acessibilidade:** **100**. O laranja e o azul ficaram um pouco mais escuros para atingir o contraste mínimo de leitura.
- **Topo da home:** "Gym mat & commercial floor cleaning across Sydney".
- **Descrições do Google:** encurtadas para não aparecerem cortadas.
- **Botões nas páginas Privacy e Thank-you:** os links "Free quote" e "Contact" foram corrigidos.
- **Rodapé:** link "★ Review us on Google" em todas as páginas.
- **Logo quadrado:** `logo-novaclean.png`, também incluído nos dados que o Google lê.

**Google: corrigido**
- Logo como foto de perfil.
- 16 fotos no total, com a capa nova.

**Falta (só o dono pode fazer)**
- **Avaliações:** hoje são **0**. Mande a mensagem abaixo para 5 a 10 clientes antes de postar o Reels:
  > Hi! Thanks again for choosing NovaClean 🙏 If you were happy with the job, could you leave us a quick Google review? It takes 30 seconds and really helps our small local business: https://search.google.com/local/writereview?placeid=ChIJe2NACCp7lqgRRlWLp4mws_M
- **Link da bio do Instagram:** use este, que identifica quem veio do Instagram nas estatísticas do site:
  `https://novaclean.au/?utm_source=instagram&utm_medium=social&utm_campaign=bio#quote`
- **Perfil duplicado no Google Maps:** confirmar a remoção em alguns dias.
