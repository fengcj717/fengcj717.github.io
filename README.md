# 随风的数字花园

这是 [blackfeng.cn](https://blackfeng.cn) 的 Hexo 源码仓库。

## 本地预览

```bash
npm ci
npm run server
```

访问 `http://localhost:4000`。

## 发布文章

1. 在 `source/_posts/` 新建使用简短英文名称的 Markdown 文件，例如 `my-new-post.md`；文件名会成为文章网址。
2. 本地运行 `npm run build` 检查构建。
3. 将改动推送到 `main` 分支。
4. GitHub Actions 自动构建并发布站点。

文章 front matter 示例：

```yaml
---
title: 文章标题
date: 2026-06-19 20:00:00
categories:
  - 分类
tags:
  - 标签
description: 用一两句话概括文章内容。
---
```

首次使用自动发布前，请在 GitHub 仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
