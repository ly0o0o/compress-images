const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
const port = 3000;

// 中间件配置
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// 配置文件上传
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    // 保持原始文件扩展名
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  }
});

const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    // 只允许上传图片
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('只允许上传图片文件！'));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 限制5MB
  }
});

// 确保上传目录存在
const uploadDir = path.join(__dirname, 'uploads');
fs.mkdir(uploadDir, { recursive: true }).catch(console.error);

// 图片上传和压缩接口
app.post('/compress', upload.array('images', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({
        success: false,
        error: '请选择要上传的图片文件'
      });
    }

    const quality = parseInt(req.body.quality) || 60;
    const results = [];
    
    // 处理每个文件
    for (const file of req.files) {
      try {
        const originalSize = file.size;
        const imageInfo = await sharp(file.path).metadata();
        const outputPath = path.join(uploadDir, `compressed-${file.filename}`);
      
        await sharp(file.path)
          .resize({
            width: imageInfo.width,
            height: imageInfo.height,
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({ 
            quality: quality,
            progressive: true
          })
          .toFile(outputPath);
    
        const compressedStats = await fs.stat(outputPath);
        results.push({
          originalSize,
          compressedSize: compressedStats.size,
          originalUrl: `/uploads/${file.filename}`,
          compressedUrl: `/uploads/compressed-${file.filename}`,
          compressionRatio: ((1 - compressedStats.size / originalSize) * 100).toFixed(2),
          filename: file.originalname
        });
      } catch (error) {
        console.error(`处理文件 ${file.originalname} 时出错:`, error);
        results.push({
          error: true,
          filename: file.originalname,
          message: '处理失败'
        });
      }
    }
    
    res.json({
      success: true,
      data: results
    });
  } catch (error) {
    console.error('压缩过程出错:', error);
    res.status(500).json({
      success: false,
      error: '图片处理失败，请重试'
    });
  }
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
}); 