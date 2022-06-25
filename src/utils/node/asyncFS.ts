import fs from 'fs'

const writeFile = async (path: string, content: string) => {
  return new Promise<void>((resolve, reject) => {
    fs.writeFile(path, content, e => {
      if (e) {
        return reject(e.message)
      }
      resolve()
    })
  })
}

const appendFile = async (path: string, content: string) => {
  return new Promise<void>((resolve, reject) => {
    fs.appendFile(path, content, e => {
      if (e) {
        return reject(e.message)
      }
      resolve()
    })
  })
}

const readFile = async (path: string) => {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(path, {encoding: 'utf-8'}, (e, data) => {
      if (e) {
        return reject(e.message)
      }
      resolve(data)
    })
  })
}
const removeFile = async (path: string) => {
  return new Promise<void>((resolve, reject) => {
    fs.rm(path, e => {
      if (e) {
        return reject(e.message)
      }
      resolve()
    })
  })
}

export default {writeFile, appendFile, readFile, removeFile}
