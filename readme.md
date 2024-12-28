好的，我来帮你编写一个详细的 README.md 文件：

```markdown:README.md
# 图片压缩工具

一个高效的在线图片压缩工具，支持批量处理和自定义压缩质量，帮助用户轻松压缩图片文件大小。

## 🌟 功能特点

- ✨ 支持批量上传和处理（最多10张同时处理）
- 🖱️ 拖拽上传支持
- 🎚️ 自定义压缩质量（1-100%）
- 👀 实时预览压缩效果
- 📊 显示压缩前后的文件大小和压缩比率
- ⬇️ 一键下载压缩后的图片
- 🖼️ 支持主流图片格式（PNG、JPG等）

## 🛠️ 技术栈

- **后端**
  - Node.js
  - Express.js
  - Sharp (图片处理)
  - Multer (文件上传)

- **前端**
  - Vue.js 3
  - HTML5
  - CSS3

## 📂 项目结构

```tree
image-compressor/
├── app.js              # 后端服务主文件
├── package.json        # 项目配置文件
├── public/            # 静态文件目录
│   └── index.html     # 前端页面
├── uploads/           # 图片上传和处理目录
├── .gitignore         # Git忽略文件配置
└── README.md          # 项目说明文档
```

## 🚀 快速开始

### 环境要求

- Node.js >= 14.0.0
- NPM >= 6.0.0

### 安装步骤

1. 克隆项目
```bash
git clone git@github.com:ly0o0o/compress-images.git
cd image-compressor
```

2. 安装依赖
```bash
npm install
```

3. 运行项目
```bash
npm run dev
```

4. 访问应用
打开浏览器访问 http://localhost:3000

## 📖 使用说明

1. **上传图片**
   - 点击上传区域选择图片
   - 或直接将图片拖拽到上传区域
   - 支持同时选择多个图片文件

2. **调整压缩设置**
   - 使用滑块调节压缩质量（默认60%）
   - 数值越低，压缩率越高，文件越小

3. **压缩处理**
   - 点击"开始压缩"按钮
   - 等待处理完成
   - 查看压缩效果对比

4. **下载图片**
   - 点击"下载压缩后的图片"按钮
   - 或直接点击压缩后图片下方的下载按钮

## ⚠️ 使用限制

- 单个文件大小上限：5MB
- 支持的文件格式：PNG、JPG、JPEG
- 最多同时处理10张图片
- 建议压缩质量范围：40-80（平衡质量和大小）

## 💡 最佳实践

- 对于照片类图片，建议压缩质量设置在60-80之间
- 对于图标类图片，可以将压缩质量设置在40-60之间
- 批量处理时，建议每批次不超过5张图片以获得最佳性能

## 🔧 开发命令

```bash
# 开发模式运行
npm run dev

# 生产模式运行
npm start
```

## 📝 注意事项

1. 请确保上传的是有效的图片文件
2. 大文件处理可能需要较长时间，请耐心等待
3. 建议定期清理 uploads 目录以节省存储空间

## 🤝 贡献指南

欢迎提交问题和改进建议！提交代码请遵循以下步骤：

1. Fork 项目
2. 创建新的分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 开源协议

本项目基于 MIT 协议开源，详见 [LICENSE](LICENSE) 文件。
```

这个 README.md 文件：
1. 使用了表情符号增加可读性
2. 清晰地描述了项目功能和特点
3. 详细说明了安装和使用步骤
4. 提供了最佳实践建议
5. 包含了完整的使用限制和注意事项
6. 添加了贡献指南和开源协议说明

需要我对任何部分进行修改或补充吗？
