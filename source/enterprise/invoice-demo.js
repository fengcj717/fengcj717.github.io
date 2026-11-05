const demo = document.querySelector('#invoice-demo');
const form = demo.querySelector('form');
const samplePicker = demo.querySelector('#demo-sample');
const status = demo.querySelector('#demo-status');
const summary = demo.querySelector('#demo-summary');

const samples = {
  match: { order: 'PO-DEMO-01', enteredOrder: 'PO-DEMO-01', total: 108000, enteredTotal: 108000 },
  amount: { order: 'PO-DEMO-02', enteredOrder: 'PO-DEMO-02', total: 108000, enteredTotal: 118000 },
  missing: { order: 'PO-DEMO-03', enteredOrder: '', total: 45000, enteredTotal: 45000 },
};
const currency = new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' });

function updateSample() {
  const sample = samples[samplePicker.value];
  demo.querySelector('#expected-order').textContent = sample.order;
  demo.querySelector('#observed-order').textContent = sample.enteredOrder || '未填写';
  demo.querySelector('#expected-amount').textContent = currency.format(sample.total / 100);
  demo.querySelector('#observed-amount').textContent = currency.format(sample.enteredTotal / 100);

  status.className = 'company-status neutral';
  status.textContent = '待校验';
  summary.textContent = '运行校验后查看处理建议。';
}

function checkSample(event) {
  event.preventDefault();
  const sample = samples[samplePicker.value];
  const issues = [];

  if (sample.enteredOrder !== sample.order) {
    issues.push(sample.enteredOrder ? '单据与订单的编号不一致' : '单据缺少订单编号');
  }
  if (sample.enteredTotal !== sample.total) {
    const difference = currency.format(Math.abs(sample.enteredTotal - sample.total) / 100);
    issues.push('单据与订单金额相差 ' + difference);
  }

  if (issues.length) {
    status.className = 'company-status review';
    status.textContent = '待人工复核';
    summary.textContent = issues.join('，') + '。建议核对原始单据和订单记录。';
  } else {
    status.className = 'company-status pass';
    status.textContent = '校验通过';
    summary.textContent = '订单号和金额一致。该样本可进入下一业务环节。';
  }
}

samplePicker.addEventListener('change', updateSample);
form.addEventListener('submit', checkSample);
form.hidden = false;
updateSample();
