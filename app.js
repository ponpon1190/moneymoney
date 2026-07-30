/* ==========================================================================
   Fresh Grass Green Expense Tracker - Application Core Logic
   ========================================================================== */

// Default Categories & Budgets
const DEFAULT_BUDGETS = {
  '餐飲': 8000,
  '交通': 3000,
  '娛樂購物': 4000,
  '日常用品': 3000,
  '影音訂閱': 1500,
  '水電費': 3000,
  '電信費': 1000,
  '保險費': 20000,
  '醫療健康': 2000,
  '旅遊': 5000,
  '其他支出': 2000
};

const CATEGORY_ICONS = {
  '餐飲': 'fa-utensils',
  '交通': 'fa-bus',
  '娛樂購物': 'fa-bag-shopping',
  '日常用品': 'fa-basket-shopping',
  '影音訂閱': 'fa-tv',
  '水電費': 'fa-bolt',
  '電信費': 'fa-mobile-screen',
  '保險費': 'fa-user-shield',
  '醫療健康': 'fa-stethoscope',
  '旅遊': 'fa-plane',
  '薪資收入': 'fa-money-bill-wave',
  '獎金收入': 'fa-gift',
  '其他收入': 'fa-wallet',
  '其他支出': 'fa-receipt'
};

const INITIAL_TRANSACTIONS = [
  { id: 'tx-1', date: '2026-07-05', type: 'income', nature: 'income', category: '薪資收入', amount: 60000, payment: '銀行轉帳', description: '七月份公司發薪' },
  { id: 'tx-2', date: '2026-07-06', type: 'expense', nature: 'fixed-monthly', category: '電信費', amount: 999, payment: '信用卡', description: '電信5G月租費' },
  { id: 'tx-3', date: '2026-07-08', type: 'expense', nature: 'fixed-monthly', category: '影音訂閱', amount: 390, payment: '信用卡', description: 'Netflix 高級版月費' },
  { id: 'tx-4', date: '2026-07-08', type: 'expense', nature: 'fixed-monthly', category: '影音訂閱', amount: 268, payment: '信用卡', description: 'Spotify 家庭版' },
  { id: 'tx-5', date: '2026-07-10', type: 'expense', nature: 'fixed-bimonthly', category: '水電費', amount: 1850, payment: '銀行轉帳', description: '6-7月台電電費自動扣繳' },
  { id: 'tx-6', date: '2026-07-12', type: 'expense', nature: 'variable', category: '餐飲', amount: 150, payment: 'LINE Pay', description: '公司附近池上便當午餐' },
  { id: 'tx-7', date: '2026-07-15', type: 'expense', nature: 'variable', category: '餐飲', amount: 1250, payment: '信用卡', description: '週末好友美式餐廳聚餐' },
  { id: 'tx-8', date: '2026-07-18', type: 'expense', nature: 'variable', category: '交通', amount: 500, payment: '現金', description: '悠遊卡捷運自動加值' },
  { id: 'tx-9', date: '2026-07-20', type: 'expense', nature: 'variable', category: '交通', amount: 220, payment: 'LINE Pay', description: '加班雨天搭乘 Uber 回家' },
  { id: 'tx-10', date: '2026-07-22', type: 'expense', nature: 'variable', category: '日常用品', amount: 1450, payment: 'LINE Pay', description: '全聯福利中心補貨生活用品' },
  { id: 'tx-11', date: '2026-07-25', type: 'expense', nature: 'variable', category: '娛樂購物', amount: 2800, payment: '信用卡', description: '百貨公司夏季折扣治裝' },
  { id: 'tx-12', date: '2026-07-28', type: 'expense', nature: 'variable', category: '餐飲', amount: 450, payment: 'LINE Pay', description: '星巴克咖啡與下午茶' },
  { id: 'tx-13', date: '2026-07-30', type: 'expense', nature: 'variable', category: '醫療健康', amount: 200, payment: '現金', description: '耳鼻喉科看診掛號費' }
];

// App State
let transactions = [];
let budgets = {};
let activeTab = 'tab-dashboard';
let dailyTrendChart = null;
let fixedVsVarChart = null;
let categoryPieChart = null;
let currentScannedData = null;

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  loadDataFromStorage();
  initCategoryDropdowns();
  setupTabNavigation();
  setupEventListeners();
  renderApp();
});

function loadDataFromStorage() {
  const savedTx = localStorage.getItem('smart_expense_transactions');
  const savedBudgets = localStorage.getItem('smart_expense_budgets');

  transactions = savedTx ? JSON.parse(savedTx) : INITIAL_TRANSACTIONS;
  budgets = savedBudgets ? JSON.parse(savedBudgets) : DEFAULT_BUDGETS;
}

function saveDataToStorage() {
  localStorage.setItem('smart_expense_transactions', JSON.stringify(transactions));
  localStorage.setItem('smart_expense_budgets', JSON.stringify(budgets));
}

function initCategoryDropdowns() {
  const txCategorySelect = document.getElementById('tx-category');
  const filterCategorySelect = document.getElementById('filter-category');

  const categories = Object.keys(DEFAULT_BUDGETS).concat(['薪資收入', '獎金收入', '其他收入']);

  let optionsHtml = '';
  categories.forEach(cat => optionsHtml += `<option value="${cat}">${cat}</option>`);
  txCategorySelect.innerHTML = optionsHtml;

  let filterOptionsHtml = '<option value="all">所有類別</option>';
  categories.forEach(cat => filterOptionsHtml += `<option value="${cat}">${cat}</option>`);
  filterCategorySelect.innerHTML = filterOptionsHtml;
}

// --- Tab Navigation Setup ---
function setupTabNavigation() {
  const desktopBtns = document.querySelectorAll('.desktop-tabs .tab-btn');
  const mobileNavBtns = document.querySelectorAll('.mobile-nav .mobile-nav-btn');

  function switchTab(targetTabId) {
    activeTab = targetTabId;

    // Toggle active state for desktop buttons
    desktopBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTabId);
    });

    // Toggle active state for mobile nav buttons
    mobileNavBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTabId);
    });

    // Show active tab content
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.toggle('active', content.id === targetTabId);
    });

    // If charts tab activated, re-render charts so canvas dimensions update correctly
    if (targetTabId === 'tab-charts') {
      renderCharts();
    }
  }

  desktopBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  mobileNavBtns.forEach(btn => {
    if (btn.dataset.tab) {
      btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    }
  });

  // Mobile FAB button (+)
  const mobileFab = document.getElementById('mobile-fab-add');
  if (mobileFab) {
    mobileFab.addEventListener('click', () => openManualModal());
  }
}

// --- Main Render Controller ---
function renderApp() {
  renderMetrics();
  renderCategoryAnalysisTab();
  renderTransactionsTable();
  if (activeTab === 'tab-charts') {
    renderCharts();
  }
  saveDataToStorage();
}

// --- 1. Dashboard Metrics ---
function renderMetrics() {
  let totalIncome = 0;
  let totalExpense = 0;
  let fixedExpense = 0;
  let varExpense = 0;

  transactions.forEach(tx => {
    const amt = Number(tx.amount);
    if (tx.type === 'income') {
      totalIncome += amt;
    } else {
      totalExpense += amt;
      if (tx.nature && tx.nature.startsWith('fixed')) {
        fixedExpense += amt;
      } else {
        varExpense += amt;
      }
    }
  });

  const netBalance = totalIncome - totalExpense;
  const savingsRate = totalIncome > 0 ? Math.round((netBalance / totalIncome) * 100) : 0;

  let totalBudget = 0;
  Object.values(budgets).forEach(b => totalBudget += Number(b));
  const budgetUsagePercent = totalBudget > 0 ? Math.round((totalExpense / totalBudget) * 100) : 0;

  document.getElementById('metric-total-income').textContent = `NT$ ${totalIncome.toLocaleString()}`;
  document.getElementById('metric-total-expense').textContent = `NT$ ${totalExpense.toLocaleString()}`;
  document.getElementById('metric-fixed-expense').textContent = `固定: $${fixedExpense.toLocaleString()}`;
  document.getElementById('metric-var-expense').textContent = `變動: $${varExpense.toLocaleString()}`;

  const balanceEl = document.getElementById('metric-net-balance');
  balanceEl.textContent = `NT$ ${netBalance.toLocaleString()}`;
  balanceEl.style.color = netBalance >= 0 ? '#059669' : '#dc2626';

  document.getElementById('metric-savings-rate').textContent = `儲蓄率 ${savingsRate}% (${netBalance >= 0 ? '正向累積' : '超支'})`;
  document.getElementById('metric-budget-percent').textContent = `${budgetUsagePercent}%`;
  document.getElementById('metric-budget-amount').textContent = `已花費 $${totalExpense.toLocaleString()} / 總預算 $${totalBudget.toLocaleString()}`;

  const progressBar = document.getElementById('metric-budget-bar');
  const statusBadge = document.getElementById('budget-status-badge');

  progressBar.style.width = `${Math.min(budgetUsagePercent, 100)}%`;

  if (budgetUsagePercent >= 100) {
    progressBar.className = 'progress-bar-fill danger';
    statusBadge.className = 'badge badge-danger';
    statusBadge.textContent = '❌ 超出總預算';
  } else if (budgetUsagePercent >= 80) {
    progressBar.className = 'progress-bar-fill warning';
    statusBadge.className = 'badge badge-warning';
    statusBadge.textContent = '⚠️ 接近上限 (80%+)';
  } else {
    progressBar.className = 'progress-bar-fill';
    statusBadge.className = 'badge badge-success';
    statusBadge.textContent = '✅ 正常';
  }
}

// --- 2. Tab 2: Monthly Category Expense Analysis ---
function renderCategoryAnalysisTab() {
  const summaryContainer = document.getElementById('category-summary-cards');
  const cardsContainer = document.getElementById('budget-cards-container');

  // Compute category totals
  const categoryTotals = {};
  let totalExpense = 0;

  transactions.forEach(tx => {
    if (tx.type === 'expense') {
      const amt = Number(tx.amount);
      categoryTotals[tx.category] = (categoryTotals[tx.category] || 0) + amt;
      totalExpense += amt;
    }
  });

  // Top spending category
  let topCategory = '無';
  let topAmount = 0;
  Object.keys(categoryTotals).forEach(cat => {
    if (categoryTotals[cat] > topAmount) {
      topAmount = categoryTotals[cat];
      topCategory = cat;
    }
  });

  // Render Top Analytics Row
  summaryContainer.innerHTML = `
    <div class="cat-stat-card">
      <h4>本月最高花費類別</h4>
      <h3>${topCategory} ($${topAmount.toLocaleString()})</h3>
    </div>
    <div class="cat-stat-card">
      <h4>最高類別支出佔比</h4>
      <h3>${totalExpense > 0 ? Math.round((topAmount / totalExpense) * 100) : 0}%</h3>
    </div>
    <div class="cat-stat-card">
      <h4>總消費類別數</h4>
      <h3>${Object.keys(categoryTotals).length} 個分類</h3>
    </div>
  `;

  // Render Budget Progress Cards for each category
  let html = '';
  Object.keys(DEFAULT_BUDGETS).forEach(cat => {
    const budget = budgets[cat] || DEFAULT_BUDGETS[cat];
    const spent = categoryTotals[cat] || 0;
    const percent = Math.round((spent / budget) * 100);
    const icon = CATEGORY_ICONS[cat] || 'fa-tag';

    let cardClass = 'budget-item-card';
    let statusTagHtml = '<span class="badge badge-success">✅ 正常</span>';
    let barClass = 'progress-bar-fill';

    if (percent >= 100) {
      cardClass += ' exceeded';
      statusTagHtml = `<span class="badge badge-danger">❌ 超額 $${(spent - budget).toLocaleString()}</span>`;
      barClass += ' danger';
    } else if (percent >= 80) {
      cardClass += ' warn';
      statusTagHtml = `<span class="badge badge-warning">⚠️ 已達 ${percent}%</span>`;
      barClass += ' warning';
    }

    html += `
      <div class="${cardClass}">
        <div class="budget-item-top">
          <span class="category-title">
            <i class="fa-solid ${icon}"></i> ${cat}
          </span>
          ${statusTagHtml}
        </div>
        <div class="budget-values">
          <span>已花費 <strong>$${spent.toLocaleString()}</strong></span>
          <span>預算上限 <strong>$${budget.toLocaleString()}</strong></span>
        </div>
        <div class="progress-bar-bg">
          <div class="${barClass}" style="width: ${Math.min(percent, 100)}%;"></div>
        </div>
      </div>
    `;
  });

  cardsContainer.innerHTML = html;
}

// --- 3. Transactions Table Rendering ---
function renderTransactionsTable() {
  const tbody = document.getElementById('transactions-table-body');
  const countBadge = document.getElementById('transaction-count-badge');

  const filterSearch = document.getElementById('filter-search').value.toLowerCase();
  const filterType = document.getElementById('filter-type').value;
  const filterCategory = document.getElementById('filter-category').value;

  const filtered = transactions.filter(tx => {
    const searchMatch = !filterSearch || 
      tx.description.toLowerCase().includes(filterSearch) || 
      tx.category.toLowerCase().includes(filterSearch);

    let typeMatch = true;
    if (filterType === 'income') typeMatch = tx.type === 'income';
    else if (filterType === 'expense-fixed') typeMatch = tx.type === 'expense' && tx.nature && tx.nature.startsWith('fixed');
    else if (filterType === 'expense-variable') typeMatch = tx.type === 'expense' && (!tx.nature || tx.nature === 'variable');

    const categoryMatch = filterCategory === 'all' || tx.category === filterCategory;

    return searchMatch && typeMatch && categoryMatch;
  });

  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
  countBadge.textContent = `共 ${filtered.length} 筆紀錄`;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; color: #7fa695; padding: 30px;">
          尚無符合條件的交易明細
        </td>
      </tr>
    `;
    return;
  }

  let html = '';
  filtered.forEach(tx => {
    const isIncome = tx.type === 'income';
    const amountStr = `${isIncome ? '+' : '-'} NT$ ${Number(tx.amount).toLocaleString()}`;
    const amountColor = isIncome ? '#059669' : '#e11d48';

    let natureLabel = '收入';
    let natureTagClass = 'tag-income';

    if (!isIncome) {
      if (tx.nature === 'fixed-monthly') { natureLabel = '固定 (月繳)'; natureTagClass = 'tag-fixed'; }
      else if (tx.nature === 'fixed-bimonthly') { natureLabel = '固定 (雙月繳)'; natureTagClass = 'tag-fixed'; }
      else if (tx.nature === 'fixed-yearly') { natureLabel = '固定 (年繳)'; natureTagClass = 'tag-fixed'; }
      else { natureLabel = '變動支出'; natureTagClass = 'tag-var'; }
    }

    const typeBadge = isIncome ? 
      '<span class="tag tag-income">收入</span>' : 
      '<span class="tag tag-expense">支出</span>';

    html += `
      <tr>
        <td style="font-weight: 500;">${tx.date}</td>
        <td>${typeBadge}</td>
        <td><span class="tag ${natureTagClass}">${natureLabel}</span></td>
        <td style="font-weight: 600;">${tx.category}</td>
        <td>${tx.description}</td>
        <td style="font-weight: 700; color: ${amountColor};">${amountStr}</td>
        <td><span style="font-size: 0.85rem; color: #335c4a;">${tx.payment}</span></td>
        <td>
          <button class="action-btn edit" onclick="editTransaction('${tx.id}')" title="編輯">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="action-btn delete" onclick="deleteTransaction('${tx.id}')" title="刪除">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

// --- 4. Chart.js Visualization ---
function renderCharts() {
  renderDailyTrendChart();
  renderFixedVsVarChart();
  renderCategoryPieChart();
}

function renderDailyTrendChart() {
  const canvas = document.getElementById('chart-daily-trend');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const dailyMap = {};
  transactions.forEach(tx => {
    if (tx.type === 'expense') {
      const day = tx.date.split('-')[2] + '日';
      dailyMap[day] = (dailyMap[day] || 0) + Number(tx.amount);
    }
  });

  const labels = Object.keys(dailyMap).sort((a, b) => parseInt(a) - parseInt(b));
  const data = labels.map(day => dailyMap[day]);

  if (dailyTrendChart) dailyTrendChart.destroy();

  dailyTrendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels.length > 0 ? labels : ['1日', '5日', '10日', '15日', '20日', '25日', '30日'],
      datasets: [{
        label: '每日支出 (NT$)',
        data: data.length > 0 ? data : [0, 0, 0, 0, 0, 0, 0],
        borderColor: '#059669',
        backgroundColor: 'rgba(5, 150, 105, 0.12)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#047857',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: '#e6f4ed' } },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderFixedVsVarChart() {
  const canvas = document.getElementById('chart-fixed-vs-var');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let fixedTotal = 0;
  let varTotal = 0;

  transactions.forEach(tx => {
    if (tx.type === 'expense') {
      if (tx.nature && tx.nature.startsWith('fixed')) {
        fixedTotal += Number(tx.amount);
      } else {
        varTotal += Number(tx.amount);
      }
    }
  });

  if (fixedVsVarChart) fixedVsVarChart.destroy();

  fixedVsVarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['固定支出 (常態扣繳)', '變動支出 (日常開銷)'],
      datasets: [{
        label: '金額 (NT$)',
        data: [fixedTotal, varTotal],
        backgroundColor: ['#0284c7', '#10b981'],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, grid: { color: '#e6f4ed' } },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderCategoryPieChart() {
  const canvas = document.getElementById('chart-category-pie');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const catMap = {};
  transactions.forEach(tx => {
    if (tx.type === 'expense') {
      catMap[tx.category] = (catMap[tx.category] || 0) + Number(tx.amount);
    }
  });

  const labels = Object.keys(catMap);
  const data = Object.values(catMap);
  const colors = ['#059669', '#10b981', '#0ea5e9', '#f59e0b', '#8b5cf6', '#ec4899', '#3b82f6', '#64748b'];

  if (categoryPieChart) categoryPieChart.destroy();

  categoryPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels.length > 0 ? labels : ['無資料'],
      datasets: [{
        data: data.length > 0 ? data : [1],
        backgroundColor: labels.length > 0 ? colors.slice(0, labels.length) : ['#d1fae5'],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right', labels: { boxWidth: 12, font: { size: 12 } } }
      },
      cutout: '65%'
    }
  });
}

// --- 5. AI Natural Language Parser ---
function handleAiParse() {
  const inputEl = document.getElementById('ai-text-input');
  const text = inputEl.value.trim();

  if (!text) {
    alert('請輸入自然語言記帳文字！');
    return;
  }

  const parsedItems = parseNaturalLanguageText(text);

  if (parsedItems.length === 0) {
    alert('無法解析金額與項目，請試試看如「午餐 150，搭計程車 220」');
    return;
  }

  const today = new Date().toISOString().split('T')[0];

  parsedItems.forEach(item => {
    transactions.push({
      id: 'tx-' + Date.now() + Math.random().toString(36).substr(2, 4),
      date: today,
      type: item.type,
      nature: item.nature,
      category: item.category,
      amount: item.amount,
      payment: item.payment,
      description: item.description
    });
  });

  inputEl.value = '';
  renderApp();
  alert(`✨ 成功自動解析並匯入 ${parsedItems.length} 筆帳目！`);
}

function parseNaturalLanguageText(text) {
  const segments = text.split(/[,;，；\n、]+/);
  const results = [];

  segments.forEach(seg => {
    seg = seg.trim();
    if (!seg) return;

    const amtMatch = seg.match(/(\d+)/);
    if (!amtMatch) return;

    const amount = parseInt(amtMatch[1]);
    let type = 'expense';
    let nature = 'variable';
    let category = '其他支出';
    let payment = '現金';

    let description = seg.replace(/\d+/g, '').replace(/(元|塊|塊錢|NT\$)/gi, '').trim();

    if (/刷卡|信用卡/i.test(seg)) payment = '信用卡';
    else if (/line\s*pay|linepay/i.test(seg)) payment = 'LINE Pay';
    else if (/轉帳|匯款|銀行/i.test(seg)) payment = '銀行轉帳';

    if (/薪資|薪水|收入|獎金|兼職|副業/i.test(seg)) {
      type = 'income';
      nature = 'income';
      category = '薪資收入';
    } else {
      if (/訂閱|netflix|spotify|apple|電信|保險|水電|房租/i.test(seg)) {
        nature = 'fixed-monthly';
        if (/netflix|spotify|apple|影音|訂閱/i.test(seg)) category = '影音訂閱';
        else if (/水電/i.test(seg)) { category = '水電費'; nature = 'fixed-bimonthly'; }
        else if (/電信/i.test(seg)) category = '電信費';
        else if (/保險/i.test(seg)) { category = '保險費'; nature = 'fixed-yearly'; }
      } else {
        if (/餐|午餐|晚餐|早餐|便當|飯|麵|咖啡|飲料|聚餐/i.test(seg)) category = '餐飲';
        else if (/計程車|uber|捷運|公車|高鐵|加油|停車/i.test(seg)) category = '交通';
        else if (/全聯|採買|日用品|衛生紙|超市/i.test(seg)) category = '日常用品';
        else if (/服飾|衣服|電影|遊戲|3c|購物/i.test(seg)) category = '娛樂購物';
        else if (/看診|藥|醫院|診所|健檢/i.test(seg)) category = '醫療健康';
      }
    }

    if (!description) description = category;

    results.push({ type, nature, category, amount, payment, description });
  });

  return results;
}

// --- 6. Invoice Scanner Simulation ---
function setupInvoiceScanner() {
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-invoice');

  dropZone.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      processInvoiceFile(e.target.files[0]);
    }
  });

  document.getElementById('btn-confirm-ocr').addEventListener('click', () => {
    if (currentScannedData) {
      transactions.push(currentScannedData);
      renderApp();
      closeModals();
      alert('✅ 發票辨識資料已成功帶入！');
    }
  });
}

function processInvoiceFile(file) {
  const dropZone = document.getElementById('drop-zone');
  const scanContainer = document.getElementById('scan-preview-container');
  const previewImg = document.getElementById('scanned-image-preview');
  const ocrBox = document.getElementById('ocr-result-box');
  const btnConfirm = document.getElementById('btn-confirm-ocr');

  dropZone.style.display = 'none';
  scanContainer.style.display = 'flex';
  ocrBox.style.display = 'none';
  btnConfirm.style.display = 'none';

  const reader = new FileReader();
  reader.onload = (e) => previewImg.src = e.target.result;
  reader.readAsDataURL(file);

  setTimeout(() => {
    scanContainer.style.display = 'none';
    ocrBox.style.display = 'block';
    btnConfirm.style.display = 'inline-flex';

    const today = new Date().toISOString().split('T')[0];
    const isSeven = Math.random() > 0.5;

    const mockMerchant = isSeven ? '7-ELEVEN 統一超商' : '全聯福利中心';
    const mockCategory = isSeven ? '餐飲' : '日常用品';
    const mockAmount = isSeven ? 165 : 480;
    const mockPayment = isSeven ? 'LINE Pay' : '信用卡';

    document.getElementById('ocr-merchant').textContent = mockMerchant;
    document.getElementById('ocr-date').textContent = today;
    document.getElementById('ocr-amount').textContent = `NT$ ${mockAmount}`;
    document.getElementById('ocr-category').textContent = `${mockCategory} (變動支出)`;

    currentScannedData = {
      id: 'tx-ocr-' + Date.now(),
      date: today,
      type: 'expense',
      nature: 'variable',
      category: mockCategory,
      amount: mockAmount,
      payment: mockPayment,
      description: `${mockMerchant} 發票電子載具`
    };
  }, 1600);
}

// --- 7. CSV Export & Import ---
function exportCSV() {
  if (transactions.length === 0) {
    alert('目前尚無帳目資料可匯出！');
    return;
  }

  let csvContent = '\uFEFF';
  csvContent += '日期,收支類型,支出屬性,分類項目,描述,金額,支付管道\n';

  transactions.forEach(tx => {
    const row = [
      tx.date,
      tx.type === 'income' ? '收入' : '支出',
      tx.nature || 'variable',
      tx.category,
      `"${tx.description.replace(/"/g, '""')}"`,
      tx.amount,
      tx.payment
    ].join(',');
    csvContent += row + '\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `GreenExpense_Backup_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function importCSV(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target.result;
    const lines = text.split('\n');

    if (lines.length <= 1) {
      alert('CSV 檔案內容為空！');
      return;
    }

    const newTxList = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const cols = line.split(',');
      if (cols.length >= 6) {
        newTxList.push({
          id: 'tx-imp-' + Date.now() + Math.random().toString(36).substr(2, 4),
          date: cols[0].trim(),
          type: cols[1].trim() === '收入' ? 'income' : 'expense',
          nature: cols[2] ? cols[2].trim() : 'variable',
          category: cols[3].trim(),
          description: cols[4].replace(/^"|"$/g, '').trim(),
          amount: Number(cols[5].trim()) || 0,
          payment: cols[6] ? cols[6].trim() : '現金'
        });
      }
    }

    if (newTxList.length > 0) {
      transactions = newTxList;
      renderApp();
      alert(`✅ 成功匯入 ${newTxList.length} 筆帳目紀錄！`);
    }
  };
  reader.readAsText(file);
}

// --- 8. Event Listeners & Modals ---
function setupEventListeners() {
  document.getElementById('btn-ai-parse').addEventListener('click', handleAiParse);
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.getElementById('ai-text-input').value = chip.dataset.text;
      handleAiParse();
    });
  });

  document.getElementById('filter-search').addEventListener('input', renderTransactionsTable);
  document.getElementById('filter-type').addEventListener('change', renderTransactionsTable);
  document.getElementById('filter-category').addEventListener('change', renderTransactionsTable);

  document.getElementById('btn-export-csv').addEventListener('click', exportCSV);
  document.getElementById('input-import-csv').addEventListener('change', (e) => {
    if (e.target.files.length > 0) importCSV(e.target.files[0]);
  });

  document.getElementById('btn-add-manual').addEventListener('click', () => openManualModal());
  document.getElementById('btn-scan-invoice').addEventListener('click', () => {
    openModal('modal-scanner');
    resetScannerModal();
  });

  document.getElementById('btn-edit-budgets-tab2').addEventListener('click', () => {
    document.querySelector('.tab-btn[data-tab="tab-settings"]').click();
  });

  document.querySelectorAll('.btn-close-modal').forEach(btn => {
    btn.addEventListener('click', closeModals);
  });

  document.getElementById('form-transaction').addEventListener('submit', (e) => {
    e.preventDefault();
    saveManualTransaction();
  });

  document.getElementById('form-settings-budgets').addEventListener('submit', (e) => {
    e.preventDefault();
    saveBudgetsFromSettings();
  });

  renderSettingsBudgetInputs();
  setupInvoiceScanner();
}

function openModal(id) {
  document.getElementById(id).classList.add('active');
}

function closeModals() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
}

function openManualModal(editId = null) {
  const form = document.getElementById('form-transaction');
  form.reset();

  document.getElementById('tx-date').value = new Date().toISOString().split('T')[0];

  if (editId) {
    const tx = transactions.find(t => t.id === editId);
    if (tx) {
      document.getElementById('tx-id').value = tx.id;
      document.getElementById('tx-type').value = tx.type;
      document.getElementById('tx-nature').value = tx.nature || 'variable';
      document.getElementById('tx-category').value = tx.category;
      document.getElementById('tx-amount').value = tx.amount;
      document.getElementById('tx-date').value = tx.date;
      document.getElementById('tx-payment').value = tx.payment;
      document.getElementById('tx-description').value = tx.description;
    }
  } else {
    document.getElementById('tx-id').value = '';
  }

  openModal('modal-transaction');
}

function saveManualTransaction() {
  const id = document.getElementById('tx-id').value;
  const type = document.getElementById('tx-type').value;
  const nature = document.getElementById('tx-nature').value;
  const category = document.getElementById('tx-category').value;
  const amount = Number(document.getElementById('tx-amount').value);
  const date = document.getElementById('tx-date').value;
  const payment = document.getElementById('tx-payment').value;
  const description = document.getElementById('tx-description').value.trim();

  if (id) {
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
      transactions[index] = { id, type, nature, category, amount, date, payment, description };
    }
  } else {
    transactions.push({
      id: 'tx-' + Date.now(),
      type, nature, category, amount, date, payment, description
    });
  }

  renderApp();
  closeModals();
}

function deleteTransaction(id) {
  if (confirm('確定要刪除這筆紀錄嗎？')) {
    transactions = transactions.filter(t => t.id !== id);
    renderApp();
  }
}

function editTransaction(id) {
  openManualModal(id);
}

function renderSettingsBudgetInputs() {
  const container = document.getElementById('settings-budget-list');
  let html = '';

  Object.keys(DEFAULT_BUDGETS).forEach(cat => {
    const budget = budgets[cat] || DEFAULT_BUDGETS[cat];
    html += `
      <div class="form-group">
        <label for="setting-budget-${cat}">${cat} 月度預算 (NT$)</label>
        <input type="number" id="setting-budget-${cat}" data-category="${cat}" value="${budget}" min="0" step="500">
      </div>
    `;
  });

  container.innerHTML = html;
}

function saveBudgetsFromSettings() {
  document.querySelectorAll('#settings-budget-list input').forEach(input => {
    const cat = input.dataset.category;
    budgets[cat] = Number(input.value) || 0;
  });

  renderApp();
  alert('✅ 預算設定已順利儲存！');
}

function resetScannerModal() {
  document.getElementById('drop-zone').style.display = 'block';
  document.getElementById('scan-preview-container').style.display = 'none';
  document.getElementById('ocr-result-box').style.display = 'none';
  document.getElementById('btn-confirm-ocr').style.display = 'none';
  currentScannedData = null;
}
