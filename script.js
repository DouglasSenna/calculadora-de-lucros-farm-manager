function abrirWhatsapp() {
  window.open("https://chat.whatsapp.com/INyiv2MAyvj8gTuJ7BFyd2", "_blank");
}

const plantas = {
  soja: {
    nome: "Soja",
    sementesHa: 90,
    rendimentoHa: 2697,
    maturacaoHoras: 0 + 59 / 60 + 42 / 3600,
  },
  tabaco: {
    nome: "Tabaco",
    sementesHa: 15,
    rendimentoHa: 1860,
    maturacaoHoras: 1 + 18 / 60 + 37 / 3600,
  },
  // vagem (dados não informados)
  vagem: {
    nome: "Vagem",
    sementesHa: 75,
    rendimentoHa: 14837,
    maturacaoHoras: 1 + 18 / 60 + 37 / 3600,
  },
  sorgo: {
    nome: "Sorgo",
    sementesHa: 45,
    rendimentoHa: 1431,
    maturacaoHoras: 1 + 35 / 60 + 43 / 3600,
  },
  // ervilha
  ervilha: {
    nome: "Ervilha",
    sementesHa: 213,
    rendimentoHa: 8035,
    maturacaoHoras: 1 + 35 / 60 + 43 / 3600,
  },
  // cebola
  cebola: {
    nome: "Cebola",
    sementesHa: 22,
    rendimentoHa: 22454,
    maturacaoHoras: 1 + 51 / 60 + 20 / 3600,
  },
  // cevada
  cevada: {
    nome: "Cevada",
    sementesHa: 101,
    rendimentoHa: 3135,
    maturacaoHoras: 1 + 51 / 60 + 20 / 3600,
  },
  // girassol
  girassol: {
    nome: "Girassol",
    sementesHa: 16,
    rendimentoHa: 1933,
    maturacaoHoras: 1 + 51 / 60 + 20 / 3600,
  },
  // feijão de corda
  "feijao-de-corda": {
    nome: "Feijão de corda",
    sementesHa: 40,
    rendimentoHa: 632,
    maturacaoHoras: 1 + 51 / 60 + 20 / 3600,
  },
  // tomate
  tomate: {
    nome: "Tomate",
    sementesHa: 75,
    rendimentoHa: 35355,
    maturacaoHoras: 2 + 18 / 60 + 59 / 3600,
  },
  // amendoim
  amendoim: {
    nome: "Amendoim",
    sementesHa: 45,
    rendimentoHa: 1746,
    maturacaoHoras: 2 + 18 / 60 + 59 / 3600,
  },
  // batata branca
  "batata-branca": {
    nome: "Batata branca",
    sementesHa: 2300,
    rendimentoHa: 22690,
    maturacaoHoras: 2 + 31 / 60 + 22 / 3600,
  },
  // milho
  milho: {
    nome: "Milho",
    sementesHa: 25,
    rendimentoHa: 7488,
    maturacaoHoras: 2 + 42 / 60 + 57 / 3600,
  },
  // milhete pérola
  "milhete-perola": {
    nome: "Milhete pérola",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  // trigo sarraceno
  "trigo-sarraceno": {
    nome: "Trigo sarraceno",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  // batata doce
  "batata-doce": {
    nome: "Batata doce",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  canola: {
    nome: "Canola",
    sementesHa: 19,
    rendimentoHa: 2103,
    maturacaoHoras: 3 + 4 / 60,
  },
  // beterraba
  beterraba: {
    nome: "Beterraba",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  // aveia
  aveia: { nome: "Aveia", sementesHa: 0, rendimentoHa: 0, maturacaoHoras: 0 },
  // repolho
  repolho: {
    nome: "Repolho",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  "grao-de-bico-cicer": {
    nome: "Grão de bico - Cicer",
    sementesHa: 97,
    rendimentoHa: 1187,
    maturacaoHoras: 3 + 21 / 60 + 58 / 3600,
  },
  // centeio
  centeio: {
    nome: "Centeio",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  abobora: {
    nome: "Abóbora",
    sementesHa: 75,
    rendimentoHa: 25870,
    maturacaoHoras: 4 + 3 / 60 + 1 / 3600,
  },
  // arroz de várzea
  "arroz-de-varzea": {
    nome: "Arroz de várzea",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  // arroz de terras secas
  "arroz-de-terras-secas": {
    nome: "Arroz de terras secas",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  // trigo
  trigo: { nome: "Trigo", sementesHa: 0, rendimentoHa: 0, maturacaoHoras: 0 },
  // cenoura
  cenoura: {
    nome: "Cenoura",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  // linhal
  linhal: { nome: "Linhal", sementesHa: 0, rendimentoHa: 0, maturacaoHoras: 0 },
  // algodão
  algodao: {
    nome: "Algodão",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  // grão-de-bico cajanus
  "grao-de-bico-cajanus": {
    nome: "Grão de bico - Cajanus",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  // inhames / taro / banana / mandioca etc
  "inhame-roxo": {
    nome: "Inhame roxo",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  "inhame-branco": {
    nome: "Inhame branco",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  taro: { nome: "Taro", sementesHa: 0, rendimentoHa: 0, maturacaoHoras: 0 },
  "inhame-amarelo": {
    nome: "Inhame amarelo",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  "banana-da-terra": {
    nome: "Banana da terra",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  mandioca: {
    nome: "Mandioca",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  "cana-de-acucar": {
    nome: "Cana de açúcar",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  azeitona: {
    nome: "Azeitona",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  "cafe-robusta": {
    nome: "Café robusta",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  "cacau-comum": {
    nome: "Cacau comum",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  limao: { nome: "Limão", sementesHa: 0, rendimentoHa: 0, maturacaoHoras: 0 },
  "cafe-arabica": {
    nome: "Café arábica",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  borracha: {
    nome: "Borracha",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  cha: { nome: "Chá", sementesHa: 0, rendimentoHa: 0, maturacaoHoras: 0 },
  laranja: {
    nome: "Laranja",
    sementesHa: 0,
    rendimentoHa: 0,
    maturacaoHoras: 0,
  },
  coco: { nome: "Coco", sementesHa: 0, rendimentoHa: 0, maturacaoHoras: 0 },
};

function f(v) {
  return v.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

function calcular() {
  const key = planta.value;
  const venda = +precoVenda.value;
  const semente = +precoSemente.value;
  if (!venda || !semente) return alert("Preencha todos os campos");

  const p = plantas[key];
  const precoKg = venda / 1000;
  const custo = p.sementesHa * semente;
  const bruto = p.rendimentoHa * precoKg;
  const liquido = bruto - custo;
  const hora = liquido / p.maturacaoHoras;

  resultado.innerHTML = `
    <div class="linha"><span>🌱 Planta</span><strong>${p.nome}</strong></div>
    <div class="linha"><span>💸 Custo</span><strong>R$ ${f(
      custo
    )}</strong></div>
    <div class="linha"><span>💰 Bruto</span><strong>R$ ${f(
      bruto
    )}</strong></div>
    <div class="destaque">Lucro líquido<strong>R$ ${f(liquido)}</strong></div>
  `;

  salvarRanking({ planta: key, venda, semente, custo, bruto, liquido, hora });
}

function salvarRanking(item) {
  const dados = JSON.parse(localStorage.getItem("ranking")) || [];
  dados.push(item);
  dados.sort((a, b) => b.liquido - a.liquido);
  localStorage.setItem("ranking", JSON.stringify(dados));
  renderRanking();
}

function renderRanking() {
  ranking.innerHTML = "";
  const dados = JSON.parse(localStorage.getItem("ranking")) || [];
  dados.forEach((r, i) => {
    ranking.innerHTML += `
      <div class="rank-item" onclick="abrirModal(${i})">
        <span>${i + 1}º ${plantas[r.planta].nome}</span>
        <strong>R$ ${f(r.liquido)}</strong>
        <button onclick="event.stopPropagation();excluir(${i})">✖</button>
      </div>`;
  });
}

function excluir(i) {
  const dados = JSON.parse(localStorage.getItem("ranking"));
  dados.splice(i, 1);
  localStorage.setItem("ranking", JSON.stringify(dados));
  renderRanking();
}

function abrirModal(i) {
  const r = JSON.parse(localStorage.getItem("ranking"))[i];
  const p = plantas[r.planta];
  modal.classList.add("active");
  modalBody.innerHTML = `
    <h3>${p.nome}</h3>
    <p>🌾 Sementes/ha: ${p.sementesHa} kg</p>
    <p>📦 Rendimento/ha: ${p.rendimentoHa.toLocaleString("pt-BR")} kg</p>
    <p>💸 Custo: R$ ${f(r.custo)}</p>
    <p>💰 Bruto: R$ ${f(r.bruto)}</p>
    <p>📈 Líquido: <strong>R$ ${f(r.liquido)}</strong></p>
    <p>⚡ Por hora: R$ ${f(r.hora)}</p>
  `;
}

function fecharModal(e) {
  if (!e || e.target.id === "modal") modal.classList.remove("active");
}

renderRanking();
