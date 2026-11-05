---
title: 场景演示
description: 体验模拟单据字段校验和人工复核，了解知识库问答和售后分流的实施路径。
date: 2026-06-20 09:30:00
comments: false
---

<div class="company-content">
<section class="company-page-intro" aria-labelledby="scenarios-title">
  <p class="company-kicker"><span aria-hidden="true"></span> 场景演示</p>
  <h1 id="scenarios-title">看一项任务怎么跑完</h1>
  <p class="company-lead">从输入、校验结果到人工处理，拆开看工作流的每一步。这里的样本和业务规则均为演示用。</p>
</section>
<section class="company-section demo-section" id="invoice-demo" aria-labelledby="invoice-title">
  <div class="demo-copy">
    <p class="company-kicker">在线演示 · 模拟数据</p>
    <h2 id="invoice-title">单据字段校验</h2>
    <p>财务收到单据后，系统用预置字段和订单记录做比对。你可以切换样本，观察金额不符或订单号缺失时怎样提示复核。</p>
    <ol class="demo-checklist">
      <li>核对单据与订单的编号</li>
      <li>比较单据金额和订单金额</li>
      <li>给出复核原因及处理建议</li>
    </ol>
  </div>
  <div class="demo-console">
    <form class="demo-controls" hidden>
      <label for="demo-sample">选择模拟样本</label>
      <div class="demo-inputs">
        <select id="demo-sample">
          <option value="match">样本 01 · 字段一致</option>
          <option value="amount" selected>样本 02 · 金额不符</option>
          <option value="missing">样本 03 · 缺订单号</option>
        </select>
        <button class="company-button primary" type="submit">运行校验</button>
      </div>
    </form>
    <noscript><p class="demo-no-script">启用 JavaScript 后可以切换样本。下面展示一份金额不符的模拟单据。</p></noscript>
    <dl class="demo-fields">
      <div><dt>订单编号</dt><dd id="expected-order">PO-DEMO-02</dd></div>
      <div><dt>单据编号字段</dt><dd id="observed-order">PO-DEMO-02</dd></div>
      <div><dt>订单金额</dt><dd id="expected-amount">¥1,080.00</dd></div>
      <div><dt>单据金额</dt><dd id="observed-amount">¥1,180.00</dd></div>
    </dl>
    <div class="demo-result" aria-live="polite" aria-atomic="true">
      <strong class="company-status neutral" id="demo-status">待校验</strong>
      <p id="demo-summary">运行校验后查看处理建议。</p>
    </div>
  </div>
</section>
<section class="company-section" aria-labelledby="other-scenarios-title">
  <div class="company-section-head"><div><p class="company-kicker">方案示例</p><h2 id="other-scenarios-title">两个常见的切入口</h2></div></div>
  <div class="company-cards company-cards-two">
    <article class="company-card">
      <span class="company-card-index" aria-hidden="true">01</span>
      <h3>员工查制度</h3>
      <p>员工询问报销条件，助手从有效制度中定位条款，返回出处。资料不足时提示补充信息或联系负责人。</p>
      <span class="company-card-note">验证指标 · 答案正确率、引用准确率</span>
    </article>
    <article class="company-card">
      <span class="company-card-index" aria-hidden="true">02</span>
      <h3>客服处理退换货</h3>
      <p>助手核对订单与售后政策。遇到规则冲突时，生成带判断依据的工单，由售后人员确认下一步。</p>
      <span class="company-card-note">验证指标 · 转人工有效率、处理耗时</span>
    </article>
  </div>
</section>
<section class="company-contact-band" aria-labelledby="scenarios-contact-title">
  <div><h2 id="scenarios-contact-title">想看看你的流程如何接入 AI？</h2><p>描述业务步骤和常见异常，就可以开始讨论演示范围。</p></div>
  <a class="company-button light" href="/about/">沟通业务需求 <span aria-hidden="true">↗</span></a>
</section>
</div>
