const APP_VERSION = "1.0.6";
const versaoSalva = localStorage.getItem("app_version");

if (!versaoSalva) {
  localStorage.removeItem("ranking");
  alert(
    `Sistema atualizado para a versão ${APP_VERSION}. Ranking antigo foi resetado.`
  );
}

localStorage.setItem("app_version", APP_VERSION);

const versao = document.getElementById("versao");
versao.innerHTML = `${APP_VERSION}`;

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
  feijaoDeCorda: {
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
  batataBranca: {
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
  milhetePerola: {
    nome: "Milhete pérola",
    sementesHa: 16,
    rendimentoHa: 1003,
    maturacaoHoras: 2 + 42 / 60 + 57 / 3600,
  },
  // trigo sarraceno
  trigoSarraceno: {
    nome: "Trigo sarraceno",
    sementesHa: 67,
    rendimentoHa: 1021,
    maturacaoHoras: 2 + 42 / 60 + 7 / 3600,
  },
  // batata doce
  batataDoce: {
    nome: "Batata doce",
    sementesHa: 1460,
    rendimentoHa: 12292,
    maturacaoHoras: 2 + 42 / 60 + 57 / 3600,
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
    sementesHa: 21,
    rendimentoHa: 61898,
    maturacaoHoras: 3 + 4 / 60 + 5 / 3600,
  },
  // aveia
  aveia: {
    nome: "Aveia",
    sementesHa: 112,
    rendimentoHa: 2328,
    maturacaoHoras: 3 + 4 / 60 + 5 / 3600,
  },
  // repolho
  repolho: {
    nome: "Repolho",
    sementesHa: 21,
    rendimentoHa: 31141,
    maturacaoHoras: 2 + 22 / 60 + 59 / 3600,
  },
  graoDeBicoCicer: {
    nome: "Grão de bico - Cicer",
    sementesHa: 97,
    rendimentoHa: 1187,
    maturacaoHoras: 3 + 21 / 60 + 58 / 3600,
  },
  // centeio
  centeio: {
    nome: "Centeio",
    sementesHa: 101,
    rendimentoHa: 3169,
    maturacaoHoras: 3 + 55 / 60 + 42 / 3600,
  },
  abobora: {
    nome: "Abóbora",
    sementesHa: 75,
    rendimentoHa: 25870,
    maturacaoHoras: 4 + 3 / 60 + 1 / 3600,
  },
  // arroz de várzea
  arrozDeVarzea: {
    nome: "Arroz de várzea",
    sementesHa: 168,
    rendimentoHa: 4728,
    maturacaoHoras: 4 + 10 / 60 + 3 / 3600,
  },
  // arroz de terras secas
  arrozDeTerrasSecas: {
    nome: "Arroz de terras secas",
    sementesHa: 224,
    rendimentoHa: 4728,
    maturacaoHoras: 4 + 11 / 60 + 8 / 3600,
  },
  // trigo
  trigo: {
    nome: "Trigo",
    sementesHa: 101,
    rendimentoHa: 3672,
    maturacaoHoras: 4 + 22 / 60 + 2 / 3600,
  },
  // cenoura
  cenoura: {
    nome: "Cenoura",
    sementesHa: 19,
    rendimentoHa: 36515,
    maturacaoHoras: 4 + 35 / 60 + 44 / 3600,
  },
  // linhal
  linhal: {
    nome: "Linhal",
    sementesHa: 30,
    rendimentoHa: 4266,
    maturacaoHoras: 4 + 35 / 60 + 44 / 3600,
  },
  // algodão
  algodao: {
    nome: "Algodão",
    sementesHa: 25,
    rendimentoHa: 2293,
    maturacaoHoras: 4 + 52 / 60 + 50 / 3600,
  },
  // grão-de-bico cajanus
  graoDeBicoCajanus: {
    nome: "Grão de bico - Cajanus",
    sementesHa: 20,
    rendimentoHa: 862,
    maturacaoHoras: 5 + 6 / 60 + 54 / 3600,
  },
  // inhames / taro / banana / mandioca etc
  inhameRoxo: {
    nome: "Inhame roxo",
    sementesHa: 2000,
    rendimentoHa: 8380,
    maturacaoHoras: 5 + 36 / 60 + 6 / 3600,
  },
  inhameBranco: {
    nome: "Inhame branco",
    sementesHa: 2000,
    rendimentoHa: 8380,
    maturacaoHoras: 6 / 60 + 4 / 3600,
  },
  taro: {
    nome: "Taro",
    sementesHa: 2000,
    rendimentoHa: 8310,
    maturacaoHoras: 6 + 40 / 60 + 6 / 3600,
  },
  inhameAmarelo: {
    nome: "Inhame amarelo",
    sementesHa: 2000,
    rendimentoHa: 8310,
    maturacaoHoras: 6 + 40 / 60 + 6 / 3600,
  },
  bananaDaTerra: {
    nome: "Banana da terra",
    sementesHa: 2000,
    rendimentoHa: 23200,
    maturacaoHoras: 6 + 57 / 60 + 12 / 3600,
  },
  mandioca: {
    nome: "Mandioca",
    sementesHa: 1000,
    rendimentoHa: 10305,
    maturacaoHoras: 7 + 12 / 60 + 49 / 3600,
  },
  canaDeAcucar: {
    nome: "Cana de açúcar",
    sementesHa: 10000,
    rendimentoHa: 74576,
    maturacaoHoras: 7 + 12 / 60 + 49 / 3600,
  },
  azeitona: {
    nome: "Azeitona",
    sementesHa: 200,
    rendimentoHa: 1813,
    maturacaoHoras: 10 + 32 / 60 + 25 / 3600,
  },
  cafeRobusta: {
    nome: "Café robusta",
    sementesHa: 125,
    rendimentoHa: 903,
    maturacaoHoras: 11 / 60 + 4 / 3600,
  },
  cacauComum: {
    nome: "Cacau comum",
    sementesHa: 70,
    rendimentoHa: 479,
    maturacaoHoras: 12 + 4 / 60 + 4 / 3600,
  },
  limao: {
    nome: "Limão",
    sementesHa: 350,
    rendimentoHa: 16947,
    maturacaoHoras: 12 + 36 / 60 + 47 / 3600,
  },
  cafeArabica: {
    nome: "Café arábica",
    sementesHa: 250,
    rendimentoHa: 903,
    maturacaoHoras: 12 + 36 / 60 + 47 / 3600,
  },
  borracha: {
    nome: "Borracha",
    sementesHa: 138,
    rendimentoHa: 1082,
    maturacaoHoras: 12 + 51 / 60 + 8 / 3600,
  },
  cha: {
    nome: "Chá",
    sementesHa: 75,
    rendimentoHa: 6631,
    maturacaoHoras: 11 + 24 / 60 + 2 / 3600,
  },
  laranja: {
    nome: "Laranja",
    sementesHa: 270,
    rendimentoHa: 20357,
    maturacaoHoras: 14 + 41 / 60 + 9 / 3600,
  },
  coco: {
    nome: "Coco",
    sementesHa: 175,
    rendimentoHa: 5718,
    maturacaoHoras: 14 + 55 / 60 + 30 / 3600,
  },
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
