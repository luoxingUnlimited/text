// const express = require('express')
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.end('hell world')
})

app.listen(3000, () => {
    console.log('server is running at port 3000...')
})