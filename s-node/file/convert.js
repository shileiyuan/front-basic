const fs = require('fs')
const path = require('path')
const iconv = require('iconv-lite')
const chardet = require('chardet')
const util = require('util')

const { promisify } = util

// 自己写的promisify
const p = api => (...args) => new Promise((resolve, reject) => api(...args, (err, data) => err ? reject(err) : resolve(data)))

const [readdir, mkdir, stat, readFile, writeFile] = ['readdir', 'mkdir', 'stat', 'readFile', 'writeFile'].map(name => p(fs[name]))

const detectFile = p(chardet.detectFile)

// 将GBK编码转换成utf-8编码
const convert = function (from, to) {
  fs.readdir(from, (err, files) => {
    fs.mkdir(to, err => {
      console.log(`目录${to}创建成功`)
      files.forEach(file => {
        const from2 = path.join(from, file)
        const to2 = path.join(to, file)
        fs.stat(from2, (err, stat) => {
          if (stat.isDirectory()) {
            convert(from2, to2)
          } else {
            fs.readFile(from2, (err, data) => {
              chardet.detectFile(from2, (err, encoding) => {
                if (encoding === 'Big5' || encoding === 'GB18030') {
                  data = iconv.decode(data, 'gbk')
                }
                fs.writeFile(to2, data, err => {
                  console.log(`文件${to2}写入成功`)
                })
              })
            })
          }
        })
      })
    })
  })
}

// async await 版本
const convert_await = async function (from, to) {
  const files = await readdir(from)
  try {
    const err = await mkdir(to)
  } catch (error) {
    console.log('error', error)
    return
  }
  files.forEach(async file => {
    const from2 = path.join(from, file)
    const to2 = path.join(to, file)
    const status = await stat(from2)
    if (status.isDirectory()) {
      convert_await(from2, to2)
    } else {
      let data = await readFile(from2)
      const encoding = await detectFile(from2)
      if (encoding === 'Big5' || encoding === 'GB18030') {
        data = iconv.decode(data, 'gbk')
      }
      fs.writeFile(to2, data, err => {
        console.log(`文件${to2}写入成功`)
      })
    }
  })
}


convert_await('./abc', './def')